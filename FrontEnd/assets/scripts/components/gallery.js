// #######################################################################################################
// ###########################################   getWorks()   ############################################
// ##############################   Récupération des travaux depuis l'API   ##############################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui récupère les travaux depuis l'API
    export async function getWorks() {

        // Envoie une requête GET à l'API pour récupérer les données des travaux, et attend la réponse avant
        // de continuer l'exécution du code grace à await 
        return await fetch('http://localhost:5678/api/works')

            // Si la réponse est reçue, on la convertit en JSON et on la retourne
            .then(response => response.json())

            // Si la réponse n'est pas reçue, on affiche une boîte de dialogue avec le message d'erreur
            .catch(error => {
                alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
            });

    }



// #######################################################################################################
// #########################################   printWorks()   ############################################
// ##########################   Affichage des travaux sur la page d'accueil   ############################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui affiche les travaux sur la page d'accueil
    export default function printWorks(works) {

        try {

            // Récupération de l'élément du DOM qui contiendra les travaux
            const gallery = document.querySelector('.gallery');

            // Parcourt les données et affiche chaque travail dans la console
            for (let item of works) {

                // Création d'un élément HTML qui contiendra un travail
                const workElement = document.createElement('figure');

                // Création de chaque élément HTML <figure> correspondant à chaque travail avec son titre
                // et son image 
                workElement.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <figcaption>${item.title}</figcaption>
                `;

                // Rattache l'élément HTML dans le DOM (le projet est affiché dansla section .gallery)
                gallery.appendChild(workElement);

            }

        } catch (error) {
            alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
        }
    }



// #######################################################################################################
// ########################################   getCategories()   ##########################################
// ##########################   Renvoie la liste des catégories sans doublons   ##########################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui récupère les catégories des travaux sans doublons
    export async function getCategories() {

        // Récupération des travaux depuis l'API
        let works = await getWorks();

        // Création d'un Set contenant les noms des catégories sans doublons
        const categories = new Set(works.map(work => work.category.name));

        // Conversion du Set en Array et retourne le résultat
        return Array.from(categories);
    }



// #######################################################################################################        
// ########################################   printCategories()   ########################################      
// ####################   Affiche des boutons filtrant les travaux par catégories   ######################        
// #######################################################################################################  

    // Déclaration de la fonction asynchrone qui affiche les boutons de filtrage par catégorie
    export async function printCategories() {

        // Récupération des catégories depuis l'API
        const categories = await getCategories();

        // Récupération de l'élément du DOM qui contiendra les boutons de filtrage
        const categoriesSection = document.querySelector('.categories');

        // Parcourt les catégories et crée un bouton pour chaque catégorie
        for (let category of categories) {

            // Création d'un élément HTML qui contiendra un bouton de filtrage
            const buttonElement = document.createElement('button');

            // Ajout du nom de la catégorie dans le texte du bouton
            buttonElement.innerHTML = `${category}`;

            // Rattache l'élément HTML dans le DOM (le bouton est affiché dans la section .categories)
            categoriesSection.appendChild(buttonElement);
        }
    }
