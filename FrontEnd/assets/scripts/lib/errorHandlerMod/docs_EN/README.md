```    
  #####################################################################################
  #####     NB:                                                                   #####
  #####  CE FICHIER S'INSCRIT DANS LE CADRE DU PROJET PERSONNEL DE DÉVELOPPEMENT  #####
  #####  ET DE PORTAGE DE MON MODULE errorHandlerMod.js. IL N'EST SONT DONC PAS À #####
  #####  PRENDRE EN COMPTE DANS LE PROJET P3 - PORTFOLIO SOPHIE BLUEL CAR CE      #####
  #####  PROJET PERSONNEL N'EST PAS D'ACTUALITÉ, IL EST EN DÉVELOPPEMENT (MIS EN  #####
  #####  PAUSE POUR LE BIEN DE MA FORMATION) AINSI QUE LA TRADUCTION DE SA        #####
  #####  DOCUMENTATION QUI ELLE MÊME, COMME LE MODULE, RESTENT ENCORE EN          #####
  #####  DÉVELOPPEMENT. LE MODULE EST FONCTIONNEL UNIQUEMENT POUR LE PROJET DE    #####
  #####  FORMATION ET L'API CORRESPONDANTE. IL EST ACTUELLEMENT À VALIDER.        #####
  #####  PLANIFIÉ POUR LA FIN DE MA FORMATION.                                    #####
  #####  JE VOUS PRIE DE NE PAS TENIR COMPTE DE CE FICHIER SVP ! MERCI ...        ##### 
  #####################################################################################
```

``` Bases du MarkDown :
    Le Markdown est un langage de balisage léger qui vous permet d'écrire en utilisant un format de texte facile à lire et à écrire. Voici quelques bases :

    Titres : Vous pouvez créer un titre en utilisant le symbole #. Plus il y a de symboles #, plus le titre est petit. Par exemple :
    Listes : Vous pouvez créer des listes à puces en utilisant le symbole - ou *, et des listes numérotées en utilisant 1., 2., etc. Par exemple :
    Liens : Vous pouvez créer un lien en utilisant la syntaxe [texte du lien](URL). Par exemple :
    Images : Vous pouvez insérer une image en utilisant la syntaxe ![texte alternatif](URL). Par exemple :
    Code : Vous pouvez insérer du code en utilisant les backticks. Utilisez un seul backtick pour du code inline code et trois pour un bloc de code :
    bloc de code

    Gras et italique : Vous pouvez mettre du texte en gras en utilisant deux astérisques ou deux underscores **gras** ou __gras__, et en italique en utilisant un astérisque ou un underscore *italique* ou _italique_.

    Les balises <style> ne sont généralement pas supportées dans le Markdown pour des raisons de sécurité. Cependant, vous pouvez utiliser certaines balises HTML de base dans le Markdown, comme <b> pour le texte en gras, <i> pour le texte en italique, et <img> pour insérer des images. Pour le style spécifique, comme le changement de couleur du texte ou l'ajout de bordures, vous devrez utiliser un autre moyen, comme un fichier CSS séparé, si vous travaillez sur une page web.

    En Markdown pur, il n'y a pas de syntaxe intégrée pour redimensionner les images. Cependant, comme Markdown supporte l'HTML brut, vous pouvez utiliser la balise <img> pour insérer une image et définir sa taille. Voici comment :
    ```HTML
    <img src="url_de_votre_image" width="100" height="100">
    ```
    Dans cet exemple, url_de_votre_image est l'URL de l'image que vous voulez insérer, et width="100" et height="100" définissent la largeur et la hauteur de l'image en pixels. Vous pouvez ajuster ces valeurs en fonction de vos besoins.
```

``` README en MarkDown à éditer...
    ![JavaScript Logo](https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png)

    # ErrorHandler Module

    This module, written in JavaScript and intended to be used in Node.js environments, provides functions to handle common JavaScript errors.

    ## Table of Contents

    - [Functions](#functions)
    - [Usage](#usage)
    - [Installation](#installation)
    - [Contribution](#contribution)
    - [License](#license)

    ## Functions

    The ErrorHandler module includes the following functions:

    ### loginErrorHandler()

    This function handles errors related to login.

    ### httpErrorHandler()

    This function handles HTTP errors.

    ### defaultErrorHandler()

    This function handles all other errors.

    ## Usage

    Here is an example of how to use this module:

    ```javascript
    addEventListener(submit, function() {
        // ...
        loginErrorHandler();
        // ...

        try { 
            fetch(...)
            httpErrorHandler();
            // ...
        } catch(error) {
            defaultErrorHandler();
        }
    });
```

``` Licence (version EN) / à intégrer dans le README (pour plus de simplicité dans l'arborescence)
    MIT License

    Copyright (c) [2023] [BlueSoley23 / Antoine Gauer]

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
```