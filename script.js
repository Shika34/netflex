// Netflop verion XMLHttpRequest

function chargerNetflopXml(){
    // Créer un nouvel objet XMLHttpRequest 
    let xhr = new XMLHttpRequest();

    //configurer une requete
    //utiliser la methode 'GET' = pour récupérer des données
    // le nom du fichier à charger
    // - true = requete asynchrone (ne bloque pas le navigateur et l'execution du code)
    xhr.open('GET', 'netflop.json', true);

    // Définir le gestionnaire d'evenement pour le chargement
    xhr.onload = function (){
        //vérifie si la requete réussi
        // status 200 = OK (succès)
        if(xhr.status === 200){
            // Parser le JSON avec DOMPARSER
            // on crée une instance de DOMParser
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            // Afficher les différentes catégories
            afficherFilmsXML(data.netflop.films.film);
            afficherSeriesXML(data.netflop.series.serie);
            afficherDocuXML(data.netflop.documentaires.documentaire);
            afficherMangaXML(data.netflop.mangas.manga);
            afficherAnimeXML(data.netflop.animes.anime);
            afficherShowXML(data.netflop.shows.show);
            afficherConcertXML(data.netflop.concerts.concert);

            console.log(data);

        }else{
            console.error('erreur lors du chargement du fichier JSON');
            console.error('status :', xhr.status);
            console.error('message:', xhr.statusText);
        }
    }

    // Gérer les erreurs réseau
    xhr.onerror = function(){
        console.error('erreur reseau lors du chargement du fichier xml');
        alert('impossible de charger les données. Vérifiez votre connexion !');
    }

    //envoyer la requete
    xhr.send();

}



/** 
Fonction pour afficher films depuis le document XML

@param {Document} films Document JSON parsé par DOMParser
*/

function afficherFilmsXML(films){
    // Récupérer le conteneur HTML où afficher les films
    let container = document.getElementById('films');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Films";
    container.appendChild(titre);


    // Parcourir tous les films (attention films est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < films.length; i++){
        let filmCard = creerCarteXML(films[i], "film");
        container.appendChild(filmCard);
    }
}

function afficherSeriesXML(series){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('series');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Séries";
    container.appendChild(titre);

    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < series.length; i++){
        let serieCard = creerCarteXML(series[i], "serie");
        container.appendChild(serieCard);
    }
}

function afficherDocuXML(documentaires){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('documentaires');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Documentaires";
    container.appendChild(titre);

    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < documentaires.length; i++){
        let documentaireCard = creerCarteXML(documentaires[i], "documentaire");
        container.appendChild(documentaireCard);
    }
}

function afficherMangaXML(mangas){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('mangas');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Mangas";
    container.appendChild(titre);


    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < mangas.length; i++){
        let mangaCard = creerCarteXML(mangas[i], "manga");
        container.appendChild(mangaCard);
    }
}

function afficherAnimeXML(animes){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('animes');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Animes";
    container.appendChild(titre);


    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < animes.length; i++){
        let animeCard = creerCarteXML(animes[i], "anime");
        container.appendChild(animeCard);
    }
}

function afficherShowXML(shows){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('shows');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "shows";
    container.appendChild(titre);


    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < shows.length; i++){
        let showCard = creerCarteXML(shows[i], "show");
        container.appendChild(showCard);
    }
}

function afficherConcertXML(concerts){
    // Récupérer le conteneur HTML où afficher les séries
    let container = document.getElementById('concerts');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "concerts";
    container.appendChild(titre);


    // Parcourir toutes les séries (attention series est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < concerts.length; i++){
        let concertCard = creerCarteXML(concerts[i], "concert");
        container.appendChild(concertCard);
    }
}




/**
 * Fonction générique pour créer une carte d'affichage à partir d'un élément XML
 * @param {element} item - element JSON (film, serie, etc)
 * @returns {HTMLElement} - element div reprentant la carte
 */
function creerCarteXML(item, itemType){
    // creer le conteneur de la carte
    //creer une div pour la carte
    let card = document.createElement('div');
    card.className = 'card';

//     // Récupérer l'id de l'élément depuis l'attribut id
// let itemId = item.getAttribute('id');

// // Récupérer le nom de la balise XML pour déterminer la catégorie
// let itemType = item.tagName.toLowerCase();  
let itemId = item.id;
// Vérifier que l'id existe avant de rendre la card cliquable
if (itemId && itemType) {
  // Ajouter l'événement au clic
  card.onclick = function() {
    // Rediriger vers la page détail avec l'id et le type dynamiques
    window.location.href = `description.html?id=${itemId}&type=${itemType}`;  
  };
}

    //extraire les données du XML

    // recuperer le nom depuis la balise <nom>
    let nom = item.nom;

    // recuperer le genre depuis la baslise <genre>
    let genre = item.genre;

    // recuperer le réalisateur depuis la baslise <realisateur>
    let realisateur = item.realisateur;

    // recuperer la date de sortie depuis la baslise <dateSortie>
    let dateSortie = item.dateSortie;

    // recuperer le resumé depuis la baslise <resumer>
    //trim() = supprimer les espaces au début et à la fin
    let resumer = item.resumer;

    //récupérer l'url de l'image dpuis la balise <url>
    let url = item.url;

    // creer un element img pour afficher l'image 
    let img = document.createElement('img');
    // définir la source de l'image
    img.src = url;
    img.alt = nom;
    img.className = 'card-image';

    //creer le conteneur pour les informations 
    // creer un div pour contenir toutes les infos textuelles
    let infoDiv = document.createElement('div');
    infoDiv.className = 'card-info';

    // Creer le titre 
    // creer un element H3 pour le titre
    let titreElement = document.createElement('h3');
    titreElement.textContent = nom;

    //creer l'element genre
    // creer un paragraphe pour le genre
    let genreElement = document.createElement('p');
    //innerHTML permet d'inserer du html
    genreElement.innerHTML = '<strong>Genre:</strong>' + genre;

    // creer l'element realisateur
    // creer un paragraphe pour le réalisateur
    let realisateurElement = document.createElement('p');
    realisateurElement.innerHTLM = '<strong> Réalisateur</strong>' + realisateur;

    //creer l'element date de sortie
    // creer un paragraphe pour la date de sortie
    let dateElement = document.createElement('p');
    dateElement.innerHTML = '<strong> date de sortie: </strong>' + dateSortie;

    // creer le conteneur du résumé
    // creer une div pour contenir le résumé et le bouton 
    let resumerContainer = document.createElement('div');
    resumerContainer.className = 'resume-container';

    // créer l'élément résumé
    //créer le paragraphe pour le résumé
    let resumerElement = document.createElement('p');
    resumerElement.className = 'resume';
    resumerElement.innerHTML = '<strong>Résumé :</strong>' + resumer;

    //ajouter le resumé au conteneur
    resumerContainer.appendChild(resumerElement);

    // verifier si le rsumé dépasse 4 lignes le fonction bonus (que l'on fera après)
    // on va utiliser le setTimeout pour laisser  le dom se mettre à jour
    // permettre aussi de mesurer la hauteur réelle 

    //assembler tous les éléments
    // ajouter tous les éléments au conteneur d'infomation
    infoDiv.appendChild(titreElement);
    // infoDiv.appendChild(genreElement);
    // infoDiv.appendChild(realisateurElement);
    // infoDiv.appendChild(dateElement);
    // infoDiv.appendChild(resumerContainer);

    // on ajoute l'image et les informations à la carte
    card.appendChild(img);
    card.appendChild(infoDiv);

    // on retourne la carte complete
    return card;
}

/**
 * Charger les données lorsque le dom est complètement chargé
 * DOMContentLoaded = évenement  déclenché lorsque le html est prêt
 */
document.addEventListener('DOMContentLoaded', function(){
    console.log("le DOM est chargé, lancement de netflop aevc DOMParser...");
    
    // executer la fonction chargerNetFlopXML
    chargerNetflopXml();
})