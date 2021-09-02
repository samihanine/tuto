# Déclarer une variable

* Le JavaScript est un langage non-typé. 
* Autrement dit, lorsque l'on déclare une variable, il n'est pas nécessaire d'indiquer s'il s'agit d'un "string", d'un "int" etc...
* Il y a 3 mots-clés pour déclarer une variable : ```let```, ```const``` et ```var```.
* Le mot-clé ```var``` n'est plus un moyen pertinent pour déclarer une variable, je ne vais donc pas le détailler pour la suite.

## [Let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let)

* ```let``` déclare une variable qui peut être modifié par la suite.
* Il n'est pas obligatoire d'initialer une valeur lorque l'on déclare une variable avec let.

```js
let variable = 10;
variable = 3;
console.log(variable) // => 3
```

## [Const](<https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const>)

* ```const``` déclare une constante qui ne peut pas être modifiée par la suite.
* Il est pertinent d'utiliser ```const``` pour définir des références à des objets ou pour déclarer des variables globales.

```js
const variable = "lol";
variable = "test"; // => <<< erreur >>>
```

## [Les types de valeur](<https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/typeof>)

| type | example |
|---|---|
| number | ```let variable = 5;``` |
| string | ```let variable = "test";```  |
| array | ```let variable = [5, 1, 4];``` |
| object | ```let variable = { x: 1, y: 2};``` |
| boolean | ```let variable = false;``` |
| undefined | ```let variable;``` |

