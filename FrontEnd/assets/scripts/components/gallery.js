// #######################################################################################################
// ###########################################   getWorks()   ############################################
// ##############################   Récupération des travaux depuis l'API   ##############################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui récupère les travaux depuis l'API
    export async function getWorks() 
    {

        // Envoie une requête GET à l'API pour récupérer les données des travaux, et attend la réponse avant
        // de continuer l'exécution du code grace à await 
        return await fetch('http://localhost:5678/api/works')

        // Si la réponse est reçue, on la convertit en JSON et on la retourne
        .then(response => response.json())

        // Si la réponse n'est pas reçue, on affiche une boîte de dialogue avec le message d'erreur
        .catch(error => 
            {
                alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
            }
        );
    }




// #######################################################################################################
// #########################################   printWorks()   ############################################
// ##########################   Affichage des travaux sur la page d'accueil   ############################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui affiche les travaux sur la page d'accueil
    export async function printWorks(works) 
    {

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
        } 
        
        // Si une erreur est survenue, on affiche une boîte de dialogue avec le message d'erreur
        catch (error) 
        {
            alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
        }
    }




// #######################################################################################################
// ########################################   getCategories()   ##########################################
// ##########################   Renvoie la liste des catégories sans doublons   ##########################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui récupère les catégories des travaux sans doublons
    export async function getCategories() 
    {

        try {
            // Récupération des travaux depuis l'API
            let works = await getWorks();

            // Création d'un Set contenant les noms des catégories sans doublons
            const categories = new Set(works.map(work => work.category.name));

            // Conversion du Set en tableau
            let categoriesArray = Array.from(categories);

            // Ajoute "Tous" au début du tableau
            categoriesArray.unshift("Tous"); 

            // Retourne le tableau des catégories
            return categoriesArray;

        }
        
        // Si une erreur est survenue, on affiche une boîte de dialogue avec le message d'erreur
        catch (error) 
        {
            alert('Veuillez contacter votre administrateur système en lui indiquant ce message d\'erreur :\n\n' + error);
        }
    }




// #######################################################################################################        
// ########################################   printCategories()   ########################################      
// ####################   Affiche des boutons filtrant les travaux par catégories   ######################        
// #######################################################################################################  

    // Déclaration de la fonction asynchrone qui affiche les boutons de filtrage par catégorie
    export async function printCategories() 
    {

        // Récupération des catégories depuis l'API
        const categories = await getCategories();

        // Récupération de l'élément du DOM qui contiendra les boutons de filtrage
        const categoriesSection = document.querySelector('.categories');

        // Parcourt les catégories et crée un bouton pour chaque catégorie
        for (let category of categories) 
        {

            // Création d'un élément HTML qui contiendra un bouton
            const buttonElement = document.createElement('button');

            // Ajout de la classe 'category-button' au bouton
            buttonElement.innerHTML = `${category}`;

            // Si la catégorie est 'Tous', on ajoute la classe 'tous-button' au bouton
            if (category === 'Tous') 
            {
                buttonElement.classList.add('tous-button'); // Ajoute la classe 'tous-button' au bouton 'Tous'
            }

            // On intègre les boutons dans la section .categories
            categoriesSection.appendChild(buttonElement);
        }
    }




// #######################################################################################################
// ########################################   sortByCategories()   #######################################
// ####################   Affiche les travaux correspondant à la catégorie choisie   #####################
// #######################################################################################################

    // Déclaration de la fonction asynchrone qui affiche les travaux correspondant à la catégorie choisie
    export async function sortByCategories()
    {
        // Récupération de l'élément du DOM qui contiendra les boutons de filtrage
        const categoriesSection = document.querySelector('.categories');

        // Récupération de l'élément du DOM qui contiendra les travaux
        const gallery = document.querySelector('.gallery');

        // Configuration de l'EventListener sur la section .categories
        categoriesSection.addEventListener('click', function(event) {

            // Si l'élément cliqué est un bouton
            if (event.target.tagName === 'BUTTON') 
            {
                // Si le bouton cliqué est le bouton 'Tous', on affiche tous les travaux
                if (event.target.classList.contains('tous-button')) 
                {
                    // On vide la section .gallery
                    gallery.innerHTML = '';

                    // On récupère puis on affiche tous les travaux
                    getWorks().then(works => printWorks(works));
                }

                // Sinon, si le bouton cliqué est un bouton de catégorie, on affiche les travaux correspondant
                // à la catégorie choisie
                else 
                {
                    // Fonction qui permet de décoder les caractères spéciaux HTML
                    function decodeHtml(html) 
                    {
                        // Création d'un élément HTML qui contiendra le texte à décoder
                        var txt = document.createElement("textarea");

                        // Ajout du texte à décoder dans l'élément HTML
                        txt.innerHTML = html;

                        // Retourne le texte décodé
                        return txt.value;
                    }
                    
                    // On récupère le nom de la catégorie choisie
                    let category = event.target.innerHTML;

                    // On décode le nom de la catégorie choisie pour s'assurer que les caractères spéciaux sont
                    // bien traités
                    category = decodeHtml(category);

                    // On vide la section .gallery
                    gallery.innerHTML = '';

                    // On récupère puis on affiche les travaux correspondant à la catégorie choisie
                    getWorks().then(works => printWorks(works.filter(work => work.category.name === category)));
                }
            }
        });
    }