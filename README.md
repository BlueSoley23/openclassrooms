<h1><a href="https://bluesoley23.github.io/OC_P1_HTML-CSS_Booki/">Booki - Agence de voyage</a></h1>

<p>Ce projet est le premier de ma formation de développeur web full stack chez OpenClassrooms. Il consiste à créer la page d'accueil d'une agence de voyage appelée Booki.</p>

<h2>Maquette découpée</h2>
<p>Vous pouvez consulter la maquette découpée de Booki dans le dossier images/maquettes.</p>

<p>Le style d'écriture du code est très aéré et très commenté pour une bonne lisibilité et une maintenance facilitée. Les sélecteurs CSS sont optimisé en fonction de leur spécificité et regroupés dans l'ordre du DOM.</p>

<h2>Structure de la page</h2>

<p>La page est structurée en trois sections principales :</p>

<ul>
  <li><strong>En-tête</strong> : Contient le logo de Booki et un menu de navigation.</li>
  <li><strong>Contenu principal</strong> : Divisé en trois sections - recherche, hébergements et activités.</li>
  <li><strong>Pied de page</strong> : Fournit des informations utiles et des contacts.</li>
</ul>

<h2>Structure du fichier HTML</h2>

<p>Le fichier <code>index.html</code> est organisé de la manière suivante :</p>

<ul>
  <li>La balise <code>&lt;head&gt;</code> contient les métadonnées de la page, le titre, l'icône de la page, les liens vers les polices et les icônes, ainsi que le lien vers le fichier CSS principal.</li>
  <li>La balise <code>&lt;body&gt;</code> contient le contenu principal de la page, enveloppé dans un conteneur principal <code>&lt;div class="main-container"&gt;</code>.</li>
  <li>L'en-tête de la page est défini dans la balise <code>&lt;header class="header-section"&gt;</code> et comprend le logo de Booki et le menu de navigation.</li>
  <li>Le contenu principal de la page est défini dans la balise <code>&lt;main&gt;</code>. Il est divisé en trois sections : recherche, hébergements et activités.</li>
  <li>La section de recherche contient une barre de recherche avec un titre principal.</li>
  <li>La section des hébergements présente des cartes d'hébergement avec des images, des titres, des sous-titres et des évaluations.</li>
  <li>La section populaires présente des cartes d'hébergements populaires</li>
  <li>La section des activités contient des cartes présentant des activités sur Marseille.</li>
  <li>La section footer propose des liens utiles (aide, contact, à propos, etc...)</li>
</ul>

<h2>Structure du fichier CSS</h2>

<p>Le fichier <code>style.css</code> contient les styles pour la mise en page et la présentation de la page. Voici quelques points importants :</p>

<ul>
  <li>La police de la page est définie comme étant 'Raleway', sans-serif.</li>
  <li>Le fichier CSS utilise des variables CSS pour définir les couleurs, les tailles de police et d'autres propriétés réutilisables.</li>
  <li>Les styles sont organisés en sections, avec des commentaires pour faciliter la compréhension.</li>
  <li>Des règles de média queries sont utilisées pour appliquer des styles spécifiques aux petits appareils (téléphones avec une largeur inférieure à 768px & tablettes avec une largeur inférieure à 1024px).</li>
</ul>

<p>N'hésitez pas à explorer le code HTML et CSS pour voir comment les différentes sections et cartes sont structurées et stylisées.</p>

<h2>Liens utiles</h2>

<ul>
  <strong><li><a href="https://bluesoley23.github.io/OC_P1_HTML-CSS_Booki/">>> Voir le site sur GitHub Pages ! </a></li></strong>
  <br>
  <li><a href="https://github.com/BlueSoley23/OpenClassrooms_Project-1_HTML-CSS_Booki.git">Dépôt GitHub du projet</a></li>
</ul>

<h2>Contact</h2>

<p>Ce projet a été réalisé par Antoine Gauer. Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter à l'adresse e-mail suivante : <a href="mailto:bluegauer@gmail.com">bluegauer@gmail.com</a>.</p>

<p>Ce projet est passé aux validateurs HTML & CSS du W3C !<p>

<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="CSS Valide !" />
    </a>
</p>