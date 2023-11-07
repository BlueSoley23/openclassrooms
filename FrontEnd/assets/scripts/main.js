// Documentation Swagger : http://localhost:5678/api-docs/
// Page Front-end : http://127.0.0.1:5500/FrontEnd/

//Affichage des oeuvres sur la page d'accueil

    // Importation de la fonction getWorks déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import { getWorks } from './components/gallery.js';

    // Importation de la fonction printWorks déclarée dans le fichier FrontEnd/assets/scripts/components/gallery.js
        import { printWorks } from './components/gallery.js';
        


    // Recupération et affichage des oeuvres avec l'appel des fonctions getWorks et printWorks
        getWorks().then(works => printWorks(works));
        