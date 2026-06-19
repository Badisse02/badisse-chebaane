/**
 * ============================================================
 *  PORTFOLIO — SOURCE UNIQUE DE VÉRITÉ
 *  Badisse Chebaane · portfolio-data.js
 *
 *  CE FICHIER CONTRÔLE TOUT :
 *    → Les cartes projets (grille)
 *    → Les modales (détails, images, vidéos, liens)
 *    → Le chatbot IA
 *    → Les filtres par catégorie
 *
 *  AJOUTER UN PROJET :
 *    1. Copie un bloc dans projects[] ci-dessous
 *    2. Remplis les champs
 *    3. C'est tout — la page se met à jour automatiquement
 *
 *  CHAMPS VISUELS (images / vidéo) :
 *    cover   → image de couverture de la carte
 *    images  → galerie dans la modale (tableau de chemins)
 *    video   → YouTube ("https://youtu.be/xxx"), Vimeo, ou fichier local ("assets/videos/demo.mp4")
 *
 *  CATÉGORIES DISPONIBLES (pour les filtres) :
 *    "ml"      → Machine Learning / IA
 *    "webapp"  → Applications Web / Desktop
 *    "data"    → Data Viz / BI
 *    "pro"     → Mission Professionnelle
 * ============================================================
 */

window.PORTFOLIO_DATA = {

    // ── IDENTITÉ ──────────────────────────────────────────────
    name: "Badisse Chebaane",
    title: "Data Science Engineering Student — ML · Deep Learning · MLOps",
    location: "Ariana, Tunisie (Open to Remote)",
    email: "Chebaane.badisse@gmail.com",
    phone: "+216 54 070 927",
    linkedin: "https://linkedin.com/in/badissechebaane",
    github: "https://github.com/Badisse02",

    summary: `Étudiant ingénieur en Data Science à Esprit (Ariana, Tunisie), spécialisé en
    Machine Learning, Deep Learning et MLOps. Capable de construire des pipelines ML
    de bout en bout et de déployer des solutions IA à impact mesurable.
    Fort d'une double expérience en stage PFE (Scale IT — Paris, RAG/LLM ; Direct Emploi
    — Paris, développement web & SEO) et de plusieurs projets académiques et
    professionnels ambitieux. Activement en recherche d'opportunités en Data Science,
    ML Engineering ou MLOps.`,

    // ── COMPÉTENCES ───────────────────────────────────────────
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
            "MobileNetV2", "SegFormer",
            "Classification d'images", "Segmentation sémantique",
        ],
        "Data Engineering & Visualisation": [
            "Power BI", "Power Query", "Pandas", "Streamlit", "Excel", "Hadoop",
        ],
        "Développement Web & Backend": [
            "Python (FastAPI, Flask)", "Symfony 6 / PHP 8+",
            "Java / JavaFX", "Spring Boot", "React.js", "HTML / CSS / JS",
        ],
        "DevOps & Cloud": [
            "Docker", "GitHub Actions / CI-CD", "AWS",
            "Cloudflare Tunnel", "Poetry", "pytest / Flake8",
        ],
        "Bases de données": ["MySQL", "PostgreSQL", "MongoDB"],
    },

    // ── EXPÉRIENCES ───────────────────────────────────────────
    experiences: [
        {
            poste: "Web Developer Intern (PFE)",
            entreprise: "Direct Emploi (Job Board Platform)",
            periode: "Juin 2025 – Septembre 2025",
            lieu: "Paris, France (Remote)",
            description: "Stage PFE de fin d'études en développement web sur la plateforme DirectEmploi.com.",
            realisations: [
                "Automatisation de l'ingestion de flux XML/ATS pour 50+ comptes employeurs → -35% traitement manuel",
                "Web crawling ciblé : 1 000+ offres concurrentes identifiées",
                "Audits SEMrush + 2 moteurs de recherche en production (Formation Continue & Franchise) → +40% contenu indexé",
            ],
            stack: ["XML", "ATS", "Web Crawling", "SEMrush", "SEO", "Python"],
        },
        {
            poste: "Data Science Intern (PFE)",
            entreprise: "Scale IT",
            periode: "Mars 2024 – Septembre 2024",
            lieu: "Antony, Paris, France (Remote)",
            description: "Stage PFE sur un système de recherche documentaire augmenté par LLM (RAG).",
            realisations: [
                "Architecture RAG (LLM + recherche sémantique) → -40% temps de recherche",
                "Fine-tuning de bi-encodeurs sur corpus domaine → +15 pp top-5 accuracy",
                "Pipelines d'évaluation (Precision, Recall, MRR) + dashboards Streamlit → -30% cycles de review",
            ],
            stack: ["Python", "LLM", "RAG", "Sentence-Transformers", "Streamlit"],
        },
        {
            poste: "IT Instructor",
            entreprise: "Onzart International Center",
            periode: "Juillet 2024 – Août 2024",
            lieu: "Teboulba, Tunisie",
            description: "Conception et animation d'un cursus IT/programmation de 6 semaines pour 20+ étudiants.",
            realisations: [
                "85% des étudiants ont complété tous les devoirs",
                "3 étudiants ont ensuite rejoint des programmes informatiques",
            ],
            stack: ["Pédagogie", "Informatique", "Programmation"],
        },
    ],

    // ── FORMATION ─────────────────────────────────────────────
    education: [
        {
            diplome: "Diplôme d'Ingénieur — Informatique (Data Science)",
            etablissement: "Esprit School of Engineering",
            annee: "En cours (2024 – 2027 prévu)",
            lieu: "Ariana, Tunisie",
        },
        {
            diplome: "Licence — Génie Logiciel & Systèmes d'Information",
            etablissement: "Faculté des Sciences de Monastir",
            annee: "Juin 2024",
            lieu: "Monastir, Tunisie",
        },
    ],

    // ── LANGUES ───────────────────────────────────────────────
    languages: [
        { langue: "Arabe", niveau: "Langue maternelle" },
        { langue: "Français", niveau: "Courant (professionnel)" },
        { langue: "Anglais", niveau: "Professionnel (B2/C1)" },
    ],

    softSkills: [
        "Leadership technique (chef workstream ML sur ARADHI)",
        "Travail en équipe pluridisciplinaire (5 à 6 personnes)",
        "Autonomie en remote (stages Paris depuis Tunis)",
        "Rigueur et culture de la mesure (KPIs, métriques, dashboards)",
        "Curiosité intellectuelle & veille technologique active",
    ],

    // ══════════════════════════════════════════════════════════
    //  PROJETS — SOURCE UNIQUE
    //  Chaque objet génère automatiquement :
    //    • La carte dans la grille
    //    • Le filtre correspondant
    //    • La modale complète (images + vidéo + liens)
    //    • La base de connaissance du chatbot
    // ══════════════════════════════════════════════════════════
    projects: [

        // ── 1. ARADHI ─────────────────────────────────────────
        {
            id: "aradhi",           // ← identifiant unique (pas d'espaces)
            category: "ml",         // ← "ml" | "webapp" | "data" | "pro"
            featured: true,         // ← true = badge "Featured" sur la carte

            // — Carte (grille) —
            title: "Aradhi — Plateforme Immobilière IA",
            meta: "Janv. 2026 – Mai 2026 · Esprit × Value",
            shortDesc: "Pipeline ML complet sur 10 000+ annonces tunisiennes : prédiction de prix, classification d'images, recherche sémantique FAISS + Sentence-BERT.",
            cardTags: ["XGBoost", "MobileNetV2", "FAISS", "FastAPI", "AWS"],
            cover: "assets/images/projects/aradhi-cover.svg",

            // — Modale (détails) —
            fullDesc:
                "Plateforme full-stack dédiée au marché immobilier tunisien, construite en équipe de 6 (Esprit School of Engineering, en collaboration avec l'entreprise Value). " +
                "J'ai piloté le workstream ML : prédiction de prix, classification d'images et moteur de recherche sémantique.",
            highlights: [
                "Prédiction de prix avec XGBoost, Random Forest et ANN — pipeline TDSP complet (meilleur modèle : XGBoost)",
                "Classification d'images d'annonces en 3 classes (Luxe / Normal / Ancien) via MobileNetV2 fine-tuné",
                "Moteur de recherche sémantique FAISS + Sentence-BERT — interface RAG HTML/JS",
                "Chatbot GPT-2 fine-tuné (PyTorch) pour requêtes en langage naturel sur l'immobilier",
                "Déploiement FastAPI + Flask sur AWS via Cloudflare Tunnel",
                "Dashboards Streamlit pour agents B2B et analyse de séries temporelles (signaux achat/vente)",
                "Pipeline CI/CD : Poetry, pytest, Flake8, GitHub Actions — architecture TDSP modulaire (DSO1→DSO4)",
            ],
            allTags: ["XGBoost", "Random Forest", "ANN", "MobileNetV2", "SegFormer", "FAISS", "Sentence-BERT", "GPT-2", "PyTorch", "TensorFlow", "FastAPI", "Flask", "React.js", "Streamlit", "AWS", "Cloudflare Tunnel", "Docker", "Poetry", "GitHub Actions", "Groq API"],

            // — Médias —
            // images: tableau de chemins locaux ou URLs
            // ex: ["assets/images/projects/aradhi-1.jpg", "assets/images/projects/aradhi-2.jpg"]
            images: [
                // "assets/images/projects/aradhi-1.jpg",
                // "assets/images/projects/aradhi-2.jpg",
                // "assets/images/projects/aradhi-3.jpg",
            ],
            // video: URL YouTube/Vimeo OU chemin local .mp4
            // ex YouTube : "https://www.youtube.com/watch?v=XXXXXXXXX"
            // ex local   : "assets/videos/aradhi-demo.mp4"
            video: null,

            // — Liens —
            github: "https://github.com/syrineguemira72/Esprit-PIDS-4DS3-2026--ARADHI-",
            demo: null,

            // — Chatbot —
            contexte: "Académique-Professionnel — Projet PIDEV 4ème année Esprit, en collaboration avec l'entreprise Value",
            equipe: "6 personnes (Badisse Chebaane, Syrine Guemira, Ryhab Ben Hadj Slimen, Ghofrane Jmai, Neirouz Hannachi, Khaled ElAbed)",
        },

        // ── 2. AI AGENT (AI Switch) ────────────────────────────
        {
            id: "aiagent",
            category: "ml",
            featured: false,

            title: "AI Agent — Plateforme Multi-LLMs",
            meta: "2024 · AI Switch (France)",
            shortDesc: "Interface Streamlit unifiée pour switcher entre GPT-3, Mistral-7B, Llama-3 et RAG — développée pour la société française AI Switch.",
            cardTags: ["Streamlit", "GPT-3", "Mistral-7B", "Llama-3", "RAG"],
            cover: "assets/images/projects/aiagent-cover.svg",

            fullDesc:
                "Mission professionnelle pour la société française AI Switch : développement de l'interface utilisateur " +
                "d'une plateforme conversationnelle multi-LLMs (type ChatGPT) intégrant des modèles open-source et propriétaires depuis un dashboard unique.",
            highlights: [
                "Interface Streamlit complète permettant de switcher entre plusieurs LLMs depuis un seul dashboard",
                "Intégration de modèles open-source (Mistral-7B, Llama-3) et propriétaires (GPT-3) dans une architecture unifiée",
                "Module RAG intégré pour la recherche documentaire augmentée",
                "Équipe pluridisciplinaire : 2 ingénieurs Masters IA/ML, 1 stagiaire ingénieur, 1 manager produit (maquettes & livraisons), moi (UI Streamlit)",
                "Processus de livraison contrôlé : maquettes validées par la manager avant chaque intégration",
            ],
            allTags: ["Python", "Streamlit", "GPT-3", "Mistral-7B", "Llama-3", "RAG", "LLM", "OpenAI API"],

            images: [
                // "assets/images/projects/aiagent-1.jpg",
            ],
            video: null,

            github: null,
            demo: null,

            contexte: "Professionnel — Mission pour AI Switch (société française)",
            equipe: "5 personnes (2 ingénieurs Masters IA/ML, 1 stagiaire ingénieur, 1 manager produit, Badisse — UI)",
        },

        // ── 3. EVART ──────────────────────────────────────────
        {
            id: "evart",
            category: "webapp",
            featured: false,

            title: "Evart — Billetterie Culturelle Dual-Platform",
            meta: "Janv. 2025 – Mai 2025 · Esprit",
            shortDesc: "Application web Symfony 6 + client desktop JavaFX synchronisés : billetterie événementielle, paiement Stripe, auth JWT, mode offline.",
            cardTags: ["Symfony 6", "JavaFX", "Stripe", "REST API", "JWT"],
            cover: "assets/images/projects/evart-cover.svg",

            fullDesc:
                "Système de billetterie culturelle (films, concerts, théâtre) dual-platform avec commande de produits artisanaux personnalisés. " +
                "Application web Symfony 6 synchronisée avec une application desktop JavaFX via une couche REST API.",
            highlights: [
                "Web app Symfony 6 : navigation événements, réservation tickets, gestion stock artisanat, paiement Stripe, admin avec statistiques",
                "Client desktop JavaFX : mode guichet physique, impression tickets PDFBox, mode hors-ligne avec sync différée",
                "Authentification JWT/session, rôles (admin / organisateur / utilisateur), protection CSRF",
                "API REST exposée par Symfony, consommée par le client Java (Gson/Jackson)",
                "Architecture découplée permettant l'évolution indépendante des deux plateformes",
            ],
            allTags: ["Symfony 6", "PHP 8+", "Doctrine ORM", "Twig", "API Platform", "Stripe", "Bootstrap 5", "Java 17+", "JavaFX", "JDBC", "Gson", "Jackson", "PDFBox", "JWT", "MySQL"],

            images: [
                // "assets/images/projects/evart-1.jpg",
                // "assets/images/projects/evart-2.jpg",
            ],
            video: null,

            github: "https://github.com/Badisse02",
            demo: null,

            contexte: "Académique — Esprit School of Engineering, 3ème année",
            equipe: "Équipe Esprit",
        },

        // ── 4. DIAGNOSTIC ML ──────────────────────────────────
        {
            id: "mldiag",
            category: "ml",
            featured: false,

            title: "Diagnostic Médical — ML Web App",
            meta: "Oct. – Déc. 2025 · Esprit (Académique)",
            shortDesc: "Application Flask avec deux parcours (patient/médecin), diagnostic par modèle MLP scikit-learn et chatbot conversationnel intégré.",
            cardTags: ["Flask", "Scikit-learn", "MLP", "Python", "Chatbot"],
            cover: "assets/images/projects/placeholder-cover.svg",

            fullDesc:
                "Application web Flask proposant deux parcours distincts (patient et médecin) avec un diagnostic médical " +
                "basé sur un modèle MLP scikit-learn et un chatbot intégré pour le suivi conversationnel.",
            highlights: [
                "Parcours patient : collecte des informations + affichage du résultat de diagnostic",
                "Parcours médecin : choix du mode + diagnostic détaillé + chatbot conversationnel",
                "Pipeline d'inférence : features.pkl → scaler.pkl (StandardScaler) → mlp_model.pkl",
                "Historique conversationnel persisté en JSON (chat_history.json)",
                "Architecture Flask modulaire avec templates Jinja2 et assets statiques (CSS/JS)",
            ],
            allTags: ["Python", "Flask", "Scikit-learn", "MLP", "Pandas", "pickle", "joblib", "HTML", "CSS", "JavaScript"],

            images: [
                // "assets/images/projects/mldiag-1.jpg",
            ],
            video: null,

            github: "https://github.com/Badisse02",
            demo: null,

            contexte: "Académique — Projet ML, Esprit School of Engineering",
            equipe: "Projet académique",
        },

        // ── 5. POWER BI — ASSURANCE ───────────────────────────
        {
            id: "powerbi",
            category: "data",
            featured: false,

            title: "BI Assurance Auto — Dashboard Power BI",
            meta: "Sept. – Nov. 2025 · Esprit (Académique)",
            shortDesc: "Data Warehouse Power BI sur l'assurance automobile tunisienne : 3 KPIs stratégiques, modèle en étoile, 1 167 assurés, analyses cartographiques.",
            cardTags: ["Power BI", "Power Query", "DAX", "Data Warehouse"],
            cover: "assets/images/projects/placeholder-cover.svg",

            fullDesc:
                "Système de Business Intelligence sur données d'assurance automobile tunisienne. " +
                "Modélisation d'un Data Warehouse, nettoyage Power Query, et développement de 3 KPIs stratégiques " +
                "pour piloter le portefeuille d'assurance.",
            highlights: [
                "Data Warehouse en étoile : Sinistre, Assuré, Police, Véhicule, RegionPostal, CompagniesAdverses",
                "Nettoyage Power Query : doublons, valeurs manquantes, typage, colonne BonusMalus (1-12), table RegionPostal",
                "KPI 1 : Évolution bonus-malus par profil conducteur + taux de responsabilité (3 catégories)",
                "KPI 2 : Volume sinistres par marque véhicule et région/code postal avec filtre période (32K sinistres, 56K actifs)",
                "KPI 3 : Concentration parc par énergie (essence/gasoil), puissance fiscale, dynamique d'ajout véhicules",
                "Visualisations cartographiques par gouvernorat tunisien — 1 167 assurés, BonusMalus moyen = 6",
            ],
            allTags: ["Power BI", "Power Query", "DAX", "Data Warehouse", "Modèle en étoile", "KPI", "Business Intelligence"],

            images: [
                // "assets/images/projects/powerbi-1.jpg",
                // "assets/images/projects/powerbi-2.jpg",
            ],
            video: null,

            github: null,
            demo: null,

            contexte: "Académique — Cours Informatique Décisionnelle, Esprit",
            equipe: "6 personnes (Chebaane Badisse, Syrine Guemira, Neirouz Hannachi, Khaled Abed, Ryhab Belhaj Slimen, Ghofrane Jmai)",
        },

        // ── 6. SCALE IT — RAG ─────────────────────────────────
        {
            id: "scaleit",
            category: "pro",
            featured: false,

            title: "Recherche Documentaire RAG — Scale IT",
            meta: "Mars 2024 – Sept. 2024 · Scale IT, Paris (Remote)",
            shortDesc: "Système RAG (LLM + recherche sémantique) réduisant le temps de recherche de 40%. Fine-tuning de bi-encodeurs, pipelines d'évaluation et dashboards Streamlit.",
            cardTags: ["RAG", "LLM", "Sentence-BERT", "Streamlit", "Python"],
            cover: "assets/images/projects/placeholder-cover.svg",

            fullDesc:
                "Développement d'un système de recherche documentaire augmenté par LLM (RAG) lors du stage PFE chez Scale IT (Paris). " +
                "De l'architecture du système à l'évaluation des modèles, en passant par le fine-tuning de modèles de retrieval.",
            highlights: [
                "Architecture RAG complète (LLM + recherche sémantique) → temps de recherche -40% vs approche keyword précédente",
                "Fine-tuning de bi-encodeurs sur corpus domaine-spécifique → +15 points de top-5 accuracy vs baseline zero-shot",
                "Pipelines d'évaluation ML mesurant Precision, Recall et MRR",
                "Dashboards Streamlit utilisés dans les syncs hebdomadaires équipe → cycles de review modèle -30%",
                "Veille technologique active sur les dernières avancées RAG/LLM",
            ],
            allTags: ["Python", "RAG", "LLM", "Semantic Search", "Sentence-Transformers", "Streamlit", "Scikit-learn", "MRR", "Precision", "Recall"],

            images: [],
            video: null,

            github: null,
            demo: null,

            contexte: "Stage PFE — Scale IT, Antony, Paris (Remote)",
            equipe: "Équipe R&D Scale IT",
        },

        // ── 7. DIRECT EMPLOI ──────────────────────────────────
        {
            id: "directemploi",
            category: "pro",
            featured: false,

            title: "Direct Emploi — Automatisation & SEO",
            meta: "Juin 2025 – Sept. 2025 · Direct Emploi, Paris (Remote)",
            shortDesc: "Automatisation de flux XML/ATS pour 50+ employeurs, web crawling concurrentiel et co-construction de 2 moteurs de recherche en production.",
            cardTags: ["XML/ATS", "Web Crawling", "SEMrush", "SEO", "Python"],
            cover: "assets/images/projects/placeholder-cover.svg",

            fullDesc:
                "Stage PFE chez Direct Emploi (jobboard DirectEmploi.com, Paris). Missions d'automatisation des flux de données " +
                "employeurs, web crawling et développement de nouveaux moteurs de recherche.",
            highlights: [
                "Automatisation de l'ingestion de flux XML/ATS pour 50+ comptes employeurs → traitement manuel -35%",
                "Stratégie de web crawling ciblée : 1 000+ offres concurrentes identifiées pour l'onboarding de nouvelles entreprises",
                "Audits SEMrush + co-développement de 2 moteurs de recherche en production (Formation Continue & Franchise) → contenu indexé +40%",
            ],
            allTags: ["XML", "ATS", "Web Crawling", "SEMrush", "SEO", "Python", "Scripts"],

            images: [],
            video: null,

            github: null,
            demo: null,

            contexte: "Stage PFE — Direct Emploi, Paris, France (Remote)",
            equipe: "Équipe technique Direct Emploi",
        },

    ], // ← fin du tableau projects[]

    // ── FAQ CHATBOT ───────────────────────────────────────────
    faq: [
        {
            question: "Quelle est ta disponibilité ?",
            reponse: "Je suis en 4ème année d'ingénierie à Esprit et activement en recherche de stage ou d'opportunités. Disponible en remote immédiatement, ouvert à la mobilité.",
        },
        {
            question: "Tu as de l'expérience avec les LLMs et le RAG ?",
            reponse: "Oui — c'est un fil conducteur de mon parcours. Chez Scale IT : architecture RAG + fine-tuning bi-encodeurs. Dans ARADHI : RAG + FAISS + Sentence-BERT + GPT-2. Chez AI Switch : intégration GPT-3, Mistral-7B, Llama-3. J'ai aussi de l'expérience sur l'évaluation (Precision, Recall, MRR).",
        },
        {
            question: "Quelle est ta stack principale ?",
            reponse: "Python est mon langage central. Je travaille sur des projets ML/NLP/Deep Learning avec Scikit-learn, TensorFlow, PyTorch, FAISS et LLMs. Côté déploiement : FastAPI, Flask, Streamlit, Docker, GitHub Actions.",
        },
        {
            question: "Tu es disponible pour travailler à distance ?",
            reponse: "Oui — mes deux stages PFE (Scale IT et Direct Emploi, tous deux à Paris) se sont déroulés entièrement en remote depuis Tunis. J'ai l'habitude des outils collaboratifs et des rituels d'équipe à distance.",
        },
        {
            question: "Quelle différence entre ARADHI et AI Agent ?",
            reponse: "ARADHI est académique-pro (Esprit + entreprise Value) sur l'immobilier tunisien — j'y ai piloté le workstream ML. AI Agent est une mission pour AI Switch (France) où j'ai développé l'interface Streamlit d'une plateforme multi-LLMs.",
        },
        {
            question: "Quelles sont tes prétentions salariales ?",
            reponse: "Négociables selon le poste et le contexte. N'hésitez pas à me contacter directement : Chebaane.badisse@gmail.com",
        },
    ],

};