/* =========================================================
   Badisse Chebaane — Portfolio · projects-data.js
   
   COMMENT MODIFIER UN PROJET :
   ─────────────────────────────
   Chaque clé correspond au data-project="..." de la carte HTML.
   
   Champs disponibles :
     title       → Titre affiché dans la modale
     meta        → Ligne de meta (date, entreprise…)
     description → Texte de présentation du projet
     highlights  → Tableau de bullets (réalisations clés)
     tags        → Technologies / mots-clés
     images      → Tableau de chemins vers tes images
                   ex: ["assets/images/projects/aradhi-1.jpg", "assets/images/projects/aradhi-2.jpg"]
     video       → URL YouTube / Vimeo, OU chemin local vers un .mp4
                   ex YouTube : "https://www.youtube.com/watch?v=XXXXXXXXX"
                   ex local   : "assets/videos/aradhi-demo.mp4"
     github      → URL du dépôt GitHub (optionnel)
     demo        → URL de la démo live (optionnel)
   
   RÈGLES :
     • Si tu veux vidéo + images → remplis video ET images
     • Si tu veux vidéo seule    → remplis video, laisse images: []
     • Si tu veux images seules  → laisse video: null, remplis images
     • Les images s'affichent en galerie scrollable sous la vidéo
   ========================================================= */

window.PROJECTS_DATA = {

  /* ── 1. ARADHI ─────────────────────────────────────────── */
  aradhi: {
    title: "Aradhi — Plateforme Immobilière Tunisienne",
    meta: "Janv. 2026 – Mai 2026 · Esprit School of Engineering",
    description:
      "Plateforme full-stack dédiée au marché immobilier tunisien, construite en équipe de 6. " +
      "J'ai piloté le workstream ML : prédiction de prix, classification d'images et moteur de recherche sémantique sur 10 000+ annonces.",
    highlights: [
      "Prédiction de prix avec XGBoost, Random Forest et ANN — pipeline TDSP complet",
      "Classification d'images d'annonces via MobileNetV2 fine-tuné",
      "Moteur de recherche sémantique FAISS + Sentence-BERT",
      "Chatbot GPT-2 et interface RAG intégrés",
      "Déploiement FastAPI + Flask sur AWS via Cloudflare Tunnel",
      "Dashboards Streamlit pour le suivi des performances",
    ],
    tags: ["XGBoost", "Random Forest", "ANN", "MobileNetV2", "FAISS", "Sentence-BERT", "GPT-2", "FastAPI", "Flask", "Streamlit", "AWS"],
    images: [
      // Remplace par tes propres captures d'écran
      // "assets/images/projects/aradhi-1.jpg",
      // "assets/images/projects/aradhi-2.jpg",
    ],
    video: null, // ex: "https://www.youtube.com/watch?v=XXXXXXXXX"
    github: "https://github.com/Badisse02", // mets l'URL exacte du repo
    demo: null,
  },

  /* ── 2. EVART ───────────────────────────────────────────── */
  evart: {
    title: "Evart — Plateforme de Ticketing Événementiel",
    meta: "Janv. 2025 – Mai 2025 · Scale IT, Paris (Remote)",
    description:
      "Système de billetterie culturelle dual-platform : une application web Symfony 6 et un client desktop JavaFX " +
      "parfaitement synchronisés, couvrant la navigation des événements, la réservation de billets et la commande de produits artisanaux.",
    highlights: [
      "Web app Symfony 6 + client desktop JavaFX synchronisés via une API REST",
      "Paiements en ligne Stripe avec gestion des webhooks",
      "Authentification JWT/session et accès basé sur les rôles (admin, organisateur, utilisateur)",
      "Mode offline-sync pour le client desktop",
      "Architecture REST découplée permettant l'évolution indépendante des deux plateformes",
    ],
    tags: ["Symfony 6", "JavaFX", "PHP", "Java", "Stripe", "JWT", "REST API", "MySQL"],
    images: [
      // "assets/images/projects/evart-1.jpg",
      // "assets/images/projects/evart-2.jpg",
    ],
    video: null,
    github: "https://github.com/Badisse02",
    demo: null,
  },

  /* ── 3. AI SWITCH (à compléter) ────────────────────────── */
  aiswitch: {
    title: "AI Switch",
    meta: "Date à préciser",
    description:
      "Description à compléter — ajoute ici le contexte, le problème résolu et les technologies utilisées.",
    highlights: [
      // "Bullet 1",
      // "Bullet 2",
    ],
    tags: ["À définir"],
    images: [],
    video: null,
    github: null,
    demo: null,
  },

  /* ── 4. SCALE IT (à compléter) ─────────────────────────── */
  scaleit: {
    title: "Projet — Scale IT (RAG Document Retrieval)",
    meta: "Mars 2024 – Septembre 2024 · Scale IT, Paris (Remote)",
    description:
      "Architecture d'un système de récupération documentaire RAG basé sur LLMs et recherche sémantique, " +
      "réduisant le temps de recherche moyen de 40 % par rapport à la solution keyword-only précédente.",
    highlights: [
      "Système RAG avec LLMs et recherche sémantique — lookup time -40%",
      "Pipelines d'évaluation ML : précision, rappel, MRR",
      "Dashboards Streamlit pour les revues hebdomadaires d'équipe — cycles de revue -30%",
      "Fine-tuning de modèles bi-encoder — +15 pp accuracy top-5 vs baseline zero-shot",
    ],
    tags: ["RAG", "LLM", "Semantic Search", "Streamlit", "Python", "Scikit-learn"],
    images: [],
    video: null,
    github: null,
    demo: null,
  },

  /* ── 5. DIRECT EMPLOI (à compléter) ────────────────────── */
  directemploi: {
    title: "Direct Emploi — Automatisation & SEO",
    meta: "Juin 2025 – Sept. 2025 · Direct Emploi, Paris (Remote)",
    description:
      "Automatisation de l'ingestion de flux d'emploi XML/ATS, web crawling concurrentiel, " +
      "audits SEMrush et co-construction de deux moteurs de recherche en production.",
    highlights: [
      "Ingestion XML/ATS automatisée pour 50+ comptes employeurs — traitement manuel -35%",
      "Web crawling ciblé : 1 000+ offres concurrentes identifiées",
      "Deux moteurs de recherche en production (Formation Continue & Franchise) — contenu indexé +40%",
    ],
    tags: ["XML", "ATS", "Web Crawling", "SEMrush", "SEO", "Python"],
    images: [],
    video: null,
    github: null,
    demo: null,
  },

  /* ── 6. POWER BI (à compléter) ─────────────────────────── */
  powerbi: {
    title: "Projet — Dashboard Power BI",
    meta: "Date à préciser",
    description:
      "Description à compléter — présente ici les KPIs, sources de données et insights business du dashboard.",
    highlights: [],
    tags: ["Power BI", "DAX", "À définir"],
    images: [],
    video: null,
    github: null,
    demo: null,
  },

  /* ── 7. ML PROJECT (à compléter) ───────────────────────── */
  mlproject: {
    title: "Projet — Machine Learning",
    meta: "Date à préciser",
    description:
      "Description à compléter — détaille ici le problème, le dataset, les modèles testés et les résultats.",
    highlights: [],
    tags: ["Scikit-learn", "À définir"],
    images: [],
    video: null,
    github: null,
    demo: null,
  },

};
