// Netflop verion XMLHttpRequest

function chargerNetflopXml(){
    // Créer un nouvel objet XMLHttpRequest 
    let xhr = new XMLHttpRequest();

    //configurer une requete
    //utiliser la methode 'GET' = pour récupérer des données
    // le nom du fichier à charger
    // - true = requete asynchrone (ne bloque pas le navigateur et l'execution du code)
    xhr.open('GET', 'netflop.xml', true);

    // Définir le gestionnaire d'evenement pour le chargement
    xhr.onload = function (){
        //vérifie si la requete réussi
        // status 200 = OK (succès)
        if(xhr.status === 200){
            // Parser le XML avec DOMPARSER
            // on crée une instance de DOMParser
            let parser = new DOMParser();
            //console.log(perser)
            //Parse le texte xml reçu et convertir en Document XML
            //xhr.reponseText = le contenu du fichier XML en texte
            //'text/xml" = type MIME pour indiquer que c'est du XML
            let xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');

            // Afficher les différentes catégories
            afficherFilmsXML(xmlDoc);

            console.log(xmlDoc);

        }else{
            console.error('erreur lors du chargement du fichier XML');
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

chargerNetflopXml();

/** 
Fonction pour afficher films depuis le document XML

@param {Document} xmlDoc Document XML parsé par DOMParser
*/

function afficherFilmsXML(xmlDoc){
    // Récupérer le conteneur HTML où afficher les films
    let container = document.getElementById('films');

    // Créer un titre pour la section
    let titre = document.createElement('h2');
    titre.textContent = "Films";
    container.appendChild(titre);

    // Récupréer TOUS les éléments <film> du XML
    //getElementsByTagName() retourne une collection de tous les elements avec ce nom de balise
    let films = xmlDoc.getElementsByTagName('film');
    console.log(films);

    // Parcourir tous les films (attention films est un HTMLCollection, du coup pas un vrai tableau !)
    for(let i = 0; i < films.length; i++){
        console.log(films[i]);
    }
}
