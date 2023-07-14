# Unit Tests and Code Coverage

Ce projet est conçu pour l'exécution de tests JavaScript et pour évaluer la couverture de code de ces tests.

## Installation

1.  Clonez ce dépôt sur votre machine locale.
2.  Assurez-vous d'avoir Node.js installé sur votre système.
3.  Ouvrez une console/terminal et naviguez jusqu'au répertoire racine du projet.
4.  Exécutez la commande suivante pour installer les dépendances du projet :

`npm install`

## Exécution des tests

Pour exécuter les tests, utilisez la commande suivante dans votre console/terminal :

`npm test` ou `npm run test`

Cette commande exécutera les tests à l'aide de Mocha, un framework de test populaire pour JavaScript. Les résultats des tests s'afficheront dans la console.

## Couverture de code

Pour évaluer la couverture de code des tests, utilisez la commande suivante :

`npm run coverage`

Cette commande exécutera les tests à l'aide de C8 et générera un rapport de couverture de code détaillé. Le rapport sera enregistré dans le répertoire `coverage` à la racine du projet. Ouvrez le fichier `index.html` dans votre navigateur pour afficher le rapport de couverture de code.

## Workflow

Les tests sont exécutés à chaque fois que vous poussez du code sur le dépôt distant `main`. Si les tests échouent, le dépôt distant refusera votre code. Vous devrez corriger les tests avant de pouvoir pousser votre code.

## Auteur

Ce projet a été développé par Guillaume Cirillo.
