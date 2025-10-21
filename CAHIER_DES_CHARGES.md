# 📋 Cahier des Charges - Netflop

## 🎯 Présentation du Projet

**Nom du projet :** Netflop  
**Version :** 0.1.0  
**Type :** Application web de streaming vidéo (type Netflix)  
**Date :** Octobre 2025 
**Module :** M5 et M7 
**Statut :** En développement

### Description
Netflop est une plateforme de streaming vidéo permettant aux utilisateurs de découvrir, rechercher et sauvegarder leurs films, séries, documentaires et animes préférés. L'application offre une interface moderne et intuitive inspirée des grandes plateformes de streaming.

---

## 👥 Public Cible

- **Utilisateurs principaux :** Grand public amateur de films et séries
- **Tranche d'âge :** 16-65 ans
- **Profil :** Utilisateurs à l'aise avec les interfaces web modernes

---

## 🎨 Objectifs du Projet

### V1 Réalisation en HTML5/ CSS/ Javascript
1. Création de pages à la main (identifier les limites)
2. Génération dynamique de page grace au javascript
3. Exploiter des données via des fichiers xml ou json
4. Stockage de données dans le navigateur

### Objectifs fonctionnels
1. Permettre la recherche de films et séries via une API externe (OMDB)
2. Afficher des recommandations par catégories (Films, Séries, Documentaires, Mangas)
3. Gérer un système de favoris personnel
4. Proposer différents plans d'abonnement
5. Offrir une authentification utilisateur (inscription/connexion)

### Objectifs techniques
1. Développer une Single Page Application (SPA) avec React
2. Utiliser React Router pour la navigation
3. Implémenter un design responsive avec Tailwind CSS
4. Stocker les données localement (LocalStorage)
5. Consommer une API REST (OMDB API)

---

## 🛠️ Stack Technique

### Frontend
- **Framework :** React 17.0.1
- **Routing :** React Router DOM 6.28.0
- **Styling :** Tailwind CSS 3.4.14
- **Build Tool :** React Scripts 5.0.1

### API Externe
- **OMDB API :** API de base de données de films et séries
- **Endpoint :** `https://www.omdbapi.com/`

### Outils de développement
- **PostCSS :** 8.4.49
- **Autoprefixer :** 10.4.20
- **Bootstrap :** 5.3.3 (complémentaire)

---

## 📱 Fonctionnalités Détaillées

### 1. Page d'Accueil (Home)
**Route :** `/`

**Fonctionnalités :**
- Affichage d'un message de bienvenue
- Présentation de 3 plans d'abonnement :
  - **Basic** : 10€/mois - Accès limité, Support email, 1 utilisateur
  - **Standard** : 20€/mois - Accès illimité, Support chat, 5 utilisateurs
  - **Premium** : 30€/mois - Accès illimité, Support téléphone, Utilisateurs illimités
- Affichage de 4 catégories de contenu avec défilement horizontal :
  - 🎥 Films Populaires (dégradé rouge)
  - 📺 Séries Populaires (dégradé violet)
  - 🎬 Documentaires (dégradé bleu)
  - 🎌 Mangas & Anime (dégradé rose)
- Chaque catégorie affiche 5 éléments aléatoires
- Cartes cliquables avec effet hover (zoom)
- Gestion des images manquantes avec placeholder

### 2. Liste des Films (MovieList)
**Route :** `/MovieList`

**Fonctionnalités :**
- Barre de recherche pour trouver des films
- Affichage horizontal défilable des résultats
- Section "Movies" avec les résultats de recherche
- Section "Favourites" avec les films favoris
- Bouton d'ajout/suppression aux favoris sur chaque film
- Lien vers les détails de chaque film

### 3. Détails du Film (MovieDetails)
**Route :** `/MovieDetails/:id`

**Fonctionnalités :**
- Affichage détaillé d'un film sélectionné
- Informations complètes (titre, année, synopsis, etc.)
- Récupération des données via l'API OMDB

### 4. Système de Favoris

**Fonctionnalités :**
- Ajout de films aux favoris (AddFavourites)
- Suppression de films des favoris (RemoveFavourites)
- Persistance des favoris via LocalStorage
- Clé de stockage : `react-movie-app-favourites`

### 5. Authentification

**Pages :**
- **Inscription** (`/Register`) : Formulaire d'inscription utilisateur
- **Connexion** (`/Login`) : Formulaire de connexion

**Statut :** Fonctionnalité en préparation (interface prête, logique à implémenter)

### 6. Pages Informatives

- **À propos** (`/About`) : Présentation de la plateforme
- **Contact** (`/Contact`) : Formulaire de contact
- **Plans** (`/Plan`) : Détails des offres d'abonnement

### 7. Navigation

**Composant NavBar :**
- Logo/Nom de la marque : "MyNetflop"
- Menu de navigation :
  - Home
  - Movies
  - Contact
  - About
  - Register
  - Login
- Barre de recherche intégrée
- Design responsive

### 8. Page 404
**Route :** `*` (toutes les routes non définies)

**Fonctionnalités :**
- Message d'erreur pour les pages non trouvées
- Redirection suggérée vers l'accueil

---

## 🎨 Design et Interface Utilisateur

### Palette de Couleurs
- **Fond principal :** Gris foncé (#1F2937 - gray-900)
- **Fond secondaire :** Gris (#374151 - gray-800)
- **Texte principal :** Blanc/Gris clair
- **Accent primaire :** Orange (#EA580C - orange-600)
- **Accent secondaire :** Lime/Vert (#84CC16 - lime-500)
- **Boutons d'action :** Vert (#22C55E - green-500)

### Dégradés par Catégorie
- **Films :** Rouge vers gris (`from-red-900 to-gray-900`)
- **Séries :** Violet vers gris (`from-purple-900 to-gray-900`)
- **Documentaires :** Bleu vers gris (`from-blue-900 to-gray-900`)
- **Mangas :** Rose vers gris (`from-pink-900 to-gray-900`)

### Principes de Design
- **Responsive Design :** Compatible mobile, tablette et desktop
- **Cartes (Cards) :** Effet hover avec transformation scale-105
- **Typography :** Hiérarchie claire avec titres de 6xl à xl
- **Espacement :** Utilisation cohérente des marges et paddings
- **Défilement horizontal :** Pour les listes de films/séries

---

## 📊 Architecture de l'Application

### Structure des Composants

```
App.js (Composant principal)
├── Router
├── NavBar (Navigation)
├── Routes
│   ├── Home (Page d'accueil)
│   ├── MovieList (Liste des films)
│   │   ├── MovieListHeading
│   │   ├── SearchBox
│   │   ├── AddFavourites
│   │   └── RemoveFavourites
│   ├── MovieDetails (Détails d'un film)
│   ├── About (À propos)
│   ├── Contact (Contact)
│   ├── MyPlan (Plans d'abonnement)
│   ├── MyRegister (Inscription)
│   ├── MyLogin (Connexion)
│   └── NoMatch (404)
```

### Gestion d'État

**États principaux (App.js) :**
- `movies` : Liste des films de recherche
- `favourites` : Liste des films favoris
- `searchValue` : Valeur de recherche actuelle
- `selectedPlan` : Plan sélectionné (à implémenter)
- `isLoggedIn` : Statut de connexion (à implémenter)

**États locaux (Home.js) :**
- `moviesCategory` : Films de la catégorie Films
- `seriesMovies` : Films de la catégorie Séries
- `documentaryMovies` : Films de la catégorie Documentaires
- `animeMovies` : Films de la catégorie Mangas

---

## 🔌 API et Données

### OMDB API

**Base URL :** `https://www.omdbapi.com/`  
**Clé API :** `263d22d8`

**Endpoints utilisés :**
```
# Recherche par terme
GET /?s={searchTerm}&apikey={apikey}

# Détails par ID
GET /?i={imdbID}&apikey={apikey}
```

**Exemple de requête :**
```javascript
https://www.omdbapi.com/?s=movie&apikey=263d22d8
```

**Catégories de recherche :**
- `movie` : Films
- `series` : Séries TV
- `documentary` : Documentaires
- `anime` : Anime/Mangas

### LocalStorage

**Clé utilisée :** `react-movie-app-favourites`

**Format de données :**
```json
[
  {
    "imdbID": "tt1234567",
    "Title": "Nom du film",
    "Year": "2023",
    "Poster": "url_de_l_affiche"
  }
]
```

---

## ✨ Fonctionnalités Techniques Implémentées

### 1. Mélange Aléatoire (Shuffle)
```javascript
shuffleArray(array)
```
Permet de randomiser l'ordre des films affichés

### 2. Persistance des Favoris
```javascript
saveToLocalStorage(items)
```
Sauvegarde automatique dans le navigateur

### 3. Gestion des Favoris
```javascript
addFavouriteMovie(movie)
removeFavouriteMovie(movie)
```

### 4. Recherche de Films
```javascript
getMovieRequest(searchValue)
```
Recherche dynamique avec mise à jour automatique

### 5. Chargement par Catégorie
```javascript
fetchCategoryMovies(searchTerm, setFunction)
```
Chargement asynchrone des différentes catégories

---

## 🚀 Fonctionnalités Futures / À Développer

### Phase 2 (Court terme)
- [ ] Implémenter la logique d'authentification complète
- [ ] Connecter les formulaires d'inscription et de connexion
- [ ] Ajouter la gestion de session utilisateur
- [ ] Implémenter la sélection et le paiement des plans
- [ ] Ajouter des filtres avancés (année, genre, note)

### Phase 3 (Moyen terme)
- [ ] Système de notation des films
- [ ] Commentaires et avis utilisateurs
- [ ] Recommandations personnalisées
- [ ] Historique de visionnage
- [ ] Listes personnalisées (watchlist)
- [ ] Partage sur réseaux sociaux

### Phase 4 (Long terme)
- [ ] Streaming vidéo réel (intégration lecteur)
- [ ] Mode hors ligne
- [ ] Application mobile (React Native)
- [ ] Backend personnalisé avec base de données
- [ ] Système de recommandation par IA
- [ ] Multi-langues

---

## 🔒 Sécurité

### Mesures actuelles
- LocalStorage pour données non sensibles uniquement
- Pas de stockage de mots de passe en clair

### À implémenter
- [ ] Authentification JWT ou OAuth
- [ ] HTTPS obligatoire en production
- [ ] Validation des formulaires côté client et serveur
- [ ] Protection CSRF
- [ ] Rate limiting sur les requêtes API
- [ ] Sanitization des inputs utilisateur

---

## 📱 Responsive Design

### Breakpoints Tailwind
- **Mobile :** < 640px
- **Tablet :** 640px - 1024px
- **Desktop :** > 1024px

### Adaptations
- Navigation collapsible sur mobile
- Grille responsive pour les cartes de films
- Défilement horizontal pour les catégories
- Taille de police adaptative

---

## 🧪 Tests

### À implémenter
- [ ] Tests unitaires (Jest)
- [ ] Tests d'intégration (React Testing Library)
- [ ] Tests end-to-end (Cypress)
- [ ] Tests de performance
- [ ] Tests d'accessibilité

---

## 📦 Déploiement

### Build de production
```bash
npm run build
```

### Plateformes suggérées
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Variables d'environnement
```
REACT_APP_OMDB_API_KEY=263d22d8
REACT_APP_API_URL=https://www.omdbapi.com/
```

---

## 📈 Métriques de Succès

### KPIs
- Temps de chargement < 3 secondes
- Taux de rebond < 40%
- Nombre d'inscriptions
- Nombre de films ajoutés aux favoris
- Taux de conversion vers les plans payants

---

## 👨‍💻 Maintenance et Support

### Documentation
- README.md pour les développeurs
- Commentaires dans le code
- Ce cahier des charges

### Versioning
- Git pour le contrôle de version
- Branche `dev` pour le développement
- Branche `main` pour la production

---

## 📝 Notes Techniques

### Bonnes Pratiques Appliquées
✅ Composants fonctionnels React  
✅ Hooks (useState, useEffect, useCallback)  
✅ Props validation avec PropTypes  
✅ Gestion d'erreurs avec try/catch  
✅ Code commenté et structuré  
✅ Séparation des préoccupations  
✅ Réutilisabilité des composants  

### Améliorations Code Possibles
- Ajouter TypeScript pour le typage
- Implémenter Redux/Context API pour l'état global
- Créer des custom hooks réutilisables
- Optimiser les performances avec React.memo
- Implémenter le lazy loading des images
- Ajouter des loaders pendant les requêtes API

---

## 📞 Contact et Support

**Développeur :** vaudoochild-devops  
**Repository :** netflop  
**Branche actuelle :** dev

---

## 📄 Licence

Ce projet est privé et à usage éducatif.

---

**Date de dernière mise à jour :** 20 octobre 2025  
**Version du document :** 1.0
