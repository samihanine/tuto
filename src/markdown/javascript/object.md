# Les objets

## [Déclarer un objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object)
* Il existe plusieurs manières de déclarer un objet en javaScript.
* La plus répendue est de déclarer l'objet lors de l'initialisation d'une variable grâce aux accolades ```{ }```.
```js
let humain = { 
    name: "sami", 
    age: 19 
};
```

## Les propriétés d'un objet

### Accéder à une propriété
* Pour accéder à une propriété, on utilise la variable faisant référence à l'objet suivie du nom de la propriétée.
```js
let animal = { name: "totoro", age: 2 };
animal.name // => totoro
animal["name"] // => totoro
```

### Modifier un objet
* Lorsque l'on affecte une variable à un objet, la variable fait référence à cet objet.
* Autrement dit, l'objet n'est pas copié, la variable "pointera" vers celui-ci.
```js
let objet = { name: "haku", age: 0.2 };
let chaton = objet;
chaton.age = 0.5;
console.log(objet.age) // => 0.5
```

## Les méthodes d'un objet
* Les propriétés d'un objet peuvent contenir des fonctions, c'est ce qu'on appelle des méthodes.
* A l'intérieur de ces méthodes, la variable ```this``` fera référence à l'objet parent.
```js
let voiture = { 
    x: 10, 
    y: 20, 
    rouler: function() {
        this.x += 1;
    }
}
voiture.rouler();
console.log(voiture.x) // => 11
```

## [Copier un objet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
* Parmi les méthodes de la classe Object, ```Object.assign(cible, source)``` permet de copier les propriétés d'un objet vers un autre objet.
* Si l'objet cible est vide, l'objet source sera simplement copié. 
* Donc si l'on modifie la copie, l'objet original ne sera pas modifié.
```js
let haku = { name: "haku", age: 0.2 };
let haku_copie = Object.assign({}, haku);
haku_copie.name = "totoro";
console.log(haku.name) // => "haku"
```
