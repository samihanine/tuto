
# Les tableaux

## [Déclarer un tableau et y accéder](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

### initialisation
* Pour déclarer un tableau, on entoure les éléments de crochet ```[ ... ]``` et on sépare les éléments avec des virgules ```,```
```js
let array = [ 1, 4, 2 ]
```

### [length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
* ```array.length``` renvoie le nombre d'éléments du tableau:
```js
let array = [ 1, 4, 30, 10 ];
array.length // => 4
```

### accesseur
* On peut accéder à un élément du tableau grâce à son indice:
```js
let array = [ 1, 4, 30, 10 ];
array[2] // => 30
```

### types
* un tableau peut contenir n'importe quel type de valeur, y compris des objets:
```js
let array = [ 33, 5, "lol", { key: 5 } ];
```

## Itérer les éléments d'un tableau

### [for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)
* Utiliser un boucle for (pas optimisé):
```js
for(let i=0; i<array.length; i++) {
  console.log(array[i]);
}
```

### [forEach](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* Utiliser la méthode ```forEach```:
```js
array.forEach((element, index) => {
  console.log(element)
})
```

## Méthodes pour modifier un tableau

### [push](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* ```array.push()``` ajoute un élément à la fin du tableau

```js
let array = [ "a", "b" ];
array.push("c"); // => [ "a", "b", "c" ]
```

### [splice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* ```array.splice()``` insère ou supprime des éléments à l'indice spécifié
```js
let array = [ "a", "b" ];
array.splice(1,0,"c"); // => [ "a", "c", "b" ]
```

### [slice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* ```array.slice()``` copie une partie d'un tableau
```js
let array = [ "a", "b", "c", "d", "e" ];

array = array.splice(2); // => [ "c", "d", "e" ]
array = array.splice(1, 3); // => [ "b", "c", "d" ]
```


## Méthodes pour effectuer diverses opérations sur un tableau

* Il existe une multitude de méthodes pour manipuler les tableaux, je vais détailler les plus interessantes.
* Les exemples qui suiveront utiliseront ce tableau comme base:
```js
let array = [ 1, 5, 7, 3, 10 ];
```

### [some](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* ```array.some()``` renvoie true si un des éléments vérifie la condition, sinon renvoie false
```js
let boolean = array.some(element => element > 20) // => false
```

### [filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* ```array.filter()``` renvoie un nouveau tableau contenant les éléments vérifiant la condition donnée
```js
let array2 = array.filter(element => element > 6) // => [ 7, 10 ]
```

### [find](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* ```array.find()``` renvoie le premier élément vérifiant la condition donnée
```js
let element = array.find(element => element > 6) // => 7
```

### [map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* ```array.map()``` renvoie un nouveau tableau en modifiant les valeurs selon les intructions données
```js
let array2 = array.map(element => element * 2) // => [ 2, 10, 14, 6, 20 ]
```

### [sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* ```array.sort()``` tri un tableau selon une fonction de comparaison
```js
array.sort((a,b) => a - b) // => [ 1, 3, 5, 7, 10 ]
```

### [reverse](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* ```array.reverse()``` inverse les élément du tableau
```js
let array2 = array.reverse(); // => [ 10, 3, 7, 5, 1 ]
```