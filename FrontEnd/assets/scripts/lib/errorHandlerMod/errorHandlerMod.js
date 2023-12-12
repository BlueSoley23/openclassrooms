// ##############################################################################################################
// ################################  Importation des objets contenant les méthodes  #############################
// ##############################################################################################################
/*                                                                                                             */


    import { checkLoginError } from './objects/checkLoginError.js';
    import { checkResponseStatus } from './objects/checkResponseStatus.js';
    import { checkResponseStatusExpected } from './objects/checkResponseStatusExpected.js';
    import { checkResponseStatusRange } from './objects/checkResponseStatusRange.js';
    import { checkResponseData } from './objects/checkResponseData.js';
    import { checkGlobalError } from './objects/checkGlobalError.js';




// ##############################################################################################################
// ############   Déclaration des fonctions appelant chaques méthodes, dans une fonction par objet, ############# 
// ################  pour être ensuite appelés dans la fonction principale checkErrorHandler()  #################
// ##############################################################################################################
/*                                                                                                             */


    function checkResponseStatusFunction(response) 
    {
        checkResponseStatus.checkStatusIsNumber(response.status);
        checkResponseStatus.checkStatusRange(response.status);
        checkResponseStatus.checkStatusMessageIsString(response.statusText);
        checkResponseStatus.checkStatusMessageRange(response.statusText);
    }

    function checkResponseStatusExpectedFunction(response) 
    {
        checkResponseStatusExpected.checkStatus400(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus401(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus403(response.status, response.statusText);
        checkResponseStatusExpected.checkStatusUserNotFound(response.status, response.statusText, response.message);
        checkResponseStatusExpected.checkStatus404(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus405(response.status, response.statusText);  
        checkResponseStatusExpected.checkStatus406(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus408(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus409(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus429(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus500(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus502(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus503(response.status, response.statusText);
        checkResponseStatusExpected.checkStatus505(response.status, response.statusText);
    }

    function checkResponseStatusRangeFunction(response, responseData) 
    {
        checkResponseStatusRange.checkSuccessResponseStatusRange(response.status, responseData.token);
        checkResponseStatusRange.checkClientSideFailureResponseStatusRange(response.status, response.statusText);
        checkResponseStatusRange.checkServerSideFailureResponseStatusRange(response.status, response.statusText);
    }

    function checkResponseDataFunction(responseData) 
    {
        checkResponseData.checkResponseDataIsObject(responseData);
        checkResponseData.checkResponseDataContainsToken(responseData);
        checkResponseData.checkTokenIsString(responseData.token);
        checkResponseData.checkTokenLength(responseData.token);
    }



// ##############################################################################################################
// ##############################################################################################################
// ########  DÉCLARATIONS DES FONCTIONS PRINCIPALES DE GESTION DES ERREURS DU MODULE errorHandlerMod.js  ########
// ##############################################################################################################
// ##############################################################################################################

                // AJOUTER UN MESSAGE PERSONNALISÉ SI L'ERREUR N'A PAS 
                // ÉTÉ DÉTECTÉE PAR LES MÉTHODES PRÉCÉDENTES
    //########################  PREMIÈRE FONCTION PRINCIPALE loginErrorHandler, QUI  ########################## 
    //########################  VA NOUS PERMETTRE DE GÉRER LES ERREURS DE CONNEXION  ##########################
    // Déclaration de l'une des trois fonctions de gestion des erreurs du module errorHandlerMod.js
    // Cette fonction va nous permettre de gérer les erreurs de connexion avant l'envoi de la requête à l'API
    //   (vérifications sur la combinaison email/mot de passe)
    // Si la fonction renvoie TRUE, cela signifie que la combinaison email/mot de passe est valide et que l'on peut envoyer la requête
    // Si la combinaison email/mot de passe n'est pas valide et que l'on ne peut pas envoyer la requête, une erreur est définie avec 
    //   throw new Error() pour permettre l'affichage d'une alerte avec les informations définies dans l'objet error, avec la fonction 
    //   printErrorHandler() dans le bloc catch
    /*                                                                                                                                  */


        export function loginErrorHandler(email, password) 
        {
                checkLoginError.checkConnection();
                checkLoginError.regexCheckEmpty(email, password);
                checkLoginError.checkEmailLength(email);
                checkLoginError.regexCheckFormat(email, password);
                checkLoginError.attemptsNumberCheck();
                checkLoginError.validateLogin();        
        }




    //########################  DEUXIÈME FONCTION PRINCIPALE checkErrorHandler, QUI  ##########################
    //########################  VA NOUS PERMETTRE DE GÉRER LES ERREURS DE CONNEXION  ##########################
    // Déclaration de l'une des trois fonctions de gestion des erreurs du module errorHandlerMod.js
    // Cette fonction va nous permettre de gérer les erreurs de connexion (erreurs HTTP) après l'envoi de la requête à l'API
    //  (vérifications sur le code de statut), ainsi que les erreurs de code ou de résaux (type, référence, plage, syntaxe, URI, évaluation)
    //  elle prend en paramètre l'objet response, une réponse HTTP qui contient les informations relatives à la requête (code de statut,
    //  message de statut, corps de la réponse) et l'objet responseData qui contient le corps de la réponse décodée au format JSON
    /*                                                                                                                                  */


        export function checkErrorHandler(response, responseData) 
        {
            checkResponseStatusFunction(response);
            checkResponseStatusExpectedFunction(response);
            checkResponseStatusRangeFunction(response, responseData);
            checkResponseDataFunction(responseData);
        }




    //########################  TROISIÈME FONCTION PRINCIPALE printErrorHandler, QUI ##########################
    //########################   VA NOUS PERMETTRE D'AFFICHER UN MESSAGE D'ERREUR    ##########################
    // Déclaration de l'une des trois fonctions de gestion des erreurs du module errorHandlerMod.js
    // Cette fonction va nous permettre d'afficher un message d'erreur personnalisé en fonction du type d'erreur détectée
    //  elle prend en paramètre l'objet error, une erreur qui contient les informations relatives à l'erreur (type, message)
    //  et qui a été définie dans la fonction checkErrorHandler() avec throw new Error() pour permettre l'affichage d'une alerte
    //  avec les informations définies dans l'objet error, avec la fonction printErrorHandler() dans le bloc catch


        export function printErrorHandler(error) 
        {

        
                alert(error.message);
             if (error instanceof TypeError) {
                checkGlobalError.checkTypeError(error);
            } else if (error instanceof ReferenceError) {
                checkGlobalError.checkReferenceError(error);
            } else if (error instanceof RangeError) {
                checkGlobalError.checkRangeError(error);
            } else if (error instanceof SyntaxError) {
                checkGlobalError.checkSyntaxError(error);
            } else if (error instanceof URIError) {
                checkGlobalError.checkUrnError(error);
            } else {
                // AJOUTER UN MESSAGE PERSONNALISÉ SI L'ERREUR N'A PAS 
                // ÉTÉ DÉTECTÉE PAR LES MÉTHODES PRÉCÉDENTES
                
                alert("Une erreur inattendue s'est produite :", error);
            }
        }