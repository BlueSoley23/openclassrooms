

// ############ Fichier JavaScript d'initiation ############ //

    // Commentaire sur une ligne...

    /* Commentaire sur
    plusieurs lignes... */

    // Déclaration d'une variable
    var myBooleanVariable = true;
    var myIntegerVariable = 256;
    var myTextVariable = "Chaîne de caractères..."

    //modification d'une variable
    myBooleanVariable = false;

    // Déclaration d'une constante
    const myContant = "value";

    function myFunction() {
        // Définition de la fonction
    }
 
    // Récupérer un élement du DOM

    // Utilisation de defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte :
    // <script src="script.js" defer></script>

    // Utilisation de document.getElementById
    let elementById = document.getElementById("monElement");

    // Utilisation de document.querySelector
    let elementBySelector = document.querySelector(".maClasse");

    // Utilisation de document.querySelectorAll
    let elementsBySelector = document.querySelectorAll(".maClasse");


    // Modifier un élément du DOM

    // Utilisation de setAttribute
    elementById.setAttribute("monAttribut", "nouvelleValeur");

    // Utilisation de la syntaxe : elementHtml.nomAttribut
    elementById.monAttribut = "nouvelleValeur";


    // Créer un élément dans le DOM

    // Utilisation de document.createElement et appendChild
    let nouvelElement = document.createElement("div");
    document.body.appendChild(nouvelElement);

    // Utilisation de innerHTML
    nouvelElement.innerHTML = "<p>Voici du contenu inséré via innerHTML</p>";


    // Intéragir avec les éléments du DOM grace aux évenements

    // Utilisation de addEventListener
    elementById.addEventListener("click", function(event) {
        console.log("L'élément a été cliqué !");
    });

    // Utilisation de la variable event
    elementById.addEventListener("click", function(event) {
        console.log("L'élément a été cliqué ! L'événement est : ", event);
    });


    // Interpolation de chaîne
    var message = `La valeur de ma variable est ${myIntegerVariable}`;

    // Interpolation de code HTML
    var htmlCode = `<p>La valeur de ma variable est ${myIntegerVariable}</p>`;

    // Structures de contrôle

    // Exemple de if
    if (myBooleanVariable) {
        console.log("La variable est vraie");
    } else {
        console.log("La variable est fausse");
    }

    // Exemple de for
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    // Exemple de while
    var j = 0;
    while (j < 10) {
        console.log(j);
        j++;
    }

    // Exemple de switch
    var fruit = "pomme";
    switch (fruit) {
        case "pomme":
            console.log("C'est une pomme !");
            break;
        case "banane":
            console.log("C'est une banane !");
            break;
        case "orange":
            console.log("C'est une orange !");
            break;
        default:
            console.log("Je ne connais pas ce fruit...");
    }

    // Programmation événementielle
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Le bouton a été cliqué !");
    });

    // Déclaration d'une fonction
    function maFonction() {
        console.log("Ceci est une fonction !");
    }
    // Appel de la fonction
    maFonction();

    // Fonction avec paramètres
    function maFonctionAvecParametres(param1, param2) {
        console.log("Paramètre 1: " + param1);
        console.log("Paramètre 2: " + param2);
    }
    // Appel de la fonction avec paramètres
    maFonctionAvecParametres("valeur1", "valeur2");

    // Fonction qui retourne une valeur
    function maFonctionQuiRetourneUneValeur() {
        return "Valeur retournée";
    }
    // Utilisation de la valeur retournée
    var valeur = maFonctionQuiRetourneUneValeur();
    console.log(valeur);

    // Fonction anonyme
    var maFonctionAnonyme = function() {
        console.log("Ceci est une fonction anonyme !");
    }
    // Appel de la fonction anonyme
    maFonctionAnonyme();

    // Fonction fléchée
    var maFonctionFlechee = () => {
        console.log("Ceci est une fonction fléchée !");
    }
    // Appel de la fonction fléchée
    maFonctionFlechee();

    // Notion d'objet et sa notation objet.propriété
    var monObjet = {
        propriete: "valeur",
        methode: function() {
            console.log("Ceci est une méthode d'un objet !");
        }
    }
    // Accès à la propriété de l'objet
    console.log(monObjet.propriete);
    // Appel de la méthode de l'objet
    monObjet.methode();

    // Méthode d'un objet
    var monObjet = {
        maMethode: function() {
            console.log("Ceci est une méthode d'un objet !");
        }
    }
    // Appel de la méthode de l'objet
    monObjet.maMethode();

    // Explication de "this" et son utilisation ici
    // "this" fait référence à l'objet courant, c'est-à-dire l'objet sur lequel la méthode est appelée.
    // Dans cet exemple, "this" fait référence à l'objet "monObjet".
    // Ainsi, lorsque nous appelons la méthode "maMethode" de l'objet "monObjet", "this" dans la méthode fait référence à "monObjet".
    // Cela nous permet d'accéder aux propriétés et méthodes de l'objet à l'intérieur de la méthode.
    // Par exemple, nous pouvons utiliser "this.maMethode()" pour appeler la méthode elle-même à l'intérieur de la méthode.

    // Exemples concrets
    var autreObjet = {
        autreMethode: function() {
            console.log("Ceci est une autre méthode d'un autre objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode de l'autre objet
    autreObjet.autreMethode();

    // Utilisation de "this" dans une fonction fléchée
    var monObjetAvecFlechee = {
        maMethodeFlechee: () => {
            console.log("Ceci est une méthode fléchée d'un objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode fléchée de l'objet
    monObjetAvecFlechee.maMethodeFlechee();

    // Appel de la méthode de l'autre objet
    autreObjet.autreMethode();

    // Utilisation de "this" dans une fonction fléchée
    var monObjetAvecFlechee = {
        maMethodeFlechee: () => {
            console.log("Ceci est une méthode fléchée d'un objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode fléchée de l'objet
    monObjetAvecFlechee.maMethodeFlechee();


    // Exemples d'utilisation des tableaux et listes en JavaScript

        // Déclaration d'un tableau
        var monTableau = [1, 2, 3, 4, 5];

        // Accès à un élément du tableau
        console.log(monTableau[0]); // Affiche 1

        // Modification d'un élément du tableau
        monTableau[2] = 10;

        // Ajout d'un élément à la fin du tableau
        monTableau.push(6);

        // Suppression du dernier élément du tableau
        monTableau.pop();

        // Longueur du tableau
        console.log(monTableau.length); // Affiche 5

        // Parcours du tableau avec une boucle for
        for (var i = 0; i < monTableau.length; i++) {
            console.log(monTableau[i]);
        }

        // Déclaration d'une liste
        var maListe = ["a", "b", "c", "d", "e"];

        // Accès à un élément de la liste
        console.log(maListe[1]); // Affiche "b"

        // Modification d'un élément de la liste
        maListe[3] = "x";

        // Ajout d'un élément à la fin de la liste
        maListe.push("f");

        // Suppression du dernier élément de la liste
        maListe.pop();

        // Longueur de la liste
        console.log(maListe.length); // Affiche 5

        // Parcours de la liste avec une boucle for...of
        for (var element of maListe) {
            console.log(element);
        }

        // Parcours de la liste avec une boucle forEach
        maListe.forEach(function(element) {
            console.log(element);
        });

        // Recherche d'un élément dans la liste
        var index = maListe.indexOf("c");
        console.log(index); // Affiche 2

        // Suppression d'un élément de la liste
        maListe.splice(1, 1); // Supprime l'élément à l'index 1

        // Conversion d'un tableau en une chaîne de caractères
        var tableauEnChaine = monTableau.join(", ");
        console.log(tableauEnChaine); // Affiche "1, 2, 10, 4, 5"

        // Conversion d'une chaîne de caractères en un tableau
        var chaineEnTableau = tableauEnChaine.split(", ");
        console.log(chaineEnTableau); // Affiche ["1", "2", "10", "4", "5"]

        // Copie d'un tableau
        var copieTableau = monTableau.slice();
        console.log(copieTableau); // Affiche [1, 2, 10, 4, 5]

        // Concaténation de deux tableaux
        var tableauConcatene = monTableau.concat(copieTableau);
        console.log(tableauConcatene); // Affiche [1, 2, 10, 4, 5, 1, 2, 10, 4, 5]

        // Tri d'un tableau
        monTableau.sort();
        console.log(monTableau); // Affiche [1, 10, 2, 4, 5]

        // Inversion de l'ordre des éléments d'un tableau
        monTableau.reverse();
        console.log(monTableau); // Affiche [5, 4, 2, 10, 1]

        // Filtrage des éléments d'un tableau
        var tableauFiltre = monTableau.filter(function(element) {
            return element > 3;
        });
        console.log(tableauFiltre); // Affiche [5, 4, 10]

        // Transformation des éléments d'un tableau
        var tableauTransforme = monTableau.map(function(element) {
            return element * 2;
        });
        console.log(tableauTransforme); // Affiche [10, 8, 4, 20, 2]

        // Vérification de l'existence d'un élément dans un tableau
        var existe = monTableau.includes(10);
        console.log(existe); // Affiche true

        // Vérification si tous les éléments d'un tableau satisfont une condition
        var tousSatisfont = monTableau.every(function(element) {
            return element > 0;
        });
        console.log(tousSatisfont); // Affiche true

        // Vérification si au moins un élément d'un tableau satisfait une condition
        var auMoinsUnSatisfait = monTableau.some(function(element) {
            return element > 10;
        });
        console.log(auMoinsUnSatisfait); // Affiche false

        // Réduction des éléments d'un tableau à une seule valeur
        var somme = monTableau.reduce(function(acc, element) {
            return acc + element;
        }, 0);
        console.log(somme); // Affiche 22

        // Copie d'un tableau avec des éléments uniques
        var tableauUnique = Array.from(new Set(monTableau));
        console.log(tableauUnique); // Affiche [1, 10, 2, 4, 5]

        // Création d'un tableau à partir d'une chaîne de caractères
        var tableauFromString = Array.from("Hello");
        console.log(tableauFromString); // Affiche ["H", "e", "l", "l", "o"]

        // Création d'un tableau avec des valeurs répétées
        var tableauRepete = Array(3).fill("Hello");
        console.log(tableauRepete); // Affiche ["Hello", "Hello", "Hello"]

        // Création d'un tableau vide
        var tableauVide = [];

        // Création d'une liste vide
        var listeVide = [];

        // Exemples concrets
        var autreObjet = {
            autreMethode: function() {
                console.log("Ceci est une autre méthode d'un autre objet !");
                console.log("L'objet courant est:", this);
            }
        }
import { ajoutListenersAvis, ajoutListenerEnvoyerAvis, afficherAvis, afficherGraphiqueAvis } from "./avis.js";
//Récupération des pièces eventuellement stockées dans le localStorage
let pieces = window.localStorage.getItem('pieces');

if (pieces === null) {
    // Récupération des pièces depuis l'API
    const reponse = await fetch('http://localhost:8081/pieces/');
    pieces = await reponse.json();
    // Transformation des pièces en JSON
    const valeurPieces = JSON.stringify(pieces);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("pieces", valeurPieces);
} else {
    pieces = JSON.parse(pieces);
}
// on appel la fonction pour ajouter le listener au formulaire
ajoutListenerEnvoyerAvis()

function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        pieceElement.dataset.id = pieces[i].id
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";

        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        //Code aJouté
        pieceElement.appendChild(avisBouton);

    }
    ajoutListenersAvis();
}

genererPieces(pieces);

for (let i = 0; i < pieces.length; i++) {
    const id = pieces[i].id;
    const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
    const avis = JSON.parse(avisJSON);

    if (avis !== null) {
        const pieceElement = document.querySelector(`article[data-id="${id}"]`);
        afficherAvis(pieceElement, avis)
    }
}

//gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}
console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1);
        prixDisponibles.splice(i, 1);
    }
}

const disponiblesElement = document.createElement('ul');

for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)

const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
})

// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
    window.localStorage.removeItem("pieces");
});

await afficherGraphiqueAvis();

export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
 
        const id = event.target.dataset.id;
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
        const avis = await reponse.json();
        window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
        const pieceElement = event.target.parentElement;
        afficherAvis(pieceElement, avis)
     });
 
    }
 }
 
 export function afficherAvis(pieceElement, avis){
    const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
 }

 export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
    event.preventDefault();
    // Création de l’objet du nouvel avis.
    const avis = {
        pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
        utilisateur: event.target.querySelector("[name=utilisateur]").value,
        commentaire: event.target.querySelector("[name=commentaire]").value,
        nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
    });
    
 }

export async function afficherGraphiqueAvis() {
    // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
    const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
    const nb_commentaires = [0, 0, 0, 0, 0];

    for (let commentaire of avis) {
        nb_commentaires[commentaire.nbEtoiles - 1]++;
    }
    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labels = ["5", "4", "3", "2", "1"];
    // Données et personnalisation du graphique
    const data = {
        labels: labels,
        datasets: [{
            label: "Étoiles attribuées",
            data: nb_commentaires.reverse(),
            backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
        }],
    };
    // Objet de configuration final
    const config = {
        type: "bar",
        data: data,
        options: {
            indexAxis: "y",
        },
    };
    // Rendu du graphique dans l'élément canvas
    const graphiqueAvis = new Chart(
        document.querySelector("#graphique-avis"),
        config,
    );
    // Récupération des pièces depuis le localStorage
    const piecesJSON = window.localStorage.getItem("pieces");
    //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
    const pieces = JSON.parse(piecesJSON)
    // Calcul du nombre de commentaires
    let nbCommentairesDispo = 0;
    let nbCommentairesNonDispo = 0;
    //if(pieces.length > 0){
    for (let i = 0; i < avis.length; i++) {
        const piece = pieces.find(p => p.id === avis[i].pieceId);

        if (piece) {
            if (piece.disponibilite) {
                nbCommentairesDispo++;
            } else {
                nbCommentairesNonDispo++;
            }
        }
    }

    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labelsDispo = ["Disponibles", "Non dispo."];

    // Données et personnalisation du graphique
    const dataDispo = {
        labels: labelsDispo,
        datasets: [{
            label: "Nombre de commentaires",export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
 
        const id = event.target.dataset.id;
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
        const avis = await reponse.json();
        window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
        const pieceElement = event.target.parentElement;
        afficherAvis(pieceElement, avis)
     });
 
    }
 }
 
 export function afficherAvis(pieceElement, avis){
    const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
 }

 export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
    event.preventDefault();
    // Création de l’objet du nouvel avis.
    const avis = {
        pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
        utilisateur: event.target.querySelector("[name=utilisateur]").value,
        commentaire: event.target.querySelector("[name=commentaire]").value,
        nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
    });
    
 }

export async function afficherGraphiqueAvis() {
    // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
    const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
    const nb_commentaires = [0, 0, 0, 0, 0];

    for (let commentaire of avis) {
        nb_commentaires[commentaire.nbEtoiles - 1]++;
    }
    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labels = ["5", "4", "3", "2", "1"];
    // Données et personnalisation du graphique
    const data = {
        labels: labels,
        datasets: [{
            label: "Étoiles attribuées",
            data: nb_commentaires.reverse(),
            backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
        }],
    };
    // Objet de configuration final
    const config = {
        type: "bar",
        data: data,
        options: {
            indexAxis: "y",
        },
    };
    // Rendu du graphique dans l'élément canvas
    const graphiqueAvis = new Chart(
        document.querySelector("#graphique-avis"),
        config,
    );
    // Récupération des pièces depuis le localStorage
    const piecesJSON = window.localStorage.getItem("pieces");
    //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
    const pieces = JSON.parse(piecesJSON)
    // Calcul du nombre de commentaires
    let nbCommentairesDispo = 0;
    let nbCommentairesNonDispo = 0;
    //if(pieces.length > 0){
    for (let i = 0; i < avis.length; i++) {
        const piece = pieces.find(p => p.id === avis[i].pieceId);

        if (piece) {
            if (piece.disponibilite) {
                nbCommentairesDispo++;
            } else {
                nbCommentairesNonDispo++;
            }
        }
    }

    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labelsDispo = ["Disponibles", "Non dispo."];

    // Données et personnalisation du graphique
    const dataDispo = {
        labels: labelsDispo,
        datasets: [{
            label: "Nombre de commentaires",
            data: [nbCommentairesDispo, nbCommentairesNonDispo],
            backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
        }],
    };

    // Objet de configuration final
    const configDispo = {
        type: "bar",
        data: dataDispo,
    };
    console.log(dataDispo);
    // Rendu du graphique dans l'élément canvas
    new Chart(
        document.querySelector("#graphique-dispo"),
        configDispo,
    );

    // ############ Fichier JavaScript d'initiation ############ //
    
        // Commentaire sur une ligne...
    
        /* Commentaire sur
        plusieurs lignes... */
    
        // Déclaration d'une variable
        var myBooleanVariable = true;
        var myIntegerVariable = 256;
        var myTextVariable = "Chaîne de caractères..."
    
        //modification d'une variable
        myBooleanVariable = false;
    
        // Déclaration d'une constante
        const myContant = "value";
    
        function myFunction() {
            // Définition de la fonction
        }
     
        // Récupérer un élement du DOM
    
        // Utilisation de defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte :
        // <script src="script.js" defer></script>
    
        // Utilisation de document.getElementById
        let elementById = document.getElementById("monElement");
    
        // Utilisation de document.querySelector
        let elementBySelector = document.querySelector(".maClasse");
    
        // Utilisation de document.querySelectorAll
        let elementsBySelector = document.querySelectorAll(".maClasse");
    
    
        // Modifier un élément du DOM
    
        // Utilisation de setAttribute
        elementById.setAttribute("monAttribut", "nouvelleValeur");
    
        // Utilisation de la syntaxe : elementHtml.nomAttribut
        elementById.monAttribut = "nouvelleValeur";
    
    
        // Créer un élément dans le DOM
    
        // Utilisation de document.createElement et appendChild
        let nouvelElement = document.createElement("div");
        document.body.appendChild(nouvelElement);
    
        // Utilisation de innerHTML
        nouvelElement.innerHTML = "<p>Voici du contenu inséré via innerHTML</p>";
    
    
        // Intéragir avec les éléments du DOM grace aux évenements
    
        // Utilisation de addEventListener
        elementById.addEventListener("click", function(event) {
            console.log("L'élément a été cliqué !");
        });
    
        // Utilisation de la variable event
        elementById.addEventListener("click", function(event) {
            console.log("L'élément a été cliqué ! L'événement est : ", event);
        });
    
    
        // Interpolation de chaîne
        var message = `La valeur de ma variable est ${myIntegerVariable}`;
    
        // Interpolation de code HTML
        var htmlCode = `<p>La valeur de ma variable est ${myIntegerVariable}</p>`;
    
        // Structures de contrôle
    
        // Exemple de if
        if (myBooleanVariable) {
            console.log("La variable est vraie");
        } else {
            console.log("La variable est fausse");
        }
    
        // Exemple de for
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
    
        // Exemple de while
        var j = 0;
        while (j < 10) {
            console.log(j);
            j++;
        }
    
        // Exemple de switch
        var fruit = "pomme";
        switch (fruit) {
            case "pomme":
                console.log("C'est une pomme !");
                break;
            case "banane":
                console.log("C'est une banane !");
                break;
            case "orange":
                console.log("C'est une orange !");
                break;
            default:
                console.log("Je ne connais pas ce fruit...");
        }
    
        // Programmation événementielle
        document.getElementById("myButton").addEventListener("click", function() {
            alert("Le bouton a été cliqué !");
        });
    
        // Déclaration d'une fonction
        function maFonction() {
            console.log("Ceci est une fonction !");
        }
        // Appel de la fonction
        maFonction();
    
        // Fonction avec paramètres
        function maFonctionAvecParametres(param1, param2) {
            console.log("Paramètre 1: " + param1);
            console.log("Paramètre 2: " + param2);
        }
        // Appel de la fonction avec paramètres
        maFonctionAvecParametres("valeur1", "valeur2");
    
        // Fonction qui retourne une valeur
        function maFonctionQuiRetourneUneValeur() {
            return "Valeur retournée";
        }
        // Utilisation de la valeur retournée
        var valeur = maFonctionQuiRetourneUneValeur();
        console.log(valeur);
    
        // Fonction anonyme
        var maFonctionAnonyme = function() {
            console.log("Ceci est une fonction anonyme !");
        }
        // Appel de la fonction anonyme
        maFonctionAnonyme();
    
        // Fonction fléchée
        var maFonctionFlechee = () => {
            console.log("Ceci est une fonction fléchée !");
        }
        // Appel de la fonction fléchée
        maFonctionFlechee();
    
        // Notion d'objet et sa notation objet.propriété
        var monObjet = {
            propriete: "valeur",
            methode: function() {
                console.log("Ceci est une méthode d'un objet !");
            }
        }
        // Accès à la propriété de l'objet
        console.log(monObjet.propriete);
        // Appel de la méthode de l'objet
        monObjet.methode();
    
        // Méthode d'un objet
        var monObjet = {
            maMethode: function() {
                console.log("Ceci est une méthode d'un objet !");
            }
        }
        // Appel de la méthode de l'objet
        monObjet.maMethode();
    
        // Explication de "this" et son utilisation ici
        // "this" fait référence à l'objet courant, c'est-à-dire l'objet sur lequel la méthode est appelée.
        // Dans cet exemple, "this" fait référence à l'objet "monObjet".
        // Ainsi, lorsque nous appelons la méthode "maMethode" de l'objet "monObjet", "this" dans la méthode fait référence à "monObjet".
        // Cela nous permet d'accéder aux propriétés et méthodes de l'objet à l'intérieur de la méthode.
        // Par exemple, nous pouvons utiliser "this.maMethode()" pour appeler la méthode elle-même à l'intérieur de la méthode.
    
        // Exemples concrets
        var autreObjet = {
            autreMethode: function() {
                console.log("Ceci est une autre méthode d'un autre objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode de l'autre objet
        autreObjet.autreMethode();
    
        // Utilisation de "this" dans une fonction fléchée
        var monObjetAvecFlechee = {
            maMethodeFlechee: () => {
                console.log("Ceci est une méthode fléchée d'un objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode fléchée de l'objet
        monObjetAvecFlechee.maMethodeFlechee();
    
        // Appel de la méthode de l'autre objet
        autreObjet.autreMethode();
    
        // Utilisation de "this" dans une fonction fléchée
        var monObjetAvecFlechee = {
            maMethodeFlechee: () => {
                console.log("Ceci est une méthode fléchée d'un objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode fléchée de l'objet
        monObjetAvecFlechee.maMethodeFlechee();
    
    
        // Exemples d'utilisation des tableaux et listes en JavaScript
    
            // Déclaration d'un tableau
            var monTableau = [1, 2, 3, 4, 5];
    
            // Accès à un élément du tableau
            console.log(monTableau[0]); // Affiche 1
    
            // Modification d'un élément du tableau
            monTableau[2] = 10;
    
            // Ajout d'un élément à la fin du tableau
            monTableau.push(6);
    
            // Suppression du dernier élément du tableau
            monTableau.pop();
    
            // Longueur du tableau
            console.log(monTableau.length); // Affiche 5
    
            // Parcours du tableau avec une boucle for
            for (var i = 0; i < monTableau.length; i++) {
                console.log(monTableau[i]);
            }
    
            // Déclaration d'une liste
            var maListe = ["a", "b", "c", "d", "e"];
    
            // Accès à un élément de la liste
            console.log(maListe[1]); // Affiche "b"
    
            // Modification d'un élément de la liste
            maListe[3] = "x";
    
            // Ajout d'un élément à la fin de la liste
            maListe.push("f");
    
            // Suppression du dernier élément de la liste
            maListe.pop();
    
            // Longueur de la liste
            console.log(maListe.length); // Affiche 5
    
            // Parcours de la liste avec une boucle for...of
            for (var element of maListe) {
                console.log(element);
            }
    
            // Parcours de la liste avec une boucle forEach
            maListe.forEach(function(element) {
                console.log(element);
            });
    
            // Recherche d'un élément dans la liste
            var index = maListe.indexOf("c");
            console.log(index); // Affiche 2
    
            // Suppression d'un élément de la liste
            maListe.splice(1, 1); // Supprime l'élément à l'index 1
    
            // Conversion d'un tableau en une chaîne de caractères
            var tableauEnChaine = monTableau.join(", ");
            console.log(tableauEnChaine); // Affiche "1, 2, 10, 4, 5"
    
            // Conversion d'une chaîne de caractères en un tableau
            var chaineEnTableau = tableauEnChaine.split(", ");
            console.log(chaineEnTableau); // Affiche ["1", "2", "10", "4", "5"]
    
            // Copie d'un tableau
            var copieTableau = monTableau.slice();
            console.log(copieTableau); // Affiche [1, 2, 10, 4, 5]
    
            // Concaténation de deux tableaux
            var tableauConcatene = monTableau.concat(copieTableau);
            console.log(tableauConcatene); // Affiche [1, 2, 10, 4, 5, 1, 2, 10, 4, 5]
    
            // Tri d'un tableau
            monTableau.sort();
            console.log(monTableau); // Affiche [1, 10, 2, 4, 5]
    
            // Inversion de l'ordre des éléments d'un tableau
            monTableau.reverse();
            console.log(monTableau); // Affiche [5, 4, 2, 10, 1]
    
            // Filtrage des éléments d'un tableau
            var tableauFiltre = monTableau.filter(function(element) {
                return element > 3;
            });
            console.log(tableauFiltre); // Affiche [5, 4, 10]
    
            // Transformation des éléments d'un tableau
            var tableauTransforme = monTableau.map(function(element) {
                return element * 2;
            });
            console.log(tableauTransforme); // Affiche [10, 8, 4, 20, 2]
    
            // Vérification de l'existence d'un élément dans un tableau
            var existe = monTableau.includes(10);
            console.log(existe); // Affiche true
    
            // Vérification si tous les éléments d'un tableau satisfont une condition
            var tousSatisfont = monTableau.every(function(element) {
                return element > 0;
            });
            console.log(tousSatisfont); // Affiche true
    
            // Vérification si au moins un élément d'un tableau satisfait une condition
            var auMoinsUnSatisfait = monTableau.some(function(element) {
                return element > 10;
            });
            console.log(auMoinsUnSatisfait); // Affiche false
    
            // Réduction des éléments d'un tableau à une seule valeur
            var somme = monTableau.reduce(function(acc, element) {
                return acc + element;
            }, 0);
            console.log(somme); // Affiche 22
    
            // Copie d'un tableau avec des éléments uniques
            var tableauUnique = Array.from(new Set(monTableau));
            console.log(tableauUnique); // Affiche [1, 10, 2, 4, 5]
    
            // Création d'un tableau à partir d'une chaîne de caractères
            var tableauFromString = Array.from("Hello");
            console.log(tableauFromString); // Affiche ["H", "e", "l", "l", "o"]
    
            // Création d'un tableau avec des valeurs répétées
            var tableauRepete = Array(3).fill("Hello");
            console.log(tableauRepete); // Affiche ["Hello", "Hello", "Hello"]
    
            // Création d'un tableau vide
            var tableauVide = [];
    
            // Création d'une liste vide
            var listeVide = [];
    
            // Exemples concrets
            var autreObjet = {
                autreMethode: function() {
                    console.log("Ceci est une autre méthode d'un autre objet !");
                    console.log("L'objet courant est:", this);
                }
            }
    import { ajoutListenersAvis, ajoutListenerEnvoyerAvis, afficherAvis, afficherGraphiqueAvis } from "./avis.js";
    //Récupération des pièces eventuellement stockées dans le localStorage
    let pieces = window.localStorage.getItem('pieces');
    
    if (pieces === null) {
        // Récupération des pièces depuis l'API
        const reponse = await fetch('http://localhost:8081/pieces/');
        pieces = await reponse.json();
        // Transformation des pièces en JSON
        const valeurPieces = JSON.stringify(pieces);
        // Stockage des informations dans le localStorage
        window.localStorage.setItem("pieces", valeurPieces);
    } else {
        pieces = JSON.parse(pieces);
    }
    // on appel la fonction pour ajouter le listener au formulaire
    ajoutListenerEnvoyerAvis()
    
    function genererPieces(pieces) {
        for (let i = 0; i < pieces.length; i++) {
    
            const article = pieces[i];
            // Récupération de l'élément du DOM qui accueillera les fiches
            const sectionFiches = document.querySelector(".fiches");
            // Création d’une balise dédiée à une pièce automobile
            const pieceElement = document.createElement("article");
            pieceElement.dataset.id = pieces[i].id
            // Création des balises 
            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            const nomElement = document.createElement("h2");
            nomElement.innerText = article.nom;
            const prixElement = document.createElement("p");
            prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
            const categorieElement = document.createElement("p");
            categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
            const stockElement = document.createElement("p");
            stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
            //Code ajouté
            const avisBouton = document.createElement("button");
            avisBouton.dataset.id = article.id;
            avisBouton.textContent = "Afficher les avis";
    
            // On rattache la balise article a la section Fiches
            sectionFiches.appendChild(pieceElement);
            pieceElement.appendChild(imageElement);
            pieceElement.appendChild(nomElement);
            pieceElement.appendChild(prixElement);
            pieceElement.appendChild(categorieElement);
            pieceElement.appendChild(descriptionElement);
            pieceElement.appendChild(stockElement);
            //Code aJouté
            pieceElement.appendChild(avisBouton);
    
        }
        ajoutListenersAvis();
    }
    
    genererPieces(pieces);
    
    for (let i = 0; i < pieces.length; i++) {
        const id = pieces[i].id;
        const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
        const avis = JSON.parse(avisJSON);
    
        if (avis !== null) {
            const pieceElement = document.querySelector(`article[data-id="${id}"]`);
            afficherAvis(pieceElement, avis)
        }
    }
    
    //gestion des bouttons 
    const boutonTrier = document.querySelector(".btn-trier");
    
    boutonTrier.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesOrdonnees);
    });
    
    const boutonFiltrer = document.querySelector(".btn-filtrer");
    
    boutonFiltrer.addEventListener("click", function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= 35;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    });
    
    //Correction Exercice
    const boutonDecroissant = document.querySelector(".btn-decroissant");
    
    boutonDecroissant.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return b.prix - a.prix;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesOrdonnees);
    });
    
    const boutonNoDescription = document.querySelector(".btn-nodesc");
    
    boutonNoDescription.addEventListener("click", function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.description
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    });
    
    const noms = pieces.map(piece => piece.nom);
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix > 35) {
            noms.splice(i, 1);
        }
    }
    console.log(noms)
    //Création de l'en-tête
    
    const pElement = document.createElement('p')
    pElement.innerText = "Pièces abordables";
    //Création de la liste
    const abordablesElements = document.createElement('ul');
    //Ajout de chaque nom à la liste
    for (let i = 0; i < noms.length; i++) {
        const nomElement = document.createElement('li');
        nomElement.innerText = noms[i];
        abordablesElements.appendChild(nomElement);
    }
    // Ajout de l'en-tête puis de la liste au bloc résultats filtres
    document.querySelector('.abordables')
        .appendChild(pElement)
        .appendChild(abordablesElements);
    
    const nomsDisponibles = pieces.map(piece => piece.nom)
    const prixDisponibles = pieces.map(piece => piece.prix)
    
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].disponibilite === false) {
            nomsDisponibles.splice(i, 1);
            prixDisponibles.splice(i, 1);
        }
    }
    
    const disponiblesElement = document.createElement('ul');
    
    for (let i = 0; i < nomsDisponibles.length; i++) {
        const nomElement = document.createElement('li');
        nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
        disponiblesElement.appendChild(nomElement);
    }
    
    const pElementDisponible = document.createElement('p')
    pElementDisponible.innerText = "Pièces disponibles:";
    document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)
    
    const inputPrixMax = document.querySelector('#prix-max')
    inputPrixMax.addEventListener('input', function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= inputPrixMax.value;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    })
    
    // Ajout du listener pour mettre à jour des données du localStorage
    const boutonMettreAJour = document.querySelector(".btn-maj");
    boutonMettreAJour.addEventListener("click", function () {
        window.localStorage.removeItem("pieces");
    });
    
    await afficherGraphiqueAvis();
    
    export function ajoutListenersAvis() {
    
        const piecesElements = document.querySelectorAll(".fiches article button");
     
        for (let i = 0; i < piecesElements.length; i++) {
     
         piecesElements[i].addEventListener("click", async function (event) {
     
            const id = event.target.dataset.id;
            const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
            const avis = await reponse.json();
            window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
            const pieceElement = event.target.parentElement;
            afficherAvis(pieceElement, avis)
         });
     
        }
     }
     
     export function afficherAvis(pieceElement, avis){
        const avisElement = document.createElement("p");
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
            }
            pieceElement.appendChild(avisElement);
     }
    
     export function ajoutListenerEnvoyerAvis() {
        const formulaireAvis = document.querySelector(".formulaire-avis");
        formulaireAvis.addEventListener("submit", function (event) {
        event.preventDefault();
        // Création de l’objet du nouvel avis.
        const avis = {
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur]").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
            nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
        };
        // Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(avis);
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        });
        });
        
     }
    
    /**
     * Calculates the number of comments per star rating and displays it in a bar chart.
     * Also displays the number of comments available and unavailable for each piece.
     * @async
     * @function afficherGraphiqueAvis
     */
    export async function afficherGraphiqueAvis() {
        // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
        const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
        const nb_commentaires = [0, 0, 0, 0, 0];

        for (let commentaire of avis) {
            nb_commentaires[commentaire.nbEtoiles - 1]++;
        }
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labels = ["5", "4", "3", "2", "1"];
        // Données et personnalisation du graphique
        const data = {
            labels: labels,
            datasets: [{
                label: "Étoiles attribuées",
                data: nb_commentaires.reverse(),
                backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
            }],
        };
        // Objet de configuration final
        const config = {
            type: "bar",
            data: data,
            options: {
                indexAxis: "y",
            },
        };
        // Rendu du graphique dans l'élément canvas
        const graphiqueAvis = new Chart(
            document.querySelector("#graphique-avis"),
            config,
        );
        // Récupération des pièces depuis le localStorage
        const piecesJSON = window.localStorage.getItem("pieces");
        //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
        const pieces = JSON.parse(piecesJSON)
        // Calcul du nombre de commentaires
        let nbCommentairesDispo = 0;
        let nbCommentairesNonDispo = 0;
        //if(pieces.length > 0){
        for (let i = 0; i < avis.length; i++) {
            const piece = pieces.find(p => p.id === avis[i].pieceId);

            if (piece) {
                if (piece.disponibilite) {
                    nbCommentairesDispo++;
                } else {
                    nbCommentairesNonDispo++;
                }
            }
        }

        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labelsDispo = ["Disponibles", "Non dispo."];

        // Données et personnalisation du graphique
        const dataDispo = {
            labels: labelsDispo,
            datasets: [{
                label: "Nombre de commentaires",
                // ...
            }],
        };
        // ...
    }

    /**
     * Adds click listeners to each piece's button to display its comments.
     * @function ajoutListenersAvis
     */
    export function ajoutListenersAvis() {
        const piecesElements = document.querySelectorAll(".fiches article button");

        for (let i = 0; i < piecesElements.length; i++) {

            piecesElements[i].addEventListener("click", async function (event) {

                const id = event.target.dataset.id;
                const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
                const avis = await reponse.json();
                window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
                const pieceElement = event.target.parentElement;
                afficherAvis(pieceElement, avis)
            });

        }
    }

    /**

// ############ Fichier JavaScript d'initiation ############ //

    // Commentaire sur une ligne...

    /* Commentaire sur
    plusieurs lignes... */

    // Déclaration d'une variable
    var myBooleanVariable = true;
    var myIntegerVariable = 256;
    var myTextVariable = "Chaîne de caractères..."

    //modification d'une variable
    myBooleanVariable = false;

    // Déclaration d'une constante
    const myContant = "value";

    function myFunction() {
        // Définition de la fonction
    }
 
    // Récupérer un élement du DOM

    // Utilisation de defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte :
    // <script src="script.js" defer></script>

    // Utilisation de document.getElementById
    let elementById = document.getElementById("monElement");

    // Utilisation de document.querySelector
    let elementBySelector = document.querySelector(".maClasse");

    // Utilisation de document.querySelectorAll
    let elementsBySelector = document.querySelectorAll(".maClasse");


    // Modifier un élément du DOM

    // Utilisation de setAttribute
    elementById.setAttribute("monAttribut", "nouvelleValeur");

    // Utilisation de la syntaxe : elementHtml.nomAttribut
    elementById.monAttribut = "nouvelleValeur";


    // Créer un élément dans le DOM

    // Utilisation de document.createElement et appendChild
    let nouvelElement = document.createElement("div");
    document.body.appendChild(nouvelElement);

    // Utilisation de innerHTML
    nouvelElement.innerHTML = "<p>Voici du contenu inséré via innerHTML</p>";


    // Intéragir avec les éléments du DOM grace aux évenements

    // Utilisation de addEventListener
    elementById.addEventListener("click", function(event) {
        console.log("L'élément a été cliqué !");
    });

    // Utilisation de la variable event
    elementById.addEventListener("click", function(event) {
        console.log("L'élément a été cliqué ! L'événement est : ", event);
    });


    // Interpolation de chaîne
    var message = `La valeur de ma variable est ${myIntegerVariable}`;

    // Interpolation de code HTML
    var htmlCode = `<p>La valeur de ma variable est ${myIntegerVariable}</p>`;

    // Structures de contrôle

    // Exemple de if
    if (myBooleanVariable) {
        console.log("La variable est vraie");
    } else {
        console.log("La variable est fausse");
    }

    // Exemple de for
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    // Exemple de while
    var j = 0;
    while (j < 10) {
        console.log(j);
        j++;
    }

    // Exemple de switch
    var fruit = "pomme";
    switch (fruit) {
        case "pomme":
            console.log("C'est une pomme !");
            break;
        case "banane":
            console.log("C'est une banane !");
            break;
        case "orange":
            console.log("C'est une orange !");
            break;
        default:
            console.log("Je ne connais pas ce fruit...");
    }

    // Programmation événementielle
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Le bouton a été cliqué !");
    });

    // Déclaration d'une fonction
    function maFonction() {
        console.log("Ceci est une fonction !");
    }
    // Appel de la fonction
    maFonction();

    // Fonction avec paramètres
    function maFonctionAvecParametres(param1, param2) {
        console.log("Paramètre 1: " + param1);
        console.log("Paramètre 2: " + param2);
    }
    // Appel de la fonction avec paramètres
    maFonctionAvecParametres("valeur1", "valeur2");

    // Fonction qui retourne une valeur
    function maFonctionQuiRetourneUneValeur() {
        return "Valeur retournée";
    }
    // Utilisation de la valeur retournée
    var valeur = maFonctionQuiRetourneUneValeur();
    console.log(valeur);

    // Fonction anonyme
    var maFonctionAnonyme = function() {
        console.log("Ceci est une fonction anonyme !");
    }
    // Appel de la fonction anonyme
    maFonctionAnonyme();

    // Fonction fléchée
    var maFonctionFlechee = () => {
        console.log("Ceci est une fonction fléchée !");
    }
    // Appel de la fonction fléchée
    maFonctionFlechee();

    // Notion d'objet et sa notation objet.propriété
    var monObjet = {
        propriete: "valeur",
        methode: function() {
            console.log("Ceci est une méthode d'un objet !");
        }
    }
    // Accès à la propriété de l'objet
    console.log(monObjet.propriete);
    // Appel de la méthode de l'objet
    monObjet.methode();

    // Méthode d'un objet
    var monObjet = {
        maMethode: function() {
            console.log("Ceci est une méthode d'un objet !");
        }
    }
    // Appel de la méthode de l'objet
    monObjet.maMethode();

    // Explication de "this" et son utilisation ici
    // "this" fait référence à l'objet courant, c'est-à-dire l'objet sur lequel la méthode est appelée.
    // Dans cet exemple, "this" fait référence à l'objet "monObjet".
    // Ainsi, lorsque nous appelons la méthode "maMethode" de l'objet "monObjet", "this" dans la méthode fait référence à "monObjet".
    // Cela nous permet d'accéder aux propriétés et méthodes de l'objet à l'intérieur de la méthode.
    // Par exemple, nous pouvons utiliser "this.maMethode()" pour appeler la méthode elle-même à l'intérieur de la méthode.

    // Exemples concrets
    var autreObjet = {
        autreMethode: function() {
            console.log("Ceci est une autre méthode d'un autre objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode de l'autre objet
    autreObjet.autreMethode();

    // Utilisation de "this" dans une fonction fléchée
    var monObjetAvecFlechee = {
        maMethodeFlechee: () => {
            console.log("Ceci est une méthode fléchée d'un objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode fléchée de l'objet
    monObjetAvecFlechee.maMethodeFlechee();

    // Appel de la méthode de l'autre objet
    autreObjet.autreMethode();

    // Utilisation de "this" dans une fonction fléchée
    var monObjetAvecFlechee = {
        maMethodeFlechee: () => {
            console.log("Ceci est une méthode fléchée d'un objet !");
            console.log("L'objet courant est:", this);
        }
    }
    // Appel de la méthode fléchée de l'objet
    monObjetAvecFlechee.maMethodeFlechee();


    // Exemples d'utilisation des tableaux et listes en JavaScript

        // Déclaration d'un tableau
        var monTableau = [1, 2, 3, 4, 5];

        // Accès à un élément du tableau
        console.log(monTableau[0]); // Affiche 1

        // Modification d'un élément du tableau
        monTableau[2] = 10;

        // Ajout d'un élément à la fin du tableau
        monTableau.push(6);

        // Suppression du dernier élément du tableau
        monTableau.pop();

        // Longueur du tableau
        console.log(monTableau.length); // Affiche 5

        // Parcours du tableau avec une boucle for
        for (var i = 0; i < monTableau.length; i++) {
            console.log(monTableau[i]);
        }

        // Déclaration d'une liste
        var maListe = ["a", "b", "c", "d", "e"];

        // Accès à un élément de la liste
        console.log(maListe[1]); // Affiche "b"

        // Modification d'un élément de la liste
        maListe[3] = "x";

        // Ajout d'un élément à la fin de la liste
        maListe.push("f");

        // Suppression du dernier élément de la liste
        maListe.pop();

        // Longueur de la liste
        console.log(maListe.length); // Affiche 5

        // Parcours de la liste avec une boucle for...of
        for (var element of maListe) {
            console.log(element);
        }

        // Parcours de la liste avec une boucle forEach
        maListe.forEach(function(element) {
            console.log(element);
        });

        // Recherche d'un élément dans la liste
        var index = maListe.indexOf("c");
        console.log(index); // Affiche 2

        // Suppression d'un élément de la liste
        maListe.splice(1, 1); // Supprime l'élément à l'index 1

        // Conversion d'un tableau en une chaîne de caractères
        var tableauEnChaine = monTableau.join(", ");
        console.log(tableauEnChaine); // Affiche "1, 2, 10, 4, 5"

        // Conversion d'une chaîne de caractères en un tableau
        var chaineEnTableau = tableauEnChaine.split(", ");
        console.log(chaineEnTableau); // Affiche ["1", "2", "10", "4", "5"]

        // Copie d'un tableau
        var copieTableau = monTableau.slice();
        console.log(copieTableau); // Affiche [1, 2, 10, 4, 5]

        // Concaténation de deux tableaux
        var tableauConcatene = monTableau.concat(copieTableau);
        console.log(tableauConcatene); // Affiche [1, 2, 10, 4, 5, 1, 2, 10, 4, 5]

        // Tri d'un tableau
        monTableau.sort();
        console.log(monTableau); // Affiche [1, 10, 2, 4, 5]

        // Inversion de l'ordre des éléments d'un tableau
        monTableau.reverse();
        console.log(monTableau); // Affiche [5, 4, 2, 10, 1]

        // Filtrage des éléments d'un tableau
        var tableauFiltre = monTableau.filter(function(element) {
            return element > 3;
        });
        console.log(tableauFiltre); // Affiche [5, 4, 10]

        // Transformation des éléments d'un tableau
        var tableauTransforme = monTableau.map(function(element) {
            return element * 2;
        });
        console.log(tableauTransforme); // Affiche [10, 8, 4, 20, 2]

        // Vérification de l'existence d'un élément dans un tableau
        var existe = monTableau.includes(10);
        console.log(existe); // Affiche true

        // Vérification si tous les éléments d'un tableau satisfont une condition
        var tousSatisfont = monTableau.every(function(element) {
            return element > 0;
        });
        console.log(tousSatisfont); // Affiche true

        // Vérification si au moins un élément d'un tableau satisfait une condition
        var auMoinsUnSatisfait = monTableau.some(function(element) {
            return element > 10;
        });
        console.log(auMoinsUnSatisfait); // Affiche false

        // Réduction des éléments d'un tableau à une seule valeur
        var somme = monTableau.reduce(function(acc, element) {
            return acc + element;
        }, 0);
        console.log(somme); // Affiche 22

        // Copie d'un tableau avec des éléments uniques
        var tableauUnique = Array.from(new Set(monTableau));
        console.log(tableauUnique); // Affiche [1, 10, 2, 4, 5]

        // Création d'un tableau à partir d'une chaîne de caractères
        var tableauFromString = Array.from("Hello");
        console.log(tableauFromString); // Affiche ["H", "e", "l", "l", "o"]

        // Création d'un tableau avec des valeurs répétées
        var tableauRepete = Array(3).fill("Hello");
        console.log(tableauRepete); // Affiche ["Hello", "Hello", "Hello"]

        // Création d'un tableau vide
        var tableauVide = [];

        // Création d'une liste vide
        var listeVide = [];

        // Exemples concrets
        var autreObjet = {
            autreMethode: function() {
                console.log("Ceci est une autre méthode d'un autre objet !");
                console.log("L'objet courant est:", this);
            }
        }
import { ajoutListenersAvis, ajoutListenerEnvoyerAvis, afficherAvis, afficherGraphiqueAvis } from "./avis.js";
//Récupération des pièces eventuellement stockées dans le localStorage
let pieces = window.localStorage.getItem('pieces');

if (pieces === null) {
    // Récupération des pièces depuis l'API
    const reponse = await fetch('http://localhost:8081/pieces/');
    pieces = await reponse.json();
    // Transformation des pièces en JSON
    const valeurPieces = JSON.stringify(pieces);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("pieces", valeurPieces);
} else {
    pieces = JSON.parse(pieces);
}
// on appel la fonction pour ajouter le listener au formulaire
ajoutListenerEnvoyerAvis()

function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        pieceElement.dataset.id = pieces[i].id
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";

        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        //Code aJouté
        pieceElement.appendChild(avisBouton);

    }
    ajoutListenersAvis();
}

genererPieces(pieces);

for (let i = 0; i < pieces.length; i++) {
    const id = pieces[i].id;
    const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
    const avis = JSON.parse(avisJSON);

    if (avis !== null) {
        const pieceElement = document.querySelector(`article[data-id="${id}"]`);
        afficherAvis(pieceElement, avis)
    }
}

//gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}
console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1);
        prixDisponibles.splice(i, 1);
    }
}

const disponiblesElement = document.createElement('ul');

for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)

const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
})

// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
    window.localStorage.removeItem("pieces");
});

await afficherGraphiqueAvis();

export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
 
        const id = event.target.dataset.id;
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
        const avis = await reponse.json();
        window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
        const pieceElement = event.target.parentElement;
        afficherAvis(pieceElement, avis)
     });
 
    }
 }
 
 export function afficherAvis(pieceElement, avis){
    const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
 }

 export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
    event.preventDefault();
    // Création de l’objet du nouvel avis.
    const avis = {
        pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
        utilisateur: event.target.querySelector("[name=utilisateur]").value,
        commentaire: event.target.querySelector("[name=commentaire]").value,
        nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
    });
    
 }

export async function afficherGraphiqueAvis() {
    // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
    const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
    const nb_commentaires = [0, 0, 0, 0, 0];

    for (let commentaire of avis) {
        nb_commentaires[commentaire.nbEtoiles - 1]++;
    }
    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labels = ["5", "4", "3", "2", "1"];
    // Données et personnalisation du graphique
    const data = {
        labels: labels,
        datasets: [{
            label: "Étoiles attribuées",
            data: nb_commentaires.reverse(),
            backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
        }],
    };
    // Objet de configuration final
    const config = {
        type: "bar",
        data: data,
        options: {
            indexAxis: "y",
        },
    };
    // Rendu du graphique dans l'élément canvas
    const graphiqueAvis = new Chart(
        document.querySelector("#graphique-avis"),
        config,
    );
    // Récupération des pièces depuis le localStorage
    const piecesJSON = window.localStorage.getItem("pieces");
    //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
    const pieces = JSON.parse(piecesJSON)
    // Calcul du nombre de commentaires
    let nbCommentairesDispo = 0;
    let nbCommentairesNonDispo = 0;
    //if(pieces.length > 0){
    for (let i = 0; i < avis.length; i++) {
        const piece = pieces.find(p => p.id === avis[i].pieceId);

        if (piece) {
            if (piece.disponibilite) {
                nbCommentairesDispo++;
            } else {
                nbCommentairesNonDispo++;
            }
        }
    }

    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labelsDispo = ["Disponibles", "Non dispo."];

    // Données et personnalisation du graphique
    const dataDispo = {
        labels: labelsDispo,
        datasets: [{
            label: "Nombre de commentaires",export function ajoutListenersAvis() {

    const piecesElements = document.querySelectorAll(".fiches article button");
 
    for (let i = 0; i < piecesElements.length; i++) {
 
     piecesElements[i].addEventListener("click", async function (event) {
 
        const id = event.target.dataset.id;
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
        const avis = await reponse.json();
        window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
        const pieceElement = event.target.parentElement;
        afficherAvis(pieceElement, avis)
     });
 
    }
 }
 
 export function afficherAvis(pieceElement, avis){
    const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
 }

 export function ajoutListenerEnvoyerAvis() {
    const formulaireAvis = document.querySelector(".formulaire-avis");
    formulaireAvis.addEventListener("submit", function (event) {
    event.preventDefault();
    // Création de l’objet du nouvel avis.
    const avis = {
        pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
        utilisateur: event.target.querySelector("[name=utilisateur]").value,
        commentaire: event.target.querySelector("[name=commentaire]").value,
        nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
    };
    // Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(avis);
    // Appel de la fonction fetch avec toutes les informations nécessaires
    fetch("http://localhost:8081/avis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
    });
    
 }

export async function afficherGraphiqueAvis() {
    // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
    const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
    const nb_commentaires = [0, 0, 0, 0, 0];

    for (let commentaire of avis) {
        nb_commentaires[commentaire.nbEtoiles - 1]++;
    }
    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labels = ["5", "4", "3", "2", "1"];
    // Données et personnalisation du graphique
    const data = {
        labels: labels,
        datasets: [{
            label: "Étoiles attribuées",
            data: nb_commentaires.reverse(),
            backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
        }],
    };
    // Objet de configuration final
    const config = {
        type: "bar",
        data: data,
        options: {
            indexAxis: "y",
        },
    };
    // Rendu du graphique dans l'élément canvas
    const graphiqueAvis = new Chart(
        document.querySelector("#graphique-avis"),
        config,
    );
    // Récupération des pièces depuis le localStorage
    const piecesJSON = window.localStorage.getItem("pieces");
    //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
    const pieces = JSON.parse(piecesJSON)
    // Calcul du nombre de commentaires
    let nbCommentairesDispo = 0;
    let nbCommentairesNonDispo = 0;
    //if(pieces.length > 0){
    for (let i = 0; i < avis.length; i++) {
        const piece = pieces.find(p => p.id === avis[i].pieceId);

        if (piece) {
            if (piece.disponibilite) {
                nbCommentairesDispo++;
            } else {
                nbCommentairesNonDispo++;
            }
        }
    }

    // Légende qui s'affichera sur la gauche à côté de la barre horizontale
    const labelsDispo = ["Disponibles", "Non dispo."];

    // Données et personnalisation du graphique
    const dataDispo = {
        labels: labelsDispo,
        datasets: [{
            label: "Nombre de commentaires",
            data: [nbCommentairesDispo, nbCommentairesNonDispo],
            backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
        }],
    };

    // Objet de configuration final
    const configDispo = {
        type: "bar",
        data: dataDispo,
    };
    console.log(dataDispo);
    // Rendu du graphique dans l'élément canvas
    new Chart(
        document.querySelector("#graphique-dispo"),
        configDispo,
    );

    // ############ Fichier JavaScript d'initiation ############ //
    
        // Commentaire sur une ligne...
    
        /* Commentaire sur
        plusieurs lignes... */
    
        // Déclaration d'une variable
        var myBooleanVariable = true;
        var myIntegerVariable = 256;
        var myTextVariable = "Chaîne de caractères..."
    
        //modification d'une variable
        myBooleanVariable = false;
    
        // Déclaration d'une constante
        const myContant = "value";
    
        function myFunction() {
            // Définition de la fonction
        }
     
        // Récupérer un élement du DOM
    
        // Utilisation de defer dans l’inclusion de vos fichiers JS pour retarder leur prise en compte :
        // <script src="script.js" defer></script>
    
        // Utilisation de document.getElementById
        let elementById = document.getElementById("monElement");
    
        // Utilisation de document.querySelector
        let elementBySelector = document.querySelector(".maClasse");
    
        // Utilisation de document.querySelectorAll
        let elementsBySelector = document.querySelectorAll(".maClasse");
    
    
        // Modifier un élément du DOM
    
        // Utilisation de setAttribute
        elementById.setAttribute("monAttribut", "nouvelleValeur");
    
        // Utilisation de la syntaxe : elementHtml.nomAttribut
        elementById.monAttribut = "nouvelleValeur";
    
    
        // Créer un élément dans le DOM
    
        // Utilisation de document.createElement et appendChild
        let nouvelElement = document.createElement("div");
        document.body.appendChild(nouvelElement);
    
        // Utilisation de innerHTML
        nouvelElement.innerHTML = "<p>Voici du contenu inséré via innerHTML</p>";
    
    
        // Intéragir avec les éléments du DOM grace aux évenements
    
        // Utilisation de addEventListener
        elementById.addEventListener("click", function(event) {
            console.log("L'élément a été cliqué !");
        });
    
        // Utilisation de la variable event
        elementById.addEventListener("click", function(event) {
            console.log("L'élément a été cliqué ! L'événement est : ", event);
        });
    
    
        // Interpolation de chaîne
        var message = `La valeur de ma variable est ${myIntegerVariable}`;
    
        // Interpolation de code HTML
        var htmlCode = `<p>La valeur de ma variable est ${myIntegerVariable}</p>`;
    
        // Structures de contrôle
    
        // Exemple de if
        if (myBooleanVariable) {
            console.log("La variable est vraie");
        } else {
            console.log("La variable est fausse");
        }
    
        // Exemple de for
        for (var i = 0; i < 10; i++) {
            console.log(i);
        }
    
        // Exemple de while
        var j = 0;
        while (j < 10) {
            console.log(j);
            j++;
        }
    
        // Exemple de switch
        var fruit = "pomme";
        switch (fruit) {
            case "pomme":
                console.log("C'est une pomme !");
                break;
            case "banane":
                console.log("C'est une banane !");
                break;
            case "orange":
                console.log("C'est une orange !");
                break;
            default:
                console.log("Je ne connais pas ce fruit...");
        }
    
        // Programmation événementielle
        document.getElementById("myButton").addEventListener("click", function() {
            alert("Le bouton a été cliqué !");
        });
    
        // Déclaration d'une fonction
        function maFonction() {
            console.log("Ceci est une fonction !");
        }
        // Appel de la fonction
        maFonction();
    
        // Fonction avec paramètres
        function maFonctionAvecParametres(param1, param2) {
            console.log("Paramètre 1: " + param1);
            console.log("Paramètre 2: " + param2);
        }
        // Appel de la fonction avec paramètres
        maFonctionAvecParametres("valeur1", "valeur2");
    
        // Fonction qui retourne une valeur
        function maFonctionQuiRetourneUneValeur() {
            return "Valeur retournée";
        }
        // Utilisation de la valeur retournée
        var valeur = maFonctionQuiRetourneUneValeur();
        console.log(valeur);
    
        // Fonction anonyme
        var maFonctionAnonyme = function() {
            console.log("Ceci est une fonction anonyme !");
        }
        // Appel de la fonction anonyme
        maFonctionAnonyme();
    
        // Fonction fléchée
        var maFonctionFlechee = () => {
            console.log("Ceci est une fonction fléchée !");
        }
        // Appel de la fonction fléchée
        maFonctionFlechee();
    
        // Notion d'objet et sa notation objet.propriété
        var monObjet = {
            propriete: "valeur",
            methode: function() {
                console.log("Ceci est une méthode d'un objet !");
            }
        }
        // Accès à la propriété de l'objet
        console.log(monObjet.propriete);
        // Appel de la méthode de l'objet
        monObjet.methode();
    
        // Méthode d'un objet
        var monObjet = {
            maMethode: function() {
                console.log("Ceci est une méthode d'un objet !");
            }
        }
        // Appel de la méthode de l'objet
        monObjet.maMethode();
    
        // Explication de "this" et son utilisation ici
        // "this" fait référence à l'objet courant, c'est-à-dire l'objet sur lequel la méthode est appelée.
        // Dans cet exemple, "this" fait référence à l'objet "monObjet".
        // Ainsi, lorsque nous appelons la méthode "maMethode" de l'objet "monObjet", "this" dans la méthode fait référence à "monObjet".
        // Cela nous permet d'accéder aux propriétés et méthodes de l'objet à l'intérieur de la méthode.
        // Par exemple, nous pouvons utiliser "this.maMethode()" pour appeler la méthode elle-même à l'intérieur de la méthode.
    
        // Exemples concrets
        var autreObjet = {
            autreMethode: function() {
                console.log("Ceci est une autre méthode d'un autre objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode de l'autre objet
        autreObjet.autreMethode();
    
        // Utilisation de "this" dans une fonction fléchée
        var monObjetAvecFlechee = {
            maMethodeFlechee: () => {
                console.log("Ceci est une méthode fléchée d'un objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode fléchée de l'objet
        monObjetAvecFlechee.maMethodeFlechee();
    
        // Appel de la méthode de l'autre objet
        autreObjet.autreMethode();
    
        // Utilisation de "this" dans une fonction fléchée
        var monObjetAvecFlechee = {
            maMethodeFlechee: () => {
                console.log("Ceci est une méthode fléchée d'un objet !");
                console.log("L'objet courant est:", this);
            }
        }
        // Appel de la méthode fléchée de l'objet
        monObjetAvecFlechee.maMethodeFlechee();
    
    
        // Exemples d'utilisation des tableaux et listes en JavaScript
    
            // Déclaration d'un tableau
            var monTableau = [1, 2, 3, 4, 5];
    
            // Accès à un élément du tableau
            console.log(monTableau[0]); // Affiche 1
    
            // Modification d'un élément du tableau
            monTableau[2] = 10;
    
            // Ajout d'un élément à la fin du tableau
            monTableau.push(6);
    
            // Suppression du dernier élément du tableau
            monTableau.pop();
    
            // Longueur du tableau
            console.log(monTableau.length); // Affiche 5
    
            // Parcours du tableau avec une boucle for
            for (var i = 0; i < monTableau.length; i++) {
                console.log(monTableau[i]);
            }
    
            // Déclaration d'une liste
            var maListe = ["a", "b", "c", "d", "e"];
    
            // Accès à un élément de la liste
            console.log(maListe[1]); // Affiche "b"
    
            // Modification d'un élément de la liste
            maListe[3] = "x";
    
            // Ajout d'un élément à la fin de la liste
            maListe.push("f");
    
            // Suppression du dernier élément de la liste
            maListe.pop();
    
            // Longueur de la liste
            console.log(maListe.length); // Affiche 5
    
            // Parcours de la liste avec une boucle for...of
            for (var element of maListe) {
                console.log(element);
            }
    
            // Parcours de la liste avec une boucle forEach
            maListe.forEach(function(element) {
                console.log(element);
            });
    
            // Recherche d'un élément dans la liste
            var index = maListe.indexOf("c");
            console.log(index); // Affiche 2
    
            // Suppression d'un élément de la liste
            maListe.splice(1, 1); // Supprime l'élément à l'index 1
    
            // Conversion d'un tableau en une chaîne de caractères
            var tableauEnChaine = monTableau.join(", ");
            console.log(tableauEnChaine); // Affiche "1, 2, 10, 4, 5"
    
            // Conversion d'une chaîne de caractères en un tableau
            var chaineEnTableau = tableauEnChaine.split(", ");
            console.log(chaineEnTableau); // Affiche ["1", "2", "10", "4", "5"]
    
            // Copie d'un tableau
            var copieTableau = monTableau.slice();
            console.log(copieTableau); // Affiche [1, 2, 10, 4, 5]
    
            // Concaténation de deux tableaux
            var tableauConcatene = monTableau.concat(copieTableau);
            console.log(tableauConcatene); // Affiche [1, 2, 10, 4, 5, 1, 2, 10, 4, 5]
    
            // Tri d'un tableau
            monTableau.sort();
            console.log(monTableau); // Affiche [1, 10, 2, 4, 5]
    
            // Inversion de l'ordre des éléments d'un tableau
            monTableau.reverse();
            console.log(monTableau); // Affiche [5, 4, 2, 10, 1]
    
            // Filtrage des éléments d'un tableau
            var tableauFiltre = monTableau.filter(function(element) {
                return element > 3;
            });
            console.log(tableauFiltre); // Affiche [5, 4, 10]
    
            // Transformation des éléments d'un tableau
            var tableauTransforme = monTableau.map(function(element) {
                return element * 2;
            });
            console.log(tableauTransforme); // Affiche [10, 8, 4, 20, 2]
    
            // Vérification de l'existence d'un élément dans un tableau
            var existe = monTableau.includes(10);
            console.log(existe); // Affiche true
    
            // Vérification si tous les éléments d'un tableau satisfont une condition
            var tousSatisfont = monTableau.every(function(element) {
                return element > 0;
            });
            console.log(tousSatisfont); // Affiche true
    
            // Vérification si au moins un élément d'un tableau satisfait une condition
            var auMoinsUnSatisfait = monTableau.some(function(element) {
                return element > 10;
            });
            console.log(auMoinsUnSatisfait); // Affiche false
    
            // Réduction des éléments d'un tableau à une seule valeur
            var somme = monTableau.reduce(function(acc, element) {
                return acc + element;
            }, 0);
            console.log(somme); // Affiche 22
    
            // Copie d'un tableau avec des éléments uniques
            var tableauUnique = Array.from(new Set(monTableau));
            console.log(tableauUnique); // Affiche [1, 10, 2, 4, 5]
    
            // Création d'un tableau à partir d'une chaîne de caractères
            var tableauFromString = Array.from("Hello");
            console.log(tableauFromString); // Affiche ["H", "e", "l", "l", "o"]
    
            // Création d'un tableau avec des valeurs répétées
            var tableauRepete = Array(3).fill("Hello");
            console.log(tableauRepete); // Affiche ["Hello", "Hello", "Hello"]
    
            // Création d'un tableau vide
            var tableauVide = [];
    
            // Création d'une liste vide
            var listeVide = [];
    
            // Exemples concrets
            var autreObjet = {
                autreMethode: function() {
                    console.log("Ceci est une autre méthode d'un autre objet !");
                    console.log("L'objet courant est:", this);
                }
            }
    import { ajoutListenersAvis, ajoutListenerEnvoyerAvis, afficherAvis, afficherGraphiqueAvis } from "./avis.js";
    //Récupération des pièces eventuellement stockées dans le localStorage
    let pieces = window.localStorage.getItem('pieces');
    
    if (pieces === null) {
        // Récupération des pièces depuis l'API
        const reponse = await fetch('http://localhost:8081/pieces/');
        pieces = await reponse.json();
        // Transformation des pièces en JSON
        const valeurPieces = JSON.stringify(pieces);
        // Stockage des informations dans le localStorage
        window.localStorage.setItem("pieces", valeurPieces);
    } else {
        pieces = JSON.parse(pieces);
    }
    // on appel la fonction pour ajouter le listener au formulaire
    ajoutListenerEnvoyerAvis()
    
    function genererPieces(pieces) {
        for (let i = 0; i < pieces.length; i++) {
    
            const article = pieces[i];
            // Récupération de l'élément du DOM qui accueillera les fiches
            const sectionFiches = document.querySelector(".fiches");
            // Création d’une balise dédiée à une pièce automobile
            const pieceElement = document.createElement("article");
            pieceElement.dataset.id = pieces[i].id
            // Création des balises 
            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            const nomElement = document.createElement("h2");
            nomElement.innerText = article.nom;
            const prixElement = document.createElement("p");
            prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
            const categorieElement = document.createElement("p");
            categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
            const stockElement = document.createElement("p");
            stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
            //Code ajouté
            const avisBouton = document.createElement("button");
            avisBouton.dataset.id = article.id;
            avisBouton.textContent = "Afficher les avis";
    
            // On rattache la balise article a la section Fiches
            sectionFiches.appendChild(pieceElement);
            pieceElement.appendChild(imageElement);
            pieceElement.appendChild(nomElement);
            pieceElement.appendChild(prixElement);
            pieceElement.appendChild(categorieElement);
            pieceElement.appendChild(descriptionElement);
            pieceElement.appendChild(stockElement);
            //Code aJouté
            pieceElement.appendChild(avisBouton);
    
        }
        ajoutListenersAvis();
    }
    
    genererPieces(pieces);
    
    for (let i = 0; i < pieces.length; i++) {
        const id = pieces[i].id;
        const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
        const avis = JSON.parse(avisJSON);
    
        if (avis !== null) {
            const pieceElement = document.querySelector(`article[data-id="${id}"]`);
            afficherAvis(pieceElement, avis)
        }
    }
    
    //gestion des bouttons 
    const boutonTrier = document.querySelector(".btn-trier");
    
    boutonTrier.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesOrdonnees);
    });
    
    const boutonFiltrer = document.querySelector(".btn-filtrer");
    
    boutonFiltrer.addEventListener("click", function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= 35;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    });
    
    //Correction Exercice
    const boutonDecroissant = document.querySelector(".btn-decroissant");
    
    boutonDecroissant.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return b.prix - a.prix;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesOrdonnees);
    });
    
    const boutonNoDescription = document.querySelector(".btn-nodesc");
    
    boutonNoDescription.addEventListener("click", function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.description
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    });
    
    const noms = pieces.map(piece => piece.nom);
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix > 35) {
            noms.splice(i, 1);
        }
    }
    console.log(noms)
    //Création de l'en-tête
    
    const pElement = document.createElement('p')
    pElement.innerText = "Pièces abordables";
    //Création de la liste
    const abordablesElements = document.createElement('ul');
    //Ajout de chaque nom à la liste
    for (let i = 0; i < noms.length; i++) {
        const nomElement = document.createElement('li');
        nomElement.innerText = noms[i];
        abordablesElements.appendChild(nomElement);
    }
    // Ajout de l'en-tête puis de la liste au bloc résultats filtres
    document.querySelector('.abordables')
        .appendChild(pElement)
        .appendChild(abordablesElements);
    
    const nomsDisponibles = pieces.map(piece => piece.nom)
    const prixDisponibles = pieces.map(piece => piece.prix)
    
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].disponibilite === false) {
            nomsDisponibles.splice(i, 1);
            prixDisponibles.splice(i, 1);
        }
    }
    
    const disponiblesElement = document.createElement('ul');
    
    for (let i = 0; i < nomsDisponibles.length; i++) {
        const nomElement = document.createElement('li');
        nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
        disponiblesElement.appendChild(nomElement);
    }
    
    const pElementDisponible = document.createElement('p')
    pElementDisponible.innerText = "Pièces disponibles:";
    document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)
    
    const inputPrixMax = document.querySelector('#prix-max')
    inputPrixMax.addEventListener('input', function () {
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= inputPrixMax.value;
        });
        document.querySelector(".fiches").innerHTML = "";
        genererPieces(piecesFiltrees);
    })
    
    // Ajout du listener pour mettre à jour des données du localStorage
    const boutonMettreAJour = document.querySelector(".btn-maj");
    boutonMettreAJour.addEventListener("click", function () {
        window.localStorage.removeItem("pieces");
    });
    
    await afficherGraphiqueAvis();
    
    export function ajoutListenersAvis() {
    
        const piecesElements = document.querySelectorAll(".fiches article button");
     
        for (let i = 0; i < piecesElements.length; i++) {
     
         piecesElements[i].addEventListener("click", async function (event) {
     
            const id = event.target.dataset.id;
            const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
            const avis = await reponse.json();
            window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
            const pieceElement = event.target.parentElement;
            afficherAvis(pieceElement, avis)
         });
     
        }
     }
     
     export function afficherAvis(pieceElement, avis){
        const avisElement = document.createElement("p");
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
            }
            pieceElement.appendChild(avisElement);
     }
    
     export function ajoutListenerEnvoyerAvis() {
        const formulaireAvis = document.querySelector(".formulaire-avis");
        formulaireAvis.addEventListener("submit", function (event) {
        event.preventDefault();
        // Création de l’objet du nouvel avis.
        const avis = {
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur]").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
            nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
        };
        // Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(avis);
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        });
        });
        
     }
    
    export async function afficherGraphiqueAvis() {
        // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
        const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
        const nb_commentaires = [0, 0, 0, 0, 0];
    
        for (let commentaire of avis) {
            nb_commentaires[commentaire.nbEtoiles - 1]++;
        }
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labels = ["5", "4", "3", "2", "1"];
        // Données et personnalisation du graphique
        const data = {
            labels: labels,
            datasets: [{
                label: "Étoiles attribuées",
                data: nb_commentaires.reverse(),
                backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
            }],
        };
        // Objet de configuration final
        const config = {
            type: "bar",
            data: data,
            options: {
                indexAxis: "y",
            },
        };
        // Rendu du graphique dans l'élément canvas
        const graphiqueAvis = new Chart(
            document.querySelector("#graphique-avis"),
            config,
        );
        // Récupération des pièces depuis le localStorage
        const piecesJSON = window.localStorage.getItem("pieces");
        //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
        const pieces = JSON.parse(piecesJSON)
        // Calcul du nombre de commentaires
        let nbCommentairesDispo = 0;
        let nbCommentairesNonDispo = 0;
        //if(pieces.length > 0){
        for (let i = 0; i < avis.length; i++) {
            const piece = pieces.find(p => p.id === avis[i].pieceId);
    
            if (piece) {
                if (piece.disponibilite) {
                    nbCommentairesDispo++;
                } else {
                    nbCommentairesNonDispo++;
                }
            }
        }
    
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labelsDispo = ["Disponibles", "Non dispo."];
    
        // Données et personnalisation du graphique
        const dataDispo = {
            labels: labelsDispo,
            datasets: [{
                label: "Nombre de commentaires",export function ajoutListenersAvis() {
    
        const piecesElements = document.querySelectorAll(".fiches article button");
     
        for (let i = 0; i < piecesElements.length; i++) {
     
         piecesElements[i].addEventListener("click", async function (event) {
     
            const id = event.target.dataset.id;
            const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis");
            const avis = await reponse.json();
            window.localStorage.setItem(`avis-piece-${id}`, JSON.stringify(avis))
            const pieceElement = event.target.parentElement;
            afficherAvis(pieceElement, avis)
         });
     
        }
     }
     
     export function afficherAvis(pieceElement, avis){
        const avisElement = document.createElement("p");
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
            }
            pieceElement.appendChild(avisElement);
     }
    
     export function ajoutListenerEnvoyerAvis() {
        const formulaireAvis = document.querySelector(".formulaire-avis");
        formulaireAvis.addEventListener("submit", function (event) {
        event.preventDefault();
        // Création de l’objet du nouvel avis.
        const avis = {
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur]").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
            nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
        };
        // Création de la charge utile au format JSON
        const chargeUtile = JSON.stringify(avis);
        // Appel de la fonction fetch avec toutes les informations nécessaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: chargeUtile
        });
        });
        
     }
    
    export async function afficherGraphiqueAvis() {
        // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
        const avis = await fetch("http://localhost:8081/avis").then(avis => avis.json());
        const nb_commentaires = [0, 0, 0, 0, 0];
    
        for (let commentaire of avis) {
            nb_commentaires[commentaire.nbEtoiles - 1]++;
        }
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labels = ["5", "4", "3", "2", "1"];
        // Données et personnalisation du graphique
        const data = {
            labels: labels,
            datasets: [{
                label: "Étoiles attribuées",
                data: nb_commentaires.reverse(),
                backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
            }],
        };
        // Objet de configuration final
        const config = {
            type: "bar",
            data: data,
            options: {
                indexAxis: "y",
            },
        };
        // Rendu du graphique dans l'élément canvas
        const graphiqueAvis = new Chart(
            document.querySelector("#graphique-avis"),
            config,
        );
        // Récupération des pièces depuis le localStorage
        const piecesJSON = window.localStorage.getItem("pieces");
        //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
        const pieces = JSON.parse(piecesJSON)
        // Calcul du nombre de commentaires
        let nbCommentairesDispo = 0;
        let nbCommentairesNonDispo = 0;
        //if(pieces.length > 0){
        for (let i = 0; i < avis.length; i++) {
            const piece = pieces.find(p => p.id === avis[i].pieceId);
    
            if (piece) {
                if (piece.disponibilite) {
                    nbCommentairesDispo++;
                } else {
                    nbCommentairesNonDispo++;
                }
            }
        }
    
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labelsDispo = ["Disponibles", "Non dispo."];
    
        // Données et personnalisation du graphique
        const dataDispo = {
            labels: labelsDispo,
            datasets: [{
                label: "Nombre de commentaires",
                data: [nbCommentairesDispo, nbCommentairesNonDispo],
                backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
            }],
        };
    
        // Objet de configuration final
        const configDispo = {
            type: "bar",
            data: dataDispo,
        };
        console.log(dataDispo);
        // Rendu du graphique dans l'élément canvas
        new Chart(
            document.querySelector("#graphique-dispo"),
            configDispo,
        );
    
    }
    
    
    
                data: [nbCommentairesDispo, nbCommentairesNonDispo],
                backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
            }],
        };
    
        // Objet de configuration final
        const configDispo = {
            type: "bar",
            data: dataDispo,
        };
        console.log(dataDispo);
        // Rendu du graphique dans l'élément canvas
        new Chart(
            document.querySelector("#graphique-dispo"),
            configDispo,
        );
    
    }
    
    
    

}



            data: [nbCommentairesDispo, nbCommentairesNonDispo],
            backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
        }],
    };

    // Objet de configuration final
    const configDispo = {
        type: "bar",
        data: dataDispo,
    };
    console.log(dataDispo);
    // Rendu du graphique dans l'élément canvas
    new Chart(
        document.querySelector("#graphique-dispo"),
        configDispo,
    );

}



     * Displays the comments for a given piece.
     * @param {HTMLElement} pieceElement - The HTML element of the piece to display the comments for.
     * @param {Array} avis - The array of comments to display.
     * @function afficherAvis
     */
    export function afficherAvis(pieceElement, avis){
        const avisElement = document.createElement("p");
        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}:</b> ${avis[i].commentaire} <br>`;
        }
        pieceElement.appendChild(avisElement);
    }

    /**
     * Adds a submit listener to the comment form to send a new comment to the server.
     * @function ajoutListenerEnvoyerAvis
     */
    export function ajoutListenerEnvoyerAvis() {
        const formulaireAvis = document.querySelector(".formulaire-avis");
        formulaireAvis.addEventListener("submit", function (event) {
            event.preventDefault();
            // Création de l’objet du nouvel avis.
            const avis = {
                pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
                utilisateur: event.target.querySelector("[name=utilisateur]").value,
                commentaire: event.target.querySelector("[name=commentaire]").value,
                nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
            };
            // Création de la charge utile au format JSON
            const chargeUtile = JSON.stringify(avis);
            // Appel de la fonction fetch avec toutes les informations nécessaires
            fetch("http://localhost:8081/avis", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: chargeUtile
            });
        });
    }
        const graphiqueAvis = new Chart(
            document.querySelector("#graphique-avis"),
            config,
        );
        // Récupération des pièces depuis le localStorage
        const piecesJSON = window.localStorage.getItem("pieces");
        //const pieces = piecesJSON ? JSON.parse(piecesJSON) : [];
        const pieces = JSON.parse(piecesJSON)
        // Calcul du nombre de commentaires
        let nbCommentairesDispo = 0;
        let nbCommentairesNonDispo = 0;
        //if(pieces.length > 0){
        for (let i = 0; i < avis.length; i++) {
            const piece = pieces.find(p => p.id === avis[i].pieceId);
    
            if (piece) {
                if (piece.disponibilite) {
                    nbCommentairesDispo++;
                } else {
                    nbCommentairesNonDispo++;
                }
            }
        }
    
        // Légende qui s'affichera sur la gauche à côté de la barre horizontale
        const labelsDispo = ["Disponibles", "Non dispo."];
    
        // Données et personnalisation du graphique
        const dataDispo = {
            labels: labelsDispo,
            datasets: [{
                label: "Nombre de commentaires",
                data: [nbCommentairesDispo, nbCommentairesNonDispo],
                backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
            }],
        };
    
        // Objet de configuration final
        const configDispo = {
            type: "bar",
            data: dataDispo,
        };
        console.log(dataDispo);
        // Rendu du graphique dans l'élément canvas
        new Chart(
            document.querySelector("#graphique-dispo"),
            configDispo,
        );
    
    }
    
    
    
                data: [nbCommentairesDispo, nbCommentairesNonDispo],
                backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
            }],
        };
    
        // Objet de configuration final
        const configDispo = {
            type: "bar",
            data: dataDispo,
        };
        console.log(dataDispo);
        // Rendu du graphique dans l'élément canvas
        new Chart(
            document.querySelector("#graphique-dispo"),
            configDispo,
        );
    
    }
    
    
    

}



            data: [nbCommentairesDispo, nbCommentairesNonDispo],
            backgroundColor: "rgba(0, 230, 255, 1)", // turquoise
        }],
    };

    // Objet de configuration final
    const configDispo = {
        type: "bar",
        data: dataDispo,
    };
    console.log(dataDispo);
    // Rendu du graphique dans l'élément canvas
    new Chart(
        document.querySelector("#graphique-dispo"),
        configDispo,
    );

}


