// ##########################################################################################################
// ###########  OBJET DE FONCTIONS checkResponseStatuseXCEPTED, DU MODULE, QUI VA FOURNIR LES MÉTHODES ###########
// ###########  QUI ASSURENT LA GESTION DES ERREURS DE VALEUR DU STATUT HTTP DE L'OBJET RESPONSE  ###########
// ###########  QUI EST LE CONTENU DE LA RÉPONSE HTTP (CODÉE) DE L'API SUITE À LA REQUÊTE FETCH() ###########
// ##########################################################################################################


// VÉRIFICATION DE STATUTS PRÉVUS ET DÉFINITION D'UN MESSAGE DÉTAILLANT LES INFORMATIONS EN CAS D'ERREUR 
//   SINON, SI LA REQUÊTE A ÉTÉ EFFECTUÉE AVEC SUCCÈS, ON STOCKE LE TOKEN DANS LE LOCALSTORAGE ET ON RETOURNE TRUE 
//   POUR SIGNIFIER QUE L'UTILISATEUR EST CONNECTÉ ET QUE L'ON PEUT LE REDIRIGER VERS LA PAGE D'ACCUEIL
export const checkResponseStatusExpected = {

    // On vérifie que le code de statut est égal à 400 (erreur de la requête côté client)
    checkStatus400: function(status, statusText) {
        if (status === 400) {
            throw new Error('Erreur de la requête côté client : La requête était incorrecte ou mal formée. '  + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 401 (erreur de la requête côté client)
    checkStatus401: function(status, statusText) {
        if (status === 401) {
            throw new Error('Erreur de la requête côté client : L\'utilisateur doit s\'authentifier pour obtenir la réponse demandée. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 403 (erreur de la requête côté client)
    checkStatus403: function(status, statusText) {
        if (status === 403) {
            throw new Error('Erreur de la requête côté client : Le serveur a compris la requête, mais refuse de l\'exécuter. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 404 (erreur de la requête côté client)
    checkStatusUserNotFound: function(status, statusText, message) {
        if (status === 404 && message === 'user not found !')
        throw new Error('Erreur de la requête côté client : ' + status + ' ' + statusText);
    },

    // On vérifie que le code de statut est égal à 404 (erreur de la requête côté client, page introuvable)
    checkStatus404: function(status, statusText) {
        if (status === 404) {
            throw new Error('Erreur de la requête côté client : La ressource demandée n\'a pas été trouvée. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 405 (erreur de la requête côté client)
    checkStatus405: function(status, statusText) {
        if (status === 405) {
            throw new Error('Erreur de la requête côté client : ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 406 (erreur de la requête côté client)
    checkStatus406: function(status, statusText) {
        if (status === 406) {
            throw new Error('Erreur de la requête côté client : La méthode de requête est connue par le serveur mais a été désactivée et ne peut pas être utilisée ' + status + ' ' + statusText);
        }
    },
    
    // On vérifie que le code de statut est égal à 408 (erreur de la requête côté client)
    checkStatus408: function(status, statusText) {
        if (status === 408) {
            throw new Error('Erreur de la requête côté client :  Le serveur a attendu trop longtemps la requête du client. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 409 (erreur de la requête côté client)
    checkStatus409: function(status, statusText) {
        if (status === 409) {
            throw new Error('Erreur de la requête côté client : La requête ne peut être complétée en raison d\'un conflit dans l\'état actuel de la ressource ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 429 (erreur de la requête côté client)
    checkStatus429: function(status, statusText) {
        if (status === 429) {
            throw new Error('Erreur de la requête côté client : Le client a envoyé trop de requêtes dans un certain laps de temps. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 500 (erreur de la requête côté serveur)
    checkStatus500: function(status, statusText) {
        if (status === 500) {
            throw new Error('Erreur de la requête côté serveur : Une erreur inattendue s\'est produite sur le serveur. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 503 (erreur de la requête côté serveur)
    checkStatus502: function(status, statusText) {
        if (status === 502) {
            throw new Error('Erreur de la requête côté serveur : Le serveur a reçu une réponse invalide d\'un serveur en amont. ' + status + ' ' + statusText);
        }
    },

    // On vérifie que le code de statut est égal à 504 (erreur de la requête côté serveur)  
    checkStatus503: function(status, statusText) {
        if (status === 503) {
            throw new Error('Erreur de la requête côté serveur :  Le serveur n\'est pas prêt à traiter la requête.' + status + ' ' + statusText);
        }
    },    

    // On vérifie que le code de statut est égal à 505 (erreur de la requête côté serveur)
    checkStatus505: function(status, statusText) {
        if (status === 505) {
            throw new Error('Erreur de la requête côté serveur :  Le serveur ne prend pas en charge la version du protocole HTTP utilisée dans la requête.' + status + ' ' + statusText);
        }
    }
}
