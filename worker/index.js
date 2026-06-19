/**
 * ============================================================
 *  CLOUDFLARE WORKER — Portfolio Chatbot de Badisse Chebaane
 *  Utilise l'API Groq (gratuite, ultra rapide)
 *
 *  SETUP :
 *  Dans Cloudflare → ton Worker → Settings → Variables and Secrets
 *  Ajoute : GROQ_API_KEY = ta clé Groq (commence par gsk_...)
 * ============================================================
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

export default {
  async fetch(request, env) {

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: CORS_HEADERS,
      });
    }

    try {
      const body = await request.json();
      const { messages, system } = body;

      if (!messages || !Array.isArray(messages)) {
        return new Response(JSON.stringify({ error: "messages array required" }), {
          status: 400,
          headers: CORS_HEADERS,
        });
      }

      const apiKey = env.GROQ_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ error: "GROQ_API_KEY not configured" }), {
          status: 500,
          headers: CORS_HEADERS,
        });
      }

      // Groq est compatible OpenAI — format simple
      const groqMessages = [];

      // System prompt en premier
      if (system) {
        groqMessages.push({ role: "system", content: system });
      }

      // Historique de conversation
      for (const msg of messages) {
        groqMessages.push({
          role: msg.role,
          content: typeof msg.content === "string"
            ? msg.content
            : (Array.isArray(msg.content)
                ? msg.content.filter(b => b.type === "text").map(b => b.text).join("\n")
                : String(msg.content)),
        });
      }

      // Appel Groq
      const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: groqMessages,
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      if (!groqResponse.ok) {
        const errText = await groqResponse.text();
        console.error("Groq API error:", errText);
        return new Response(
          JSON.stringify({ error: `Groq API error ${groqResponse.status}`, detail: errText }),
          { status: 502, headers: CORS_HEADERS }
        );
      }

      const groqData = await groqResponse.json();

      // Extraction du texte
      const text =
        groqData?.choices?.[0]?.message?.content ||
        "Je n'ai pas pu générer une réponse. Veuillez réessayer.";

      // Réponse au format attendu par le chatbot
      return new Response(
        JSON.stringify({ content: [{ type: "text", text }] }),
        { headers: CORS_HEADERS }
      );

    } catch (err) {
      console.error("Worker error:", err);
      return new Response(
        JSON.stringify({ error: "Internal server error", detail: err.message }),
        { status: 500, headers: CORS_HEADERS }
      );
    }
  },
};
