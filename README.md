Structure du Projet :
Le répertoire modules contient la structure suivante :

1. Répertoires principaux :
src/ :

Contient les entités Doctrine pour la gestion des tables en base de données.
Les repositories pour les opérations CRUD.
views/ :

css/, img/, js/ : Contiennent les ressources front-end (feuilles de style, scripts JavaScript, images).
templates/ :
front/ : Les templates destinés à l'affichage utilisateur.
hook/ : Les templates spécifiques au hook displayHome.
config/ : Les fichiers de configuration pour PrestaShop et les dépendances du module.

translations/ : Les fichiers pour la gestion multilingue.

2. Fichiers importants :
vmobile.php : Fichier principal du module, qui définit ses propriétés, installe les tables nécessaires, et configure le hook displayHome.
composer.json : Gère les dépendances PHP nécessaires pour le module (comme Doctrine).
