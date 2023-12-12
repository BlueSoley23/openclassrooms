<div style="display: flex; align-items: center;">
    <img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="icône JavaScript" style="width: 50px; height: 50px;">
    <h1 style="margin-left: 20px; padding-right: 120px;">  Module errorHandlerMod.js</h1>
</div>

Ce module, écrit en JavaScript fournit des fonctions pour gérer les erreurs courantes en JavaScript. Encore en développement, dans le cadre d'un projet de formation, ce dernier est adapté à une API particulière donc pas encore complètement compatible avec d'autres projets, mais il est surtout encore assez incomplet...
Il nécessite d'être testé en profondeur et amélioré (dévellopper les messages d'erreurs pour les rendre plus complets, ajouter des recommandations pour résoudre les erreurs, dévellopper une modale plus élaborée que celle générée par défaut avec alert()...)

Je compte m'investir dans ce projet à l'issue de ma formation mais toutes suggestion ou collaboration est la bienvenue ! :)

Le projet en question est un portfolio d'une designer, et le module tourne autour d'une requête de login, fetch() de type POST...

J'ai développé ce module afin d'alléger mon code et de fournir une prise en charge des erreurs la plus complète possible ! errorHandlerMod.js détecte donc les erreurs qui peuvent se produire dans le cadre d'un page de login, mais aussi des erreurs HTTP, de code, de résaux, etc...

## Table des matières

- [Fonctions](#fonctions)
- [Utilisation](#utilisation)
- [Installation](#installation)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctions

Le module ErrorHandler comprend trois fonctions principales, loginErrorHandler(), checkErrorHandler & printErrorHandler() qui font appel à des méthodes définies dans des objets de fonctions, ainsi que quatre fonctions internes qui rassemble les méthodes utilisées par la fonction principale ( checkErrorHandler() ) :

### loginErrorHandler()

Cette fonction gère les erreurs liées au login.

Elle va nous permettre de gérer les erreurs de connexion (téstée sur la combinaison id/password) avant l'envoi de la requête à l'API. Si la fonction renvoie TRUE, cela signifie que la combinaison email/mot de passe est valide et que l'on peut envoyer la requête
Si la combinaison email/mot de passe n'est pas valide et que l'on ne peut pas envoyer la requête, une erreur est définie avec throw new Error() pour permettre l'affichage d'une alerte avec les informations définies dans l'objet error, avec la fonction printErrorHandler() dans le bloc catch.
<br>
### checkErrorHandler()

Cette fonction gère les erreurs principales.

Elle va nous permettre de gérer les erreurs de connexion (erreurs HTTP) après l'envoi de la requête à l'API (vérifications sur le code de statut), ainsi que les erreurs de résau. Elle prend en paramètre l'objet response, une réponse HTTP qui contient les informations relatives à la requête (code de statut, message de statut, corps de la réponse) et l'objet responseData qui contient le corps de la réponse décodée au format JSON.
<br>
### printErrorHandler()

Cette fonction affiche  la boite de dialogue contenant,un message d'erreur détaillé et compréhensible pour un néophyte. 

Placée dans le bloc catch, elle attrape les erreurs de code source (type, référence, plage, syntaxe, URI, évaluation) et affiche la boite de dialogue avec les informations liées à l'erreur, sinon, un message est construit avec les informations de l'erreur potentiellement rencontrée dans le bloc try.
<br>
## Utilisation

Voici un exemple d'utilisation de ce module :

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
Installation
Logo Node.js

Pour installer ce module, vous devez avoir Node.js installé sur votre machine. Ensuite, téléchargez le fichier errorHandler.js et incluez-le dans votre projet.

## Contribution

<div style="display: flex; align-items: center;">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="description de l'image" style="width: 50px; height: 50px;">
    <h5>Si vous souhaitez contribuer à ce projet, veuillez créer une issue ou une pull request sur GitHub.</h5>
</div>


## Licence

Ce projet est sous licence MIT.
Licence MIT - version FR / (Intégrée dans le README pour plus de simplicité dans l'arborescence...) :

Droit d'auteur (c) [2023] [BlueSoley23 / Antoine Gauer]

La permission est accordée, gratuitement, à toute personne obtenant une copie
de ce logiciel et des fichiers de documentation associés (le "Logiciel"), de traiter
le Logiciel sans restriction, y compris sans limitation les droits
d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et/ou de vendre
des copies du Logiciel, et de permettre aux personnes à qui le Logiciel est
fourni de le faire, sous réserve des conditions suivantes :

L'avis de droit d'auteur ci-dessus et cet avis de permission doivent être inclus dans toutes
copies ou portions substantielles du Logiciel.

LE LOGICIEL EST FOURNI "TEL QUEL", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU
IMPLICITE, Y COMPRIS MAIS NON LIMITÉ AUX GARANTIES DE QUALITÉ MARCHANDE,
D'ADÉQUATION À UN USAGE PARTICULIER ET DE NON-CONTREFAÇON. EN AUCUN CAS, LES
AUTEURS OU LES TITULAIRES DE DROITS D'AUTEUR NE SERONT RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGES OU AUTRE
RESPONSABILITÉ, QUE CE SOIT DANS UNE ACTION DE CONTRAT, DE TORT OU AUTRE, DÉCOULANT DE,
EN DEHORS DE OU EN RELATION AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES TRANSACTIONS DANS LE
LOGICIEL.
