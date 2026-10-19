# Atelier : plateforme d'apprentissage du code (démo)

## Structure
- index.html      : page unique (structure)
- css/style.css   : styles (thème clair/sombre, fiches, examen)
- js/app.js       : logique, exercices, fiches de cours, révision, examen

## Utilisation
Ouvrez index.html dans un navigateur. Aucune installation n'est nécessaire.
Pour un test local avec serveur : `npx serve .` ou `python3 -m http.server`.

## Modifier le contenu (dans js/app.js)
- LANGS   : exercices et cartes de révision par langage
- LESSONS : fiches de cours
- EXAMQ   : questions d'examen

## Limites
Comptes et progression stockés dans le navigateur (localStorage), sans serveur.
Seul JavaScript est exécuté ; HTML est analysé ; Python, SQL, Java, C++ et C# sont corrigés par analyse du texte.
