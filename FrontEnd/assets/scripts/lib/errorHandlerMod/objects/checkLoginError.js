// ################################################################################################
// ###########  OBJET DE FONCTIONS checkLoginError DU MODULE, FOURNISSANT LES MÉTHODES  ###########
// ###########  QUI ASSURENT LA GESTION DES ERREURS DANS LA COMBINAISON EMAIL/PASSWORD  ###########
// ###########  DU FORMULAIRE DE CONNEXION AVANT SON ENVOI DANS UNE REQUÊTE POUR L'API  ###########
// ################################################################################################



// On anticipe les erreurs en verifiant que les champs ne sont pas vides, ou que l'adresse email est au bon format
// Déclaration des constantes contenant les regex pour vérifier les champs
const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*(\d|[@$!%*?&]))[A-Za-z\d@$!%*?&]{6,}$/;
const emptyRegex = /^\s*$/;
// constante pour activer kle mode debug, à déplacer dans le fichier de configuration
const debugMode = true;

// Déclaration de l'objet de fonctions loginError


export const checkLoginError = {

    // On vérifie si l'utilisateur est connecté à internet
    checkConnection: function() {
        if (!navigator.onLine) {
            throw new Error('Vérifiez votre connexion internet !');
        }
    }, 

    // On vérifie que les champs ne sont pas vides
    regexCheckEmpty: function (email, password) {
        if (emptyRegex.test(email) || emptyRegex.test(password)) {
            throw new Error('Veuillez remplir tous les champs !');
        }
    },

    // On vérifie que l'email a une longueur minimale de 10 caractères
    checkEmailLength: function (email) {
        if (email.length < 10) {
            throw new Error('Veuillez entrer une adresse email d\'au moins 10 caractères !');
        }
    },

    // Vérification du format de l'email et du mot de passe : 
    // Définir une erreur si l'email n'est pas au bon format ou si le mot de passe n'est pas au bon format, a savoir :
    //   au moins 6 caractères, une majuscule, une minuscule, un chiffre ou un caractère spécial
    regexCheckFormat: function (email, password) {
        if (!emailRegex.test(email) || !passwordRegex.test(password)) {
            throw new Error('Veuillez entrer une adresse email valide et un mot de passe valide ! \n' 
            + 'Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre ou un caractère spécial.');
        }
    },

    // Limitation du nombre de tentatives à 5 toutes les 6 heures
    // Si le mode debug est activé, on ignore cette condition
    attemptsNumberCheck: function () {
            if (!debugMode) {
            // On récupère les données de l'objet JSON, loginAttempts dans le localStorage, on le décode puis on le stocke dans la variable 
            //   loginAttempts mais si loginAttempts n'existe pas (est égal à NULL), on crée un objet JSON vide
            let loginAttempts = JSON.parse(localStorage.getItem('loginAttempts')) || { count: 0, timestamp: Date.now() };

            // Si le timestamp est inférieur à 6 heures (6 * 60 * 60 * 1000 = 6 heures en millisecondes,
            //  donc si moins de 6 heures se sont écoulées )                
            if (Date.now() - loginAttempts.timestamp < 6 * 60 * 60 * 1000) 
            {
                // Si l'utilisateur a déjà tenté de se connecter 5 fois ou plus
                if (loginAttempts.count >= 5) { 
                    // On récupère le timestamp actuel
                    const timestamp = Date.now();

                    // On calcule le nombre de millisecondes restantes avant de pouvoir se reconnecter
                    const remainingMilliseconds = 6 * 60 * 60 * 1000 - (timestamp - loginAttempts.timestamp);

                    // On calcule le nombre d'heures restantes avant de pouvoir se reconnecter
                    const remainingHours = Math.floor(remainingMilliseconds / 3600000);

                    // On calcule le nombre de minutes restantes avant de pouvoir se reconnecter
                    const remainingMinutes = Math.floor((remainingMilliseconds % 3600000) / 60000);

                    // On calcule le nombre de secondes restantes avant de pouvoir se reconnecter
                    const remainingSeconds = Math.floor(((remainingMilliseconds % 3600000) % 60000) / 1000);

                    // On définit un message d'erreur indiquant à l'utilisateur qu'il doit attendre avant de pouvoir se reconnecter
                    throw new Error('Vous avez atteint le nombre maximal de tentatives de connexion ! \n' 
                    + 'Veuillez patienter ' + remainingHours + ' heures, ' + remainingMinutes + ' minutes et ' + remainingSeconds + 
                    ' secondes avant de pouvoir vous reconnecter.');
                } 

                // Sinon on incrémente le compteur de tentatives de connexion et on stocke les données dans le localStorage
                else {
                    loginAttempts.count++;
                    localStorage.setItem('loginAttempts', JSON.stringify(loginAttempts));
                    return;
                }
            } 

            // Sinon, si le timestamp est supérieur à 6 heures (si 6 heures ou plus se sont écoulées)on réinitialise le compteur en 
            // passant la constante loginAttempts à 1 et on l'encode en JSON pour pouvoir la stocker dans le localStorage
            else {
                loginAttempts = { count: 1, timestamp: Date.now() };
                localStorage.setItem('loginAttempts', JSON.stringify(loginAttempts));
                return;
            }
        } 
    },

    // Sinon, si aucunes erreurs n'a été détectée, on retourne TRUE pour signifier que la combinaison email/mdp est valide
    // pour l'envoyer à l'API (on est prêt pour la requête)
    validateLogin: function () {
        return true;
    }
};