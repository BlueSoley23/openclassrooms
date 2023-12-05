// #######################################################################################################
// #######################################################################################################
// ########################   DECLARATION DES FONCTIONS ET CONSTANTES DU LOGIN   #########################
// #######################################################################################################
// #######################################################################################################


    export function checkLogin() {
        
        // Sélectionnez le formulaire de connexion
        const loginForm = document.querySelector('.login__form');

        // Ajoutez un gestionnaire d'événements pour le formulaire de connexion
        loginForm.addEventListener('submit', function(event) {
            // Empêchez le formulaire d'être soumis normalement
            event.preventDefault();

            // Récupérez les valeurs des champs du formulaire
            const username = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            // Créez l'objet de données à envoyer à l'API
            const data = {
                email: username,
                password: password
            };

            // Envoyez une requête POST à l'API
            fetch('http://localhost:5678/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    // Stockez le token dans le localStorage
                    localStorage.setItem('token', data.token);

                    // Redirigez l'utilisateur vers la page d'accueil
                    window.location.href = './index.html';
                    
                } else if (data.error) {
                    // Affichez le message d'erreur
                    const errorMessage = document.querySelector('#error-message');
                    errorMessage.textContent = data.error;
                    errorMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }



/*                                                                                                      */
// #######################################################################################################
// #######################################################################################################
// #################################   EXECUTION DES FONCTIONS DU LOGIN  #################################
// #######################################################################################################
// #######################################################################################################


    // Exectution de la fonction checkLogin(), qui permet de vérifier les informations de connexion et 
    // de rediriger l'utilisateur vers la page d'accueil ou d'afficher un message d'erreur
    checkLogin();
