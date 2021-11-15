# Structuration

Etant dans le cadre d'un test technique j'ai utilisé `create-react-app` avec le template `typescript` pour avoir une whiteapp React et Typescript dans laquelle je peux de suite coder sans devoir me préocupper de la configuation de build ou de déploiement.

Pour faciliter le formatage du code, j'ai rajouté le duo `linter` / `prettier`.

Pour l'appel à l'API publique, ayant un seul call simple à effectuer, je n'ai pas utilisé de librairie (`axios`, `superagent`, etc...) mais j'ai utilisé le `fetch` de JS. Cependant j'ai écrit une méthode `fetchData` qui renvoie une erreur selon le code de la réponse du `fetch`.

J'ai décidé d'utiliser la librairie `react-query` car ça me permet d'utiliser un seul hook pour récupérer les données, savoir si le chargement est en cours et savoir s'il y a une erreur durant le chargement des données ; au lieu d'utiliser un `useEffect` et plusieurs `useState`.

Concernant la structure de données :

- pages : composants Reacts correspondants aux "écrans" de l'application
- style : pour regrouper les styles communs à toute l'application (utilisation des mixins SASS)
- types : pour gérer les fichiers de typage
- utils : pour gérer les méthodes qui peuvent être utiles dans toute l'application, ici pour faire un call API. Mais ça peut être la gestion de regex, manipulation des dates, etc...

Chaque composant est dans un dossier qui porte le nom du composant, dans ce dossier il y a :

- ComponentName.tsx (composant React)
- index.ts (export du composant React)
- ComponentName.scss (optionnel, styles à appliquer sur le composant)

Dans le dossier du composant `Jobs` il y a un dossier `components` qui contient les compasants qui sont uniquement utilisés par le composant `Jobs`.

# Conception

Il y a 3 composants dans l'application :

- Le composant `Jobs` fait le call API. Il affiche 'Loading...' si l'appel est en cours, il affiche 'Error fetching jobs' si l'appel renvoie une erreur, et sinon il affiche le titre 'Jobs' et une liste de `Section`.
- Le composant `Section` affiche le nom de la section et une liste de `Posting`.
- Le composant `Posting` affiche les informations principales de l'annonce. Au clic sur le bouton 'Apply' on est redirigé sur un lien permettant de postuler à l'annonce. Au clic sur la carte on est redirigé sur le lien de l'annonce complète.

Ce découpage permet une meilleure lecture du code, de définir facilement les limites de chaque composant et rend les tests unitaires plus faciles.
