// #################################################################################################################
// #####################   Importation des modules JS contenant les fonctions utilisées  ###########################
// #################################################################################################################

    // Importation des fonctions déclarées dans le fichier gallery.js
    import { getWorks, printWorks, getCategories, printCategories, sortByCategories } from './components/gallery.js';

    // Importation des fonctions déclarées dans le fichier login .js
    // import { functionLogin } from './components/login.js';


// Si la page actuelle est la page d'accueil
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('FrontEnd/')) {

    // #################################################################################################################
    // ##################################   Fonctions relatives à la gallerie   ########################################
    // #################################################################################################################

        // ############################   Affichage des oeuvres sur la page d'accueil   ##########################

            // Recupération et affichage des oeuvres avec l'appel des fonctions getWorks et printWorks
            getWorks().then(works => printWorks(works));


        // ####################   Affichage des boutons de catégories sur la page d'accueil   ####################

            // Recupération et affichage des catégories avec l'appel de la fonction getCategories
            getCategories().then(categories => printCategories(categories));


        // ###################   Filtre des oeuvres par catégories sur la page d'accueil   #######################

            // Filtre des oeuvres par catégories avec l'appel de la fonction sortByCategories
            sortByCategories();

            
} 

// Si la page actuelle est la page de login
else if (window.location.pathname.endsWith('login.html')) {

    // #################################################################################################################
    // ########################################   Fonctions relatives au login   #######################################
    // #################################################################################################################

        // ############################                       ...                       ##########################

            // Fonctions relatives au login
            // functionLogin();

            
}

// Si la page actuelle est la page de contact
else if (window.location.pathname.endsWith('contact.html')) {

    // #################################################################################################################
    // ########################################   Fonctions relatives au contact   #####################################
    // #################################################################################################################

        // ############################                       ...                       ##########################

            // Fonctions relatives au contact
            // functionContact();

            
}

//