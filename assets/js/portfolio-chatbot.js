/**
 * ============================================================
 *  PORTFOLIO CHATBOT WIDGET — Badisse Chebaane
 *  Pour l'intégrer dans ton site, ajoute à la fin de ton HTML :
 *
 *  <script src="portfolio-data.js"></script>
 *  <script src="portfolio-chatbot.js"></script>
 *
 *  Le widget apparaîtra automatiquement en bas à droite.
 * ============================================================
 */

(function () {
  "use strict";

  // ── CONFIGURATION ────────────────────────────────────────────
  const CONFIG = {
    // ✅ Cloudflare Worker — proxy sécurisé vers Gemini (clé cachée côté serveur)
    // Remplace l'URL ci-dessous par l'URL exacte de TON Worker Cloudflare
    apiUrl: "https://badisse-chebaane.chebaane-badisse.workers.dev",
    maxTokens: 1024,
    accentColor: "#6366f1",        // couleur principale (violet/indigo)
    accentHover: "#4f46e5",
    bgColor: "#0f0f13",            // fond du chat
    surfaceColor: "#1a1a24",       // bulles assistant
    borderColor: "#2a2a3a",
  };

  // ── SYSTÈME PROMPT ───────────────────────────────────────────
  function buildSystemPrompt() {
    const d = window.PORTFOLIO_DATA || {};
    const proj = (d.projects || [])
      .map((p, i) =>
        `Projet ${i + 1} — ${p.name}
  Rôle: ${p.role}
  Stack: ${(p.stack || []).join(", ")}
  Contexte: ${p.contexte || "N/A"} | Durée: ${p.duree || "N/A"}
  Description: ${p.description}
  Points clés: ${(p.highlights || []).map((h) => `• ${h}`).join("\n           ")}
  Lien: ${p.lien || "Privé / non public"}`
      )
      .join("\n\n");

    const exp = (d.experiences || [])
      .map(
        (e) =>
          `${e.poste} @ ${e.entreprise} (${e.periode}, ${e.lieu})
  ${e.description}
  Réalisations: ${(e.realisations || []).map((r) => `• ${r}`).join("\n  ")}
  Stack: ${(e.stack || []).join(", ")}`
      )
      .join("\n\n");

    const faq = (d.faq || [])
      .map((f) => `Q: ${f.question}\nR: ${f.reponse}`)
      .join("\n\n");

    const skills = d.skills || {};
    const skillsText = Object.entries(skills)
      .map(([cat, list]) => `${cat}: ${list.join(", ")}`)
      .join(" | ");

    return `Tu es l'assistant personnel de ${d.name || "ce développeur"} sur son portfolio professionnel.
Ton rôle est d'aider les recruteurs à en savoir plus sur son profil, ses projets et ses compétences.

RÈGLES IMPORTANTES :
- Réponds dans la langue du recruteur (français ou anglais selon sa question)
- Sois précis, professionnel et chaleureux
- Ne parle QUE de ${d.name || "ce développeur"} quand on te pose des questions personnelles
- Pour les questions sur les technologies (ex: "c'est quoi Python ?", "est-ce que React X.X est stable ?"), utilise ta recherche web pour donner une réponse actuelle et précise
- Si une information n'est pas dans le profil ci-dessous, dis-le honnêtement
- Encourage toujours le contact direct pour les questions sensibles (salaire, disponibilité exacte)
- Réponds de façon concise (3-5 phrases max sauf si une explication détaillée est nécessaire)

━━━━━━━━━ PROFIL DE ${(d.name || "").toUpperCase()} ━━━━━━━━━

Poste visé: ${d.title || ""}
Localisation: ${d.location || ""}
Contact: ${d.email || ""} | LinkedIn: ${d.linkedin || ""} | GitHub: ${d.github || ""}

RÉSUMÉ:
${d.summary || ""}

COMPÉTENCES TECHNIQUES:
${skillsText}

FORMATION:
${(d.education || []).map((e) => `${e.diplome} — ${e.etablissement} (${e.annee})`).join("\n")}

LANGUES:
${(d.languages || []).map((l) => `${l.langue}: ${l.niveau}`).join(" | ")}

SOFT SKILLS:
${(d.softSkills || []).join(", ")}

━━━━━━━━━ PROJETS ━━━━━━━━━
${proj}

━━━━━━━━━ EXPÉRIENCES ━━━━━━━━━
${exp}

━━━━━━━━━ FAQ RECRUTEURS ━━━━━━━━━
${faq}`;
  }

  // ── SUGGESTIONS INITIALES ────────────────────────────────────
  const SUGGESTIONS = [
    { fr: "Parle-moi de tes projets", en: "Tell me about your projects" },
    { fr: "Quelles sont tes compétences ?", en: "What are your skills?" },
    { fr: "Quelle est ta disponibilité ?", en: "What's your availability?" },
    { fr: "Quelles technos maîtrises-tu ?", en: "Which technologies do you know?" },
  ];

  // ── HTML DU WIDGET ───────────────────────────────────────────
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --pcb-accent: ${CONFIG.accentColor};
        --pcb-accent-hover: ${CONFIG.accentHover};
        --pcb-bg: ${CONFIG.bgColor};
        --pcb-surface: ${CONFIG.surfaceColor};
        --pcb-border: ${CONFIG.borderColor};
        --pcb-text: #e8e8f0;
        --pcb-muted: #8888aa;
        --pcb-radius: 16px;
        --pcb-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.15);
      }

      #pcb-bubble {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 99999;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--pcb-accent), #8b5cf6);
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 30px rgba(99,102,241,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        font-family: inherit;
      }
      #pcb-bubble:hover {
        transform: scale(1.08);
        box-shadow: 0 12px 40px rgba(99,102,241,0.7);
      }
      #pcb-bubble svg { width: 24px; height: 24px; fill: white; }

      #pcb-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 18px;
        height: 18px;
        background: #ef4444;
        border-radius: 50%;
        border: 2px solid white;
        display: none;
      }
      #pcb-badge.show { display: block; }

      #pcb-widget {
        position: fixed;
        bottom: 100px;
        right: 28px;
        z-index: 99998;
        width: 380px;
        max-height: 580px;
        display: flex;
        flex-direction: column;
        background: var(--pcb-bg);
        border: 1px solid var(--pcb-border);
        border-radius: var(--pcb-radius);
        box-shadow: var(--pcb-shadow);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        font-size: 14px;
        color: var(--pcb-text);
        opacity: 0;
        transform: translateY(16px) scale(0.97);
        pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
        overflow: hidden;
      }
      #pcb-widget.open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: all;
      }

      /* Header */
      #pcb-header {
        padding: 16px 18px;
        background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1));
        border-bottom: 1px solid var(--pcb-border);
        display: flex;
        align-items: center;
        gap: 12px;
      }
      #pcb-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--pcb-accent), #8b5cf6);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        flex-shrink: 0;
        box-shadow: 0 0 0 2px rgba(99,102,241,0.3);
      }
      #pcb-header-info { flex: 1; min-width: 0; }
      #pcb-header-name {
        font-weight: 600;
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      #pcb-header-status {
        font-size: 11px;
        color: var(--pcb-muted);
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 2px;
      }
      #pcb-dot {
        width: 7px; height: 7px;
        border-radius: 50%;
        background: #22c55e;
        animation: pcb-pulse 2s infinite;
      }
      @keyframes pcb-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      #pcb-close {
        background: none;
        border: none;
        color: var(--pcb-muted);
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        transition: color 0.15s;
        line-height: 1;
        font-size: 18px;
      }
      #pcb-close:hover { color: var(--pcb-text); }

      /* Messages */
      #pcb-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        scroll-behavior: smooth;
      }
      #pcb-messages::-webkit-scrollbar { width: 4px; }
      #pcb-messages::-webkit-scrollbar-track { background: transparent; }
      #pcb-messages::-webkit-scrollbar-thumb { background: var(--pcb-border); border-radius: 4px; }

      .pcb-msg {
        display: flex;
        gap: 8px;
        align-items: flex-end;
        animation: pcb-fade-in 0.2s ease;
      }
      @keyframes pcb-fade-in {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .pcb-msg.user { flex-direction: row-reverse; }

      .pcb-msg-avatar {
        width: 28px; height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--pcb-accent), #8b5cf6);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px; flex-shrink: 0;
      }
      .pcb-msg.user .pcb-msg-avatar {
        background: #2a2a3a;
        font-size: 14px;
      }

      .pcb-bubble {
        max-width: 80%;
        padding: 10px 13px;
        border-radius: 14px;
        line-height: 1.5;
        word-break: break-word;
      }
      .pcb-msg.assistant .pcb-bubble {
        background: var(--pcb-surface);
        border: 1px solid var(--pcb-border);
        border-bottom-left-radius: 4px;
        color: var(--pcb-text);
      }
      .pcb-msg.user .pcb-bubble {
        background: linear-gradient(135deg, var(--pcb-accent), #7c3aed);
        color: #fff;
        border-bottom-right-radius: 4px;
      }

      /* Typing indicator */
      .pcb-typing {
        display: flex; gap: 4px; align-items: center; padding: 4px 2px;
      }
      .pcb-typing span {
        width: 7px; height: 7px;
        background: var(--pcb-muted);
        border-radius: 50%;
        animation: pcb-bounce 1.2s infinite;
      }
      .pcb-typing span:nth-child(2) { animation-delay: 0.15s; }
      .pcb-typing span:nth-child(3) { animation-delay: 0.3s; }
      @keyframes pcb-bounce {
        0%, 60%, 100% { transform: translateY(0); }
        30% { transform: translateY(-6px); }
      }

      /* Suggestions */
      #pcb-suggestions {
        padding: 4px 14px 12px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .pcb-suggestion {
        background: transparent;
        border: 1px solid var(--pcb-border);
        color: var(--pcb-muted);
        border-radius: 20px;
        padding: 5px 11px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.15s ease;
        font-family: inherit;
        white-space: nowrap;
      }
      .pcb-suggestion:hover {
        border-color: var(--pcb-accent);
        color: var(--pcb-accent);
        background: rgba(99,102,241,0.08);
      }

      /* Input */
      #pcb-input-area {
        padding: 12px 14px;
        border-top: 1px solid var(--pcb-border);
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }
      #pcb-input {
        flex: 1;
        background: var(--pcb-surface);
        border: 1px solid var(--pcb-border);
        border-radius: 12px;
        padding: 10px 13px;
        color: var(--pcb-text);
        font-size: 13.5px;
        font-family: inherit;
        resize: none;
        outline: none;
        max-height: 100px;
        min-height: 40px;
        transition: border-color 0.15s;
        line-height: 1.4;
      }
      #pcb-input::placeholder { color: var(--pcb-muted); }
      #pcb-input:focus { border-color: var(--pcb-accent); }

      #pcb-send {
        width: 38px; height: 38px;
        border-radius: 10px;
        background: linear-gradient(135deg, var(--pcb-accent), #7c3aed);
        border: none;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: opacity 0.15s, transform 0.15s;
        flex-shrink: 0;
      }
      #pcb-send:hover { opacity: 0.85; transform: scale(1.05); }
      #pcb-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
      #pcb-send svg { width: 16px; height: 16px; fill: white; }

      /* Footer */
      #pcb-footer {
        padding: 7px;
        text-align: center;
        font-size: 10.5px;
        color: var(--pcb-muted);
        border-top: 1px solid var(--pcb-border);
        letter-spacing: 0.02em;
      }

      /* Mobile */
      @media (max-width: 440px) {
        #pcb-widget { width: calc(100vw - 24px); right: 12px; bottom: 86px; }
        #pcb-bubble { right: 16px; bottom: 20px; }
      }
    `;
    document.head.appendChild(style);
  }

  function createWidget() {
    const d = window.PORTFOLIO_DATA || {};
    const name = d.name || "Portfolio";
    const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

    // Bubble button
    const bubble = document.createElement("button");
    bubble.id = "pcb-bubble";
    bubble.title = "Chat with my AI assistant";
    bubble.innerHTML = `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.015 2 11c0 2.387.88 4.575 2.333 6.27L3 21l4.047-1.465A10.17 10.17 0 0012 20.998c5.523 0 10-4.015 10-9s-4.477-9-10-9zm0 2c4.418 0 8 3.134 8 7s-3.582 7-8 7a8.18 8.18 0 01-3.78-.922l-.32-.176-2.628.952.687-2.463-.207-.314A6.826 6.826 0 014 11c0-3.866 3.582-7 8-7z"/>
      </svg>
      <span id="pcb-badge"></span>
    `;

    // Widget panel
    const widget = document.createElement("div");
    widget.id = "pcb-widget";
    widget.innerHTML = `
      <div id="pcb-header">
        <div id="pcb-avatar">🤖</div>
        <div id="pcb-header-info">
          <div id="pcb-header-name">Assistant de ${name}</div>
          <div id="pcb-header-status">
            <span id="pcb-dot"></span>
            <span>En ligne · Propulsé par Claude AI</span>
          </div>
        </div>
        <button id="pcb-close" title="Fermer">✕</button>
      </div>

      <div id="pcb-messages"></div>

      <div id="pcb-suggestions"></div>

      <div id="pcb-input-area">
        <textarea id="pcb-input" placeholder="Posez une question sur mon profil..." rows="1"></textarea>
        <button id="pcb-send">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>

      <div id="pcb-footer">Powered by Claude AI · Les infos viennent directement de ${name}</div>
    `;

    document.body.appendChild(bubble);
    document.body.appendChild(widget);
    return { bubble, widget };
  }

  // ── LOGIQUE DU CHAT ──────────────────────────────────────────
  let conversationHistory = [];
  let isLoading = false;

  function addMessage(role, content) {
    const messagesEl = document.getElementById("pcb-messages");
    const isUser = role === "user";
    const d = window.PORTFOLIO_DATA || {};

    const msgEl = document.createElement("div");
    msgEl.className = `pcb-msg ${role}`;

    const avatar = isUser
      ? `<div class="pcb-msg-avatar">👤</div>`
      : `<div class="pcb-msg-avatar">🤖</div>`;

    // Parse simple markdown: **bold**, *italic*, `code`
    const formatted = content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, "<code style='background:#2a2a3a;padding:1px 5px;border-radius:4px;font-size:12px;'>$1</code>")
      .replace(/\n/g, "<br>");

    msgEl.innerHTML = `
      ${!isUser ? avatar : ""}
      <div class="pcb-bubble">${formatted}</div>
      ${isUser ? avatar : ""}
    `;

    messagesEl.appendChild(msgEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msgEl;
  }

  function addTypingIndicator() {
    const messagesEl = document.getElementById("pcb-messages");
    const el = document.createElement("div");
    el.className = "pcb-msg assistant";
    el.id = "pcb-typing";
    el.innerHTML = `
      <div class="pcb-msg-avatar">🤖</div>
      <div class="pcb-bubble">
        <div class="pcb-typing">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function removeTypingIndicator() {
    const el = document.getElementById("pcb-typing");
    if (el) el.remove();
  }

  function showSuggestions(show) {
    const el = document.getElementById("pcb-suggestions");
    if (el) el.style.display = show ? "flex" : "none";
  }

  async function sendMessage(userText) {
    if (!userText.trim() || isLoading) return;

    isLoading = true;
    const sendBtn = document.getElementById("pcb-send");
    const inputEl = document.getElementById("pcb-input");
    if (sendBtn) sendBtn.disabled = true;
    if (inputEl) inputEl.value = "";

    showSuggestions(false);
    addMessage("user", userText);
    conversationHistory.push({ role: "user", content: userText });

    const typingEl = addTypingIndicator();

    try {
      const response = await fetch(CONFIG.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: buildSystemPrompt(),
          messages: conversationHistory.map((m) => ({
            role: m.role,
            content: typeof m.content === "string"
              ? m.content
              : (Array.isArray(m.content)
                  ? m.content.filter((b) => b.type === "text").map((b) => b.text).join("\n")
                  : String(m.content)),
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || `Erreur API ${response.status}`);
      }

      // Extract text from content blocks (handles tool_use + text)
      const assistantText = (data.content || [])
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim() || "Je n'ai pas pu générer une réponse. Veuillez réessayer.";

      removeTypingIndicator();
      addMessage("assistant", assistantText);
      conversationHistory.push({ role: "assistant", content: assistantText });

    } catch (err) {
      removeTypingIndicator();
      addMessage(
        "assistant",
        `⚠️ Une erreur s'est produite : ${err.message}. Veuillez réessayer ou contacter directement ${(window.PORTFOLIO_DATA || {}).name || "le développeur"}.`
      );
      console.error("[Portfolio Chatbot]", err);
    } finally {
      isLoading = false;
      if (sendBtn) sendBtn.disabled = false;
      if (inputEl) inputEl.focus();
    }
  }

  // ── INITIALISATION ───────────────────────────────────────────
  function init() {
    injectStyles();
    const { bubble, widget } = createWidget();

    // Suggestions
    const suggestionsEl = document.getElementById("pcb-suggestions");
    SUGGESTIONS.forEach((s) => {
      const btn = document.createElement("button");
      btn.className = "pcb-suggestion";
      btn.textContent = s.fr;
      btn.addEventListener("click", () => {
        sendMessage(s.fr);
        suggestionsEl.style.display = "none";
      });
      suggestionsEl.appendChild(btn);
    });

    // Welcome message
    const d = window.PORTFOLIO_DATA || {};
    const welcomeMsg = `Bonjour ! 👋 Je suis l'assistant IA de **${d.name || "ce développeur"}**.

Je peux vous parler de ses projets, ses compétences techniques, son parcours, et même rechercher des infos sur les technologies qu'il utilise.

N'hésitez pas à poser votre question !`;

    // Open/Close
    let isOpen = false;
    function openWidget() {
      isOpen = true;
      widget.classList.add("open");
      document.getElementById("pcb-badge")?.classList.remove("show");
      if (conversationHistory.length === 0) {
        setTimeout(() => {
          addMessage("assistant", welcomeMsg);
        }, 200);
      }
      setTimeout(() => document.getElementById("pcb-input")?.focus(), 300);
    }
    function closeWidget() {
      isOpen = false;
      widget.classList.remove("open");
    }

    bubble.addEventListener("click", () => (isOpen ? closeWidget() : openWidget()));
    document.getElementById("pcb-close")?.addEventListener("click", closeWidget);

    // Send logic
    const inputEl = document.getElementById("pcb-input");
    const sendBtn = document.getElementById("pcb-send");

    sendBtn?.addEventListener("click", () => {
      sendMessage(inputEl?.value || "");
    });

    inputEl?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(inputEl.value);
      }
    });

    // Auto-resize textarea
    inputEl?.addEventListener("input", () => {
      inputEl.style.height = "auto";
      inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + "px";
    });

    // Show badge after 3s to grab attention
    setTimeout(() => {
      if (!isOpen) document.getElementById("pcb-badge")?.classList.add("show");
    }, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
