
function getUrlParams(){
    let params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id'),
        type: params.get('type')
    }
}

// function chercherItemParId(xmlDoc, itemId, itemType){}

function chargerItemDetail(){
    let urlParams = getUrlParams();
    let itemId = urlParams.id;
    let itemType = urlParams.type;
    let xhr = new XMLHttpRequest();
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
            let item = chercherItemParType(xmlDoc, itemId, itemType);

            console.log(item);
            
            afficherDetailItem(item, itemType);

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

function chercherItemParType(xmlDoc, itemId, itemType){
    //on va rechercher l'élément de notre xml par son tyle (films, séries etc...)
    let items = xmlDoc.getElementsByTagName(itemType);

    //on parcourt la liste des items
    for(i = 0; i < items.length; i++){
        let item = items[i];

        //on vérifie si l'item  a un attribut id
        if(item.hasAttribute('id') && item.getAttribute('id') === itemId){
            return item;
        }
        // else{
        //     console.error('There is a problem, (itemId not found...)');
        // }
    }
}



function afficherDetailItem(item, itemType){
   
    
    
    let card = document.createElement('div');
    card.className = 'card';
    // recuperer le nom depuis la balise <nom>
    let nom = item.getElementsByTagName('nom')[0].textContent;

    // recuperer le genre depuis la baslise <genre>
    let genre = item.getElementsByTagName('genre')[0].textContent;

    // recuperer le réalisateur depuis la baslise <realisateur>
    let realisateur = item.getElementsByTagName('realisateur')[0].textContent;

    // recuperer la date de sortie depuis la baslise <dateSortie>
    let dateSortie = item.getElementsByTagName('dateSortie')[0].textContent;

    // recuperer le resumé depuis la baslise <resumer>
    //trim() = supprimer les espaces au début et à la fin
    let resumer = item.getElementsByTagName('resumer')[0].textContent.trim();

    //récupérer l'url de l'image dpuis la balise <url>
    let url = item.getElementsByTagName('url')[0].textContent;

    // creer un element img pour afficher l'image 
    let img = document.createElement('img');
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
    card.appendChild(img);
    card.appendChild(infoDiv);
    infoDiv.appendChild(titreElement);
    infoDiv.appendChild(genreElement);
    infoDiv.appendChild(realisateurElement);
    infoDiv.appendChild(dateElement);
    infoDiv.appendChild(resumerContainer);

    // on retourne la carte complete
    // return card;
    let monConteneur = document.getElementById('infoContainer');
    monConteneur.appendChild(card);

}




console.log(chargerItemDetail());



