/*
// Importation de la fonction getAndPrintWorks déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
import { getAndPrintWorks } from './components/gallery.js';

// Recupération et affichage des oeuvres avec l'appel de la fonction getAndPrintWorks
    getAndPrintWorks();
*/

async function getAndPrintWorks() {
    try {
        // Récupération de l'élément du DOM qui contiendra les oeuvres
        const gallery = document.querySelector('.gallery');

        // Envoie une requête GET à l'API pour récupérer les données des oeuvres
        const response = await fetch('http://localhost:5678/api/works');
        const data = await response.json();

        // Parcourt les données et affiche chaque oeuvre dans la console
        for (let item of data) {
            // Création d'un élément HTML qui contiendra une oeuvre
            const workElement = document.createElement('figure');

            // Création de chaque élément HTML <figure> correspondant à chaque oeuvre avec son titre et son image
            workElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <figcaption>${item.title}</figcaption>
            `;

            // Ajoute l'élément HTML dans le DOM
            gallery.appendChild(workElement);
        }
    } 
    
    // Retourne le message d'erreur potentiel
    catch (error) {
        // Affiche le message d'erreur potentiel dans une boîte de dialogue
        alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
        }
}

// Appel de la fonction getAndPrintWorks
getAndPrintWorks();