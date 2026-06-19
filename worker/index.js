/**
 * ============================================================
 *  CLOUDFLARE WORKER — Portfolio Chatbot de Badisse Chebaane
 *  Utilise l'API Google Gemini (gratuite jusqu'à un certain quota)
 *
 *  SETUP :
 *  1. Dans ton Worker Cloudflare → Settings → Variables and Secrets
 *     Ajoute : GEMINI_API_KEY = ta clé "my-key" (coche Encrypt)
 *  2. Colle ce fichier dans l'éditeur du Worker
 *  3. Save and Deploy
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

    // Preflight CORS
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

      const apiKey = env.GEMINI_API_KEY;
      if (!apiKey) {
        return new Response(JSON.stringify({ error: "GEMINI_API_KEY not configured" }), {
          status: 500,
          headers: CORS_HEADERS,
        });
      }

      // ── Conversion du format Anthropic → Gemini ─────────────
      // Le chatbot envoie { role: "user"/"assistant", content: "..." }
      // Gemini attend { role: "user"/"model", parts: [{ text: "..." }] }

      const geminiContents = messages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: typeof msg.content === "string"
          ? msg.content
          : (msg.content[0]?.text || "") }],
      }));

      // System prompt → injecté comme premier message "user" suivi d'un "model" ack
      // (Gemini n'a pas de systemInstruction dans gemini-1.5-flash via REST simple)
      const fullContents = system
        ? [
            { role: "user",  parts: [{ text: `[SYSTEM INSTRUCTIONS]\n${system}\n[END SYSTEM]\n\nCompris, je vais suivre ces instructions.` }] },
            { role: "model", parts: [{ text: "Compris, je suis prêt à répondre en tant qu'assistant portfolio de Badisse Chebaane." }] },
            ...geminiContents,
          ]
        : geminiContents;

      // ── Appel Gemini ─────────────────────────────────────────
      const geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: fullContents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
              topP: 0.9,
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT",        threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_HATE_SPEECH",       threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
            ],
          }),
        }
      );

      if (!geminiResponse.ok) {
        const errText = await geminiResponse.text();
        console.error("Gemini API error:", errText);
        return new Response(
          JSON.stringify({ error: `Gemini API error ${geminiResponse.status}`, detail: errText }),
          { status: 502, headers: CORS_HEADERS }
        );
      }

      const geminiData = await geminiResponse.json();

      // ── Extraction du texte ──────────────────────────────────
      const text =
        geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Je n'ai pas pu générer une réponse. Veuillez réessayer.";

      // ── Réponse au format attendu par le chatbot ─────────────
      return new Response(
        JSON.stringify({
          content: [{ type: "text", text }],
        }),
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
