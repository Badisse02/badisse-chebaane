/**
 * ============================================================
 *  PORTFOLIO CHATBOT — DONNÉES DE BADISSE CHEBAANE
 *  Généré automatiquement à partir du CV, READMEs, cahiers
 *  de charges et présentations fournis.
 *  Tu peux compléter / ajuster librement ce fichier.
 * ============================================================
 */

window.PORTFOLIO_DATA = {

  // ── IDENTITÉ ────────────────────────────────────────────────
  name: "Badisse Chebaane",
  title: "Data Science Engineering Student — ML · Deep Learning · MLOps",
  location: "Ariana, Tunisie (Open to Remote)",
  email: "Chebaane.badisse@gmail.com",
  phone: "+216 54 070 927",
  linkedin: "https://linkedin.com/in/badissechebaane",
  github: "https://github.com/Badisse02",
  portfolio: "",

  // ── RÉSUMÉ ──────────────────────────────────────────────────
  summary: `
    Étudiant ingénieur en Data Science à Esprit (Ariana, Tunisie), spécialisé en
    Machine Learning, Deep Learning et MLOps. Capable de construire des pipelines ML
    de bout en bout et de déployer des solutions IA à impact mesurable.
    Fort d'une double expérience en stage PFE (Scale IT — Paris, RAG/LLM ; Direct Emploi
    — Paris, développement web & SEO) et de plusieurs projets académiques et
    professionnels ambitieux. Activement en recherche d'opportunités en Data Science,
    ML Engineering ou MLOps.
  `,

  // ── COMPÉTENCES TECHNIQUES ───────────────────────────────────
  skills: {
    "Data Science & ML": [
      "Machine Learning (Scikit-learn, XGBoost, Random Forest)",
      "Deep Learning (TensorFlow, Keras, PyTorch)",
      "MLOps",
      "Fine-tuning de modèles (bi-encodeurs, GPT-2)",
      "Évaluation de modèles (Precision, Recall, MRR, F1, ROC-AUC)",
    ],
    "NLP & IA Générative": [
      "RAG (Retrieval-Augmented Generation)",
      "FAISS",
      "Sentence-Transformers / Sentence-BERT",
      "LLM (GPT-2, GPT-3, Mistral-7B, Llama-3)",
      "Groq API",
    ],
    "Computer Vision": [
      "MobileNetV2",
      "SegFormer",
      "Classification d'images",
      "Segmentation sémantique",
    ],
    "Data Engineering & Visualisation": [
      "Power BI",
      "Power Query",
      "Pandas",
      "Streamlit",
      "Excel",
      "Hadoop",
    ],
    "Développement Web & Backend": [
      "Python (FastAPI, Flask)",
      "Symfony 6 / PHP 8+",
      "Java / JavaFX",
      "Spring Boot",
      "React.js",
      "HTML / CSS / JS",
    ],
    "DevOps & Cloud": [
      "Docker",
      "GitHub Actions / CI-CD",
      "AWS",
      "Cloudflare Tunnel",
      "Poetry",
      "pytest / Flake8 / Lint",
    ],
    "Bases de données": ["MySQL", "PostgreSQL", "MongoDB"],
    "Autres outils": ["Git", "SEMrush", "Streamlit", "R"],
  },

  // ── PROJETS ─────────────────────────────────────────────────
  projects: [
    {
      name: "ARADHI — Plateforme immobilière IA pour le marché tunisien",
      description:
        "Plateforme intelligente d'immobilier tunisien utilisant l'IA pour prédire les prix, classifier la qualité des images, offrir une recherche sémantique et fournir des recommandations d'investissement.",
      role: "Lead ML Engineer (chef du workstream IA dans une équipe de 6 personnes)",
      stack: [
        "Python",
        "XGBoost",
        "Random Forest",
        "ANN (TensorFlow/Keras)",
        "MobileNetV2",
        "SegFormer",
        "FAISS",
        "Sentence-BERT",
        "GPT-2 (PyTorch)",
        "FastAPI",
        "Flask",
        "React.js",
        "Streamlit",
        "AWS",
        "Cloudflare Tunnel",
        "Docker",
        "GitHub Actions",
        "Poetry",
        "Groq API",
      ],
      highlights: [
        "Implémentation de la prédiction de prix immobiliers sur plus de 10 000 annonces (XGBoost meilleur modèle — pipeline TDSP modulaire)",
        "Classification d'images en 3 catégories (Luxe / Normal / Ancien) avec MobileNetV2",
        "Moteur de recherche sémantique FAISS + Sentence-BERT intégré dans une interface HTML/JS (RAG)",
        "Chatbot GPT-2 fine-tuné pour les requêtes en langage naturel sur l'immobilier",
        "Déploiement des modèles via FastAPI et Flask sur AWS avec tunnel Cloudflare",
        "Dashboards Streamlit pour les agents B2B et les analyses de séries temporelles (signaux achat/vente)",
        "Pipeline CI/CD avec Poetry, pytest, Flake8, GitHub Actions",
        "Méthodologie TDSP (Team Data Science Process) : DSO1 segmentation, DSO2 prédiction prix, DSO3 RAG/FAISS, DSO4 classification images",
      ],
      lien: "https://github.com/syrineguemira72/Esprit-PIDS-4DS3-2026--ARADHI-",
      duree: "Janvier 2026 – Mai 2026",
      contexte:
        "Académique-Professionnel — Projet PIDEV 4ème année Ingénierie Esprit, en collaboration avec l'entreprise Value",
      equipe: "6 personnes (Badisse Chebaane, Syrine Guemira, Ryhab Ben Hadj Slimen, Ghofrane Jmai, Neirouz Hannachi, Khaled ElAbed)",
    },
    {
      name: "AI Agent — Plateforme multi-modèles type ChatGPT",
      description:
        "Plateforme conversationnelle modulaire permettant d'utiliser plusieurs LLMs open-source et propriétaires depuis une seule interface : GPT-3, Mistral-7B, Llama-3, RAG, etc. Projet réalisé pour la société française AI Switch.",
      role: "Développeur Frontend / Interface Utilisateur (Streamlit) dans une équipe de 5 personnes",
      stack: [
        "Python",
        "Streamlit",
        "GPT-3 (OpenAI API)",
        "Mistral-7B",
        "Llama-3",
        "RAG",
        "LLM open-source",
      ],
      highlights: [
        "Développement de l'intégralité de l'interface utilisateur en Streamlit, permettant de switcher entre plusieurs LLMs depuis un seul dashboard",
        "Intégration de modèles open-source (Mistral-7B, Llama-3) et propriétaires (GPT-3) dans une architecture unifiée",
        "Implémentation d'un module RAG pour la recherche documentaire augmentée",
        "Travail en équipe pluridisciplinaire : 2 ingénieurs Masters IA/ML, 1 stagiaire ingénieur, 1 manager produit (maquettes & livraisons), moi (UI Streamlit)",
        "Livraison de maquettes validées par la manager avant intégration, process de contrôle qualité rigoureux",
      ],
      lien: null,
      duree: "2024",
      contexte: "Professionnel — Mission pour AI Switch (société française)",
      equipe: "5 personnes",
    },
    {
      name: "Evart — Plateforme de billetterie culturelle",
      description:
        "Système dual de billetterie culturelle (films, concerts, théâtre) avec commande de produits artisanaux personnalisés. Application web Symfony 6 synchronisée avec une application desktop JavaFX.",
      role: "Développeur Full Stack (web + desktop)",
      stack: [
        "Symfony 6",
        "PHP 8+",
        "Doctrine ORM",
        "Twig",
        "API Platform",
        "Stripe",
        "Bootstrap 5",
        "Java 17+",
        "JavaFX",
        "JDBC",
        "Gson / Jackson",
        "PDFBox",
        "JWT",
      ],
      highlights: [
        "Application web Symfony 6 : navigation événements, réservation tickets, gestion stock artisanat, paiement Stripe, admin avec statistiques",
        "Application desktop JavaFX synchronisée via API REST : mode guichet physique, impression tickets (PDFBox), mode hors-ligne avec sync différée",
        "Authentification JWT/session, rôles (admin / organisateur / utilisateur), protection CSRF",
        "Architecture REST API exposée par Symfony, consommée par le client Java",
      ],
      lien: null,
      duree: "Janvier 2025 – Mai 2025",
      contexte: "Académique — Esprit School of Engineering, 3ème année",
      equipe: "Équipe Esprit",
    },
    {
      name: "Assistant de Diagnostic Médical — ML Web App",
      description:
        "Application web Flask proposant deux parcours (patient et médecin) avec diagnostic médical basé sur un modèle MLP scikit-learn et un chatbot intégré pour le suivi conversationnel.",
      role: "Développeur ML & Backend",
      stack: [
        "Python",
        "Flask",
        "Scikit-learn (MLP)",
        "Pandas",
        "HTML / CSS / JS",
        "pickle / joblib",
      ],
      highlights: [
        "Deux parcours distincts : patient (collecte d'infos + résultat) et médecin (choix + diagnostic + chatbot)",
        "Pipeline d'inférence : features.pkl → scaler.pkl (StandardScaler) → mlp_model.pkl",
        "Historique conversationnel persisté en JSON (chat_history.json)",
        "Architecture Flask modulaire avec templates Jinja2 et assets statiques",
        "Projet accompagné d'une roadmap d'amélioration : tests pytest, Dockerfile, logging structuré, métriques latence",
      ],
      lien: null,
      duree: "Octobre – Décembre 2025",
      contexte: "Académique — Projet ML Esprit",
      equipe: "Projet académique",
    },
    {
      name: "Tableau de Bord BI — Assurance Automobile Tunisienne",
      description:
        "Système de Business Intelligence sur données d'assurance automobile tunisienne : Data Warehouse Power BI avec KPIs sur bonus-malus, sinistres par région/marque et analyse du parc véhicules.",
      role: "Data Analyst / BI Developer (équipe de 6)",
      stack: ["Power BI", "Power Query", "DAX", "Modèle Data Warehouse"],
      highlights: [
        "Modélisation d'un Data Warehouse en étoile : tables Sinistre, Assuré, Police, Véhicule, RegionPostal, CompagniesAdverses",
        "Nettoyage Power Query : suppression doublons, valeurs manquantes, typage, création colonne BonusMalus (1-12), table RegionPostal",
        "KPI 1 : Évolution du bonus-malus par profil conducteur et taux de responsabilité (3 catégories)",
        "KPI 2 : Volume de sinistres par marque véhicule et par région/code postal avec filtre période (32K sinistres analysés, 56K actifs)",
        "KPI 3 : Concentration du parc par énergie (essence/gasoil dominants), puissance fiscale par carburant, dynamique d'ajout véhicules dans le temps",
        "Visualisations cartographiques par gouvernorat tunisien (1 167 assurés, moyenne BonusMalus = 6)",
        "Présentée devant jury avec analyse approfondie des risques et recommandations stratégiques",
      ],
      lien: null,
      duree: "Septembre – Novembre 2025",
      contexte: "Académique — Cours Informatique Décisionnelle, Esprit",
      equipe: "6 personnes (Chebaane Badisse, Syrine Guemira, Neirouz Hannachi, Khaled Abed, Ryhab Belhaj Slimen, Ghofrane Jmai)",
    },
    {
      name: "Système RAG de Recherche Documentaire (Scale IT)",
      description:
        "Système de recherche documentaire augmenté par LLM développé lors du stage PFE chez Scale IT (Paris). Remplace une recherche par mots-clés par une approche sémantique avec évaluation rigoureuse.",
      role: "Data Science Intern (PFE) — responsable du système RAG et des pipelines d'évaluation",
      stack: [
        "Python",
        "LLM",
        "Sentence-Transformers (bi-encodeurs)",
        "Semantic Search",
        "Streamlit",
        "RAG",
      ],
      highlights: [
        "Architecture RAG (Retrieval-Augmented Generation) réduisant le temps de recherche de 40% vs solution keyword-only précédente",
        "Fine-tuning de bi-encodeurs sur corpus domaine-spécifique : +15 points de top-5 accuracy vs baseline zero-shot",
        "Pipelines d'évaluation ML mesurant Precision, Recall et MRR — dashboards Streamlit utilisés dans les syncs hebdomadaires équipe",
        "Réduction de 30% des cycles de review de modèles grâce aux dashboards automatisés",
      ],
      lien: null,
      duree: "Mars 2024 – Septembre 2024",
      contexte: "Stage PFE — Scale IT, Antony, Paris (Remote)",
      equipe: "Équipe R&D Scale IT",
    },
  ],

  // ── EXPÉRIENCES PROFESSIONNELLES ────────────────────────────
  experiences: [
    {
      poste: "Web Developer Intern (PFE)",
      entreprise: "Direct Emploi (Job Board Platform)",
      periode: "Juin 2025 – Septembre 2025",
      lieu: "Paris, France (Remote)",
      description:
        "Stage PFE de fin d'études en développement web sur la plateforme de recrutement DirectEmploi.com — automatisation des flux de données employeurs, web crawling et développement de nouveaux moteurs de recherche.",
      realisations: [
        "Automatisation de l'ingestion de flux XML et ATS pour 50+ comptes employeurs → réduction de 35% du temps de traitement manuel",
        "Stratégie de web crawling ciblée identifiant 1 000+ offres d'emploi concurrentes, utiles pour l'onboarding de nouvelles entreprises",
        "Audits SEMrush et co-développement de 2 moteurs de recherche en production (Formation Continue & Franchise) → +40% du contenu indexé",
      ],
      stack: ["XML", "ATS", "Web Crawling", "SEMrush", "SEO", "Python", "Scripts"],
    },
    {
      poste: "Data Science Intern (PFE)",
      entreprise: "Scale IT",
      periode: "Mars 2024 – Septembre 2024",
      lieu: "Antony, Paris, France (Remote)",
      description:
        "Stage PFE sur le développement d'un système de recherche documentaire augmenté par LLM (RAG) — de l'architecture à l'évaluation des modèles, en passant par le fine-tuning de modèles de retrieval.",
      realisations: [
        "Architecture d'un système RAG (LLM + recherche sémantique) → -40% sur le temps de recherche vs approche keyword précédente",
        "Fine-tuning de bi-encodeurs sur corpus domaine → +15 points de top-5 accuracy",
        "Pipelines d'évaluation (Precision, Recall, MRR) avec dashboards Streamlit → -30% des cycles de review modèle",
      ],
      stack: [
        "Python",
        "LLM",
        "RAG",
        "Sentence-Transformers",
        "Semantic Search",
        "Streamlit",
      ],
    },
    {
      poste: "IT Instructor",
      entreprise: "Onzart International Center",
      periode: "Juillet 2024 – Août 2024",
      lieu: "Teboulba, Tunisie",
      description:
        "Conception et animation d'un cursus IT et programmation de 6 semaines pour plus de 20 étudiants.",
      realisations: [
        "85% des étudiants ont complété tous les devoirs",
        "3 étudiants ont ensuite rejoint des programmes informatiques",
      ],
      stack: ["Pédagogie", "Informatique", "Programmation"],
    },
    {
      poste: "Développeur UI — AI Agent Platform",
      entreprise: "AI Switch",
      periode: "2024",
      lieu: "France (Remote)",
      description:
        "Mission pour la société française AI Switch : développement de l'interface utilisateur d'une plateforme conversationnelle multi-LLMs (type ChatGPT) intégrant des modèles open-source et propriétaires.",
      realisations: [
        "Développement de l'interface Streamlit permettant de switcher entre GPT-3, Mistral-7B, Llama-3 et un module RAG",
        "Travail en équipe avec 2 ingénieurs Masters IA/ML, 1 stagiaire ingénieur et 1 manager produit",
        "Processus de livraison contrôlé : maquettes validées par la manager avant intégration",
      ],
      stack: ["Python", "Streamlit", "GPT-3", "Mistral-7B", "Llama-3", "RAG"],
    },
  ],

  // ── FORMATION ───────────────────────────────────────────────
  education: [
    {
      diplome: "Diplôme d'Ingénieur — Informatique (Data Science)",
      etablissement: "Esprit School of Engineering",
      annee: "En cours (2024 – 2027 prévu)",
      lieu: "Ariana, Tunisie",
      details: "Majeure Informatique — Mineures Mathématiques. Cours avancés en ML, Deep Learning, MLOps, BI, NLP.",
    },
    {
      diplome: "Licence — Génie Logiciel & Systèmes d'Information",
      etablissement: "Faculté des Sciences de Monastir",
      annee: "Obtenue en Juin 2024",
      lieu: "Monastir, Tunisie",
      details: "Bachelor en Software Engineering & Information Systems.",
    },
  ],

  // ── LANGUES ─────────────────────────────────────────────────
  languages: [
    { langue: "Arabe", niveau: "Langue maternelle" },
    { langue: "Français", niveau: "Courant (professionnel)" },
    { langue: "Anglais", niveau: "Professionnel (CV & travaux rédigés en anglais)" },
  ],

  // ── ASSOCIATIONS / AUTRES ────────────────────────────────────
  softSkills: [
    "Leadership technique (chef workstream ML sur ARADHI)",
    "Travail en équipe pluridisciplinaire (équipes de 5 à 6 personnes)",
    "Autonomie en remote (stages Paris depuis Tunis)",
    "Rigueur et culture de la mesure (KPIs, métriques, dashboards)",
    "Pédagogie (formateur IT)",
    "Curiosité intellectuelle & veille technologique active",
  ],

  associations: [
    "Membre de Enactus Esprit ICT (2025 – présent)",
    "Membre de ALERT Tunisia (2023 – présent)",
    "ATCCM Monastir (2016 – 2019)",
  ],

  // ── FAQ RECRUTEURS ───────────────────────────────────────────
  faq: [
    {
      question: "Quelle est ta disponibilité ?",
      reponse:
        "Je suis actuellement en 4ème année d'ingénierie à Esprit et activement en recherche de stage ou d'opportunités. Je suis disponible pour des missions à distance (remote) immédiatement, et ouvert à la mobilité selon le projet.",
    },
    {
      question: "Tu es disponible pour travailler à distance ?",
      reponse:
        "Oui, absolument. Mes deux stages PFE (Scale IT et Direct Emploi, tous deux à Paris) se sont déroulés entièrement en remote depuis Tunis. J'ai l'habitude des outils collaboratifs et des rituels d'équipe à distance.",
    },
    {
      question: "Quelle est ta stack principale ?",
      reponse:
        "Python est mon langage central. Je travaille principalement sur des projets ML/NLP/Deep Learning avec Scikit-learn, TensorFlow, PyTorch, FAISS et les LLMs (RAG, fine-tuning). Côté déploiement : FastAPI, Flask, Streamlit, Docker, GitHub Actions.",
    },
    {
      question: "Quelle est la différence entre ARADHI et le projet AI Agent ?",
      reponse:
        "ARADHI est un projet académique-professionnel (Esprit + entreprise Value) sur l'immobilier tunisien — j'y ai piloté tout le workstream ML (prédiction prix, computer vision, RAG, GPT-2). Le projet AI Agent est une mission professionnelle pour AI Switch (France) où j'ai développé l'interface Streamlit d'une plateforme multi-LLMs (GPT-3, Mistral-7B, Llama-3).",
    },
    {
      question: "Tu as de l'expérience avec les LLMs et le RAG ?",
      reponse:
        "Oui, c'est même un fil conducteur de mon parcours. Chez Scale IT : architecture d'un système RAG complet avec fine-tuning de bi-encodeurs. Dans ARADHI : RAG + FAISS + Sentence-BERT + GPT-2. Chez AI Switch : intégration de GPT-3, Mistral-7B, Llama-3 dans une plateforme unifiée. J'ai aussi de l'expérience sur l'évaluation de ces systèmes (Precision, Recall, MRR).",
    },
    {
      question: "Quelles sont tes prétentions salariales ?",
      reponse:
        "Mes prétentions sont négociables selon le poste, le contexte (stage / CDI / freelance) et la localisation. N'hésitez pas à me contacter directement à Chebaane.badisse@gmail.com pour en discuter.",
    },
    {
      question: "Tu as travaillé sur des projets en équipe ?",
      reponse:
        "Oui, sur tous mes projets significatifs. ARADHI (6 personnes, TDSP), AI Agent (5 personnes), Evart (équipe Esprit), BI Assurance (6 personnes). J'ai aussi tenu un rôle de lead ML sur ARADHI, coordonnant le workstream IA.",
    },
  ],
};
