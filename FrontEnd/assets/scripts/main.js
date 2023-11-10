// Documentation Swagger : http://localhost:5678/api-docs/
// Page Front-end : http://127.0.0.1:5500/FrontEnd/

//Affichage des oeuvres sur la page d'accueil

    // Importation de la fonction getWorks déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import { getWorks } from './components/gallery.js';

    // Importation de la fonction printWorks déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import printWorks from './components/gallery.js';
        

    // Recupération et affichage des oeuvres avec l'appel des fonctions getWorks et printWorks
        getWorks().then(works => printWorks(works));
        


//Affichage des boutons de catégories sur la page d'accueil

    // Importation de la fonction getCategories déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import { getCategories } from './components/gallery.js';

    // Importation de la fonction getCategories déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import { printCategories } from './components/gallery.js';


    // Recupération et affichage des catégories avec l'appel de la fonction getCategories
        getCategories().then(categories => printCategories(categories));
    