# Les composants

* Il existe deux types de composant : les composants "classes" et les composants "fonctions".
* Les composants fonctions sont à privilégier car ils comportent plus d'avantages.
* Dans la suite de ce tuto, je ne détaillerais uniquement des composants fonctions.

## Structure d'un composant fonction
* Les ```import``` se font au sommet du fichier.
* Ensuite on déclare la fonction avec le mot-clé ```function``` suivi du nom du composant.
* Le corps de la fonction comportera les différentes instructions à effectuer servant à l'affichage du composant.
* La fonction se termine forcément par un ```return``` qui va renvoyer le code jsx (html et js) à afficher.
* Enfin on exporte la fonction grâce aux mots-clés ```export default``` suivit du nom de notre composant.

```js
import './Component.css';

function Component(){
  const text = "hello";

  return (
    <div>
      <p>{ text }</p>
    </div>
  );
}

export default Component;
```