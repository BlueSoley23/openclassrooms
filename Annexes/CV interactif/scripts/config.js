//Partie 4 : Lettres de motivation.

  // Déclaration de la fonction permettant de changer le texte dans
  // l'élément HTML avec la classe lettreDeMotivation au click des boutons
  function lettreDeMotivation(identifiant, lettre) {
      // On récupère l'élément bouton HTML sélectionné.
      let bouton = document.querySelector(identifiant);
      // On récupère l'élément cible HTML avec la classe lettreDeMotivation.
      let elementCible = document.querySelector('.lettreDeMotivation');
    
      // Ajout d'un événement de click sur le bouton HTML sélectionné
      bouton.addEventListener("click", function () {
              // On remplace le contenu HTML de l'élément cible par la lettre passée en paramètre.
              elementCible.innerHTML = lettre;
        });
      }

      