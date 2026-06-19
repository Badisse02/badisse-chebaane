/**
 * Cloudflare Worker — Proxy Anthropic API
 * ─────────────────────────────────────────
 * Déploiement :
 *   1. Va sur https://workers.cloudflare.com → "Create a Worker"
 *   2. Colle ce code, clique "Save & Deploy"
 *   3. Dans Settings → Variables → ajoute la variable :
 *        ANTHROPIC_API_KEY = sk-ant-xxxxx...  (ta vraie clé)
 *   4. Copie l'URL du worker (ex: https://portfolio-proxy.ton-pseudo.workers.dev)
 *   5. Mets cette URL dans portfolio-chatbot.js (voir CONFIG.apiUrl)
 */

export default {
  async fetch(request, env) {

    // ── Autorise uniquement les requêtes POST
    if (request.method === "OPTIONS") {
      return corsResponse("", 204);
    }
    if (request.method !== "POST") {
      return corsResponse(JSON.stringify({ error: "Method not allowed" }), 405);
    }

    // ── Vérifie que la clé API est configurée
    if (!env.ANTHROPIC_API_KEY) {
      return corsResponse(
        JSON.stringify({ error: "API key not configured on the server" }),
        500
      );
    }

    try {
      // ── Lit le body envoyé par le chatbot
      const body = await request.json();

      // ── Appelle l'API Anthropic (côté serveur, la clé est sécurisée)
      const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type":         "application/json",
          "x-api-key":            env.ANTHROPIC_API_KEY,
          "anthropic-version":    "2023-06-01",
          "anthropic-beta":       "web-search-2025-03-05",
        },
        body: JSON.stringify(body),
      });

      const data = await anthropicResponse.json();
      return corsResponse(JSON.stringify(data), anthropicResponse.status);

    } catch (err) {
      return corsResponse(
        JSON.stringify({ error: { message: err.message } }),
        500
      );
    }
  },
};

/** Ajoute les headers CORS à toutes les réponses */
function corsResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "Content-Type":                "application/json",
      "Access-Control-Allow-Origin": "*",          // autorise tous les domaines
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
