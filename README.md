# Portfolio — Badisse Chebaane

Site statique (HTML / CSS / JS, sans framework, sans build) pour présenter
tes projets académiques et professionnels avec captures d'écran et vidéos
de démo.

## Structure

```
portfolio/
├── index.html          → structure de la page (à ne pas toucher, normalement)
├── css/style.css        → design (couleurs, typo, mise en page)
├── js/data.js            → ⭐ TOUT LE CONTENU À ÉDITER EST ICI
├── js/main.js             → logique d'affichage (génère les cartes depuis data.js)
└── assets/
    ├── images/           → dépose tes captures d'écran ici
    └── video/             → dépose tes vidéos de démo ici (.mp4)
```

## Comment ajouter tes images et vidéos

1. Ouvre `js/data.js`. Chaque projet est un objet avec un champ `media`.
2. **Images** — ajoute une ligne par image dans `images: []` :
   ```js
   images: [
     { src: "assets/images/aradhi-1.jpg", alt: "Dashboard de prédiction de prix" },
     { src: "assets/images/aradhi-2.jpg", alt: "Recherche sémantique" },
   ],
   ```
3. **Vidéo locale** (fichier .mp4 que tu héberges toi-même) :
   ```js
   video: { type: "file", src: "assets/video/aradhi-demo.mp4" },
   ```
4. **Vidéo hébergée** (YouTube non répertoriée, Loom...) — utilise le lien
   *embed*, pas le lien de partage classique :
   ```js
   video: { type: "embed", src: "https://www.youtube.com/embed/XXXXXXXX", title: "Démo Aradhi" },
   ```
   - YouTube : Partager → Intégrer → copie l'URL dans `src="..."`
   - Loom : Share → Embed → copie l'URL `src="..."`
5. Tant qu'un projet n'a ni image ni vidéo, une zone en pointillés s'affiche
   automatiquement pour te le rappeler — rien à faire de ton côté pour ça.

Les projets **AI Switch**, **Power BI** et **ML project** ont des textes entre
crochets `[...]` à remplacer par ton vrai contenu.

## Déployer sur GitHub Pages

1. Crée un nouveau repo sur GitHub (ex: `portfolio`), public.
2. Depuis ce dossier `portfolio/` :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<ton-repo>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy
   from a branch → Branch : `main` / `/ (root)` → Save**.
4. Après 1-2 minutes, ton site est en ligne à :
   `https://<ton-pseudo>.github.io/<ton-repo>/`

C'est ce lien que tu peux envoyer par email au recruteur.

### Mettre à jour le site après modification

```bash
git add .
git commit -m "Ajout des médias des projets"
git push
```
GitHub Pages se met à jour automatiquement après chaque push (1-2 minutes).

## Notes

- Les vidéos en fichier local peuvent vite peser lourd : si une démo dépasse
  ~30-50 Mo, préfère l'héberger sur YouTube (non répertorié) ou Loom et
  utiliser le mode `embed` plutôt que `file`.
- Pense à flouter ou recadrer toute donnée sensible (nom de client, données
  réelles d'utilisateurs) dans les captures issues des projets Scale IT et
  Direct Emploi.
- Le compteur de "feuilles" dans le menu et la numérotation des projets sont
  automatiques : si tu ajoutes ou retires un projet dans `data.js`, tout se
  met à jour seul.
