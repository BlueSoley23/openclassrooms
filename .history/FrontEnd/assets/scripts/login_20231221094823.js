// ####################################################################################################
// ####################################################################################################
// ########################   IMPORTATION DES FONCTIONS PRINCIPALES CONTENANT  ########################
// ########################     LES MÉTHODES DU MODULE errorHandlerMod.js      ########################
// ####################################################################################################
// ####################################################################################################







        // Sélectionne le formulaire de connexion dans login.html
        const loginForm = document.querySelector('.login__form');

        // Ajoutez un gestionnaire d'événements pour le formulaire de connexion, sur le bouton d'envoi
        loginForm.addEventListener('submit', async function(event) {

            // Empêchez le formulaire d'être soumis normalement
            event.preventDefault();

            // Récupérez les valeurs des champs du formulaire
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value
            
            // Créez l'objet de données à envoyer à l'API
            const data = {
                email: email,
                password: password
            };

            // Déclaration de la variable response qui contiendra la réponse de l'API, en dehors du bloc try
            // afin de pouvoir l'utiliser dans le bloc catch
            let response;

            try 
            {

                // Vérification des erreurs de connexion avant l'envoi de la requête à l'API avec la fonction loginErrorHandler()
                //loginErrorHandler(data.email, data.password);


                // Envoi de la requête POST à l'API avec la combinaison saisie dans le formulaire, stockée dans la constante data
                // et décodée en JSON avec la méthode JSON.stringify()
                response = await fetch('http://localhost:5678/api/users/login', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                
                // On vérifie si l'API renvoie une erreur de satut 401 (mot de passe incorrect)
                if (response.status === 401) {
                    throw new Error('Mot de passe incorrect !');
                }
                
                // On vérifie si l'API renvoie une erreur de statut 404 avec la valeur "user not found" dans l'attribut message (utilisateur introuvable)
                else if (response.status === 404 && response.message === 'user not found') {
                    console.log(response.message);
                    throw new Error('Utilisateur introuvable !');
                }

                else if (!response.ok) {
                    throw new Error(`Erreur du serveur : ${response.status}`);
                }
                
                // Stockage et décodage JSON de la réponse de l'API dans la constante responseData
                const responseData = await response.json(); 

                // Stockage du token de connexion dans le localStorage
                localStorage.setItem('token', responseData.token);

                // Vérification des erreurs de connexion après l'envoi de la requête à l'API avec la fonction checkErrorHandler()
                //checkErrorHandler(response, responseData);

                // Si aucune erreur n'est détectée, on redirige l'utilisateur vers la page d'accueil des utilisateurs connectés
                window.location.href = '../FrontEnd/index.html';
                }

            
            
            // Si une erreur est attrapée, une erreur imprévue (erreur 404 de page introvable, erreur 500 de serveur, etc.),  
            // on affiche un message d'erreur avec les informations définies dans le bloc try
            catch (error) 
            {
                alert(error);
            }
        });
    





