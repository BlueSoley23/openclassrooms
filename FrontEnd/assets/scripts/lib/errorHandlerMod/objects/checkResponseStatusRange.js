// ###########################################################################################################
// ###########  OBJET DE FONCTIONS checkResponseStatusRange DU MODULE, QUI VA FOURNIR LES MÉTHODES ###########
// ###########  QUI ASSURENT LA GESTION DES ERREURS DE PLAGES DU STATUT HTTP DE L'OBJET RESPONSE  ###########
// ###########  QUI EST LE CONTENU DE LA RÉPONSE HTTP (CODÉE) DE L'API SUITE À LA REQUÊTE FETCH() ###########
// ##########################################################################################################



// VÉRIFICATION DES PLAGES DE STATUT ET DÉFINITION D'UN MESSAGE DÉTAILLANT LES INFORMATIONS EN CAS D'ERREUR 
//   SINON, SI LA REQUÊTE A ÉTÉ EFFECTUÉE AVEC SUCCÈS, ON STOCKE LE TOKEN DANS LE LOCALSTORAGE ET ON RETOURNE TRUE 
//   POUR SIGNIFIER QUE L'UTILISATEUR EST CONNECTÉ ET QUE L'ON PEUT LE REDIRIGER VERS LA PAGE D'ACCUEIL
export const checkResponseStatusRange = {    

    // On vérifie que le code de statut est bien compris entre 200 et 299 (succès de la requête)
    checkSuccessResponseStatusRange: function(status, token) {
        if (status >= 200 && status <= 299) {
            // On stocke le token dans le localStorage
            localStorage.setItem('token', token);
            return true;
        }
    },

    // On vérifie que le code de statut est bien compris entre 400 et 499 (erreur de la requête côté client)
    checkClientSideFailureResponseStatusRange: function(status, statusText) {
        if (status >= 400 && status <= 499) {
            throw new Error('Erreur de la requête côté client : ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est bien compris entre 500 et 599 (erreur de la requête côté serveur)
    checkServerSideFailureResponseStatusRange: function(status, statusText) {
        if (status >= 500 && status <= 599) {
            throw new Error('Erreur de la requête côté serveur : ' + status + ' ' + statusText);
        }
    }
}