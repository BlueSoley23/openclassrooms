// ############################################################################################################
// ###########  OBJET DE FONCTIONS checkGlobalError.js, DU MODULE, QUI VA NOUS FOURNIR LES MÉTHODES ###########
// ###########  QUI ASSURENT LA GESTION DES AUTRES ERREURS ( RESAU, CODE SOURCE,... ) APRÈS AVOIR   ###########
// ###########  FAIT TOUTES LES AUTRES VÉRIFICATIONS DU LOGIN ( COMBINAISON, RÉPONSE DE L'API... )  ###########
// ############################################################################################################


// VÉRIFICATION DES ERREURS DE CODE OU DE RESAUX (TYPE, REFERENCE, PLAGE, SYNTAXE, URI, EVALUATION) ET DÉFINITION D'UN MESSAGE
export const checkGlobalError = {

    // On vérfie une éventuelle erreur de type
    checkTypeError: function(error) {
        if (error instanceof TypeError) {
            throw new Error('Erreur de type : ' + error.message);
        }
    },
        
    // On vérifie une éventuelle erreur de référence
    checkReferenceError: function(error) {
        if (error instanceof ReferenceError) {
            throw new Error('Erreur de référence : ' + error.message);
        } 
    },
    
    // On vérifie une éventuelle erreur de plage de valeurs
    checkRangeError: function(error) {
        if (error instanceof RangeError) {
            throw new Error('Erreur de plage : ' + error.message);
        } 
    },

    // On vérifie une éventuelle erreur de syntaxe
    checkSyntaxError: function(error) {
        if (error instanceof SyntaxError) {
            throw new Error('Erreur de syntaxe : ' + error.message);
        }
    },

    // On vérifie une éventuelle erreur d'URI c'est à dire une URL (par exemple : https://www.github.com) ou 
    // un URN (par exemple : urn:isbn:0-486-27557-4)                
    checkUrnError: function(error) {
        if (error instanceof URIError) {
            throw new Error('Erreur URI : ' + error.message);
        }
    }
} 

