// ##########################################################################################################
// ###########  OBJET DE FONCTIONS checkResponseStatus.js, DU MODULE, QUI VA FOURNIR LES MÉTHODES ###########
// ###########  QUI ASSURENT LA GESTION DES ERREURS DE FORMAT DU STATUT HTTP DE L'OBJET RESPONSE  ###########
// ###########  QUI EST LE CONTENU DE LA RÉPONSE HTTP (CODÉE) DE L'API SUITE À LA REQUÊTE FETCH() ###########
// ##########################################################################################################


// VÉRIFICATION DE LA VALIDITÉ DE L'OBJET RESPONSE ET DÉFINITION D'UN MESSAGE D'INFORMATION EN CAS D'ERREUR
export const checkResponseStatus = {
                   
    // On vérifie que le code de statut est bien un nombre
    checkStatusIsNumber: function(status) {
        if (typeof status !== 'number') {
            throw new Error('Le code de statut n\'est pas un nombre !');
        }
    },

    // On vérifie que le code de statut est bien compris entre 100 et 599
    checkStatusRange: function(status) {
        if (status < 100 || status > 599) {
            throw new Error('Le code de statut n\'est pas compris entre 100 et 599 !');
        }
    },

    // On vérifie que le message de statut est bien une chaîne de caractères
    checkStatusMessageIsString: function (statusText) {
        if (typeof statusText !== 'string') {
            throw new Error('Le message de statut n\'est pas une chaîne de caractères !');
        }
    },

    // On vérifie que le message de statut est bien compris entre 1 et 512 caractères
    checkStatusMessageRange: function(statusText) {
        if (statusText.length < 1 || statusText.length > 512) {
            throw new Error('Le message de statut n\'est pas compris entre 1 et 512 caractères !');
        }
    }
}
      