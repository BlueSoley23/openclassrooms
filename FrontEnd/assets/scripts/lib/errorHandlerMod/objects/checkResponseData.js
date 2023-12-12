// ########################################################################################################
// ###########  OBJET DE FONCTIONS checkResponseData.js, DU MODULE, QUI VA FOURNIR LES MÉTHODES ###########
// ###########  QUI ASSURENT LA GESTION DES ERREURS DE FORMAT DE L'OBJET responseData, QUI EST  ###########
// ###########  L'OBJET RESPONSE DÉCODÉ ET VÉRIFIE QUE LE TOKEN EST PRÉSENT ET AU FORMAT VALIDE ###########
// ########################################################################################################


// VÉRIFICATION DE LA VALIDITÉ DE L'OBJET RESPONSEDATA ET DÉFINITION D'UN MESSAGE D'INFORMATION EN CAS D'ERREUR
export const checkResponseData = {    

    // On vérifie que l'objet responseData est bien un objet
    checkResponseDataIsObject: function(data) {
        if (typeof data !== 'object') {
            throw new Error('Le corps de la réponse n\'est pas un objet !');
        }
    },

    // On vérifie que l'objet responseData contient bien une propriété token
    checkResponseDataContainsToken: function(data) {
        if (!data.hasOwnProperty('token')) {
            throw new Error('Le corps de la réponse ne contient pas de propriété token !');
        }
    },

    // On vérifie que la propriété token de l'objet responseData est bien une chaîne de caractères
    checkTokenIsString: function(token) {
        if (typeof token !== 'string') {
            throw new Error('La propriété token n\'est pas une chaîne de caractères !');
        }
    },

    // On vérifie que la propriété token de l'objet responseData est bien une chaîne de caractères de 172 caractères
    checkTokenLength: function(token) {
        if (token.length < 171) {
            throw new Error('La propriété token n\'est pas une chaîne de caractères de 172 caractères !');
        }
    }
}
