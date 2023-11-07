// ##################################################################################
// ##############################   getWorks()   ############################### 
// #################   Récupération des travaux depuis l'API   #################
// ##################################################################################

    // Déclaration de la fonction asynchrone qui récupère les travaux depuis l'API
    export async function getWorks() {
        
        // Envoie une requête GET à l'API pour récupérer les données des travaux, et attend la réponse avant de continuer l'exécution du code grace à await
        return await fetch('http://localhost:5678/api/works')

            // Si la réponse est reçue, on la convertit en JSON et on la retourne
            .then(response => response.json())

            // Si la réponse n'est pas reçue, on affiche une boîte de dialogue avec le message d'erreur
            .catch(error => {
                alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
            });
    }



// ##################################################################################
// ##############################   printWorks()   ############################### 
// ###############   Affichage des travaux sur la page d'accueil   ###############
// ##################################################################################

    // Déclaration de la fonction asynchrone qui affiche les travaux sur la page d'accueil
    export async function printWorks(works) {

        // Récupération de l'élément du DOM qui contiendra les travaux
        const gallery = document.querySelector('.gallery');

        // Parcourt les données et affiche chaque travail dans la console
        for (let item of works) {

            // Création d'un élément HTML qui contiendra un travail
            const workElement = document.createElement('figure');

            // Création de chaque élément HTML <figure> correspondant à chaque travail avec son titre et son image
            workElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <figcaption>${item.title}</figcaption>
            `;

            // Rattache l'élément HTML dans le DOM (le projet est affiché dansla section .gallery)
            gallery.appendChild(workElement);
        }
    
    }



// ##################################################################################
// ##############################   getCategories()   ############################### 
// ##########   Affichage de boutons filtrant les travaux par catégories   ##########
// ##################################################################################

    // Déclaration de la fonction asynchrone qui récupère les catégories depuis l'API
    export async function getCategories() {

        // Appel de la fonction getWorks() pour récupérer les données des travaux
        const works = await getWorks();

        // Création d'un objet set qui permet de filtrer les doublons
        const categories = new Set();

        // Parcourt les données des travaux et récupère les catégories de chaque projet pour les ajouter dans l'objet set
        

    }
