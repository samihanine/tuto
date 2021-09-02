# Les classes

## Le constructeur

### [class](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/constructor)
* Le mot-clé ```class``` suivi d'un nom permet de déclarer une classe.
* Le mot-clé ```constructeur``` est la méthode qui sera exécutée lorsqu'un objet sera créé via cette classe.
```js
class Humain {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### [new](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
* Le mot-clé ```new``` permet de créer un objet via une classe.
```js
let sam = new Humain("sam",19); // => { name: "sami", age: 19 }
```

## Les méthodes

* Pour ajouter une méthode aux objets créés par la classe, on peut procédé de la manière qui suit :
```js
class Humain {
    constructor(name,age) { ... }

    birthday() {
        this.age += 1;
        return this.age;
    }
}
sam.birthday() // => 20
```

## [Les mots-clés "get" et "set"](https://www.w3schools.com/js/js_object_accessors.asp)
* Les mot-clé ```get``` permet de définir un "getter" personnalisé à la classe.
* Les mot-clé ```set``` permet de définir un "setter" personnalisé à la classe.
* Le nom de la méthode NE PEUT PAS être le même que la variable modifié/appelée.
* Par convention, le propriétés privés à la classe son précédé d'un ```_```.
```js
class Humain {
    constructor(name) { 
        this._name = name;
    }

    get name() {
        return this._name.upperCase();
    }

    set name(name) {
        this._name = name;
    }
}
let person = new Humain("sam");

person.name = "samuel";
console.log(person._name) // => "samuel"
console.log(person.name) // => "SAMUEL"
```

## [Le mot-clé "static"](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/static)

* Le mot-clé ```static``` permet de définir des méthodes et des propriétés globales à la classe.
```js
class Human() {
    static number_of_humans = 0;

    constructor() {
        Human.number_of_humans++;
    }

    static apocalypse() {
        Human.number_of_humans = 0;
    }
}
let humain = new Humain();
console.log(Humain.number_of_humans) // => 1
```

## [Les mots-clés "super" et "extends"](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/super)

* Le mot-clé ```extends``` permet à une classe d'hérité des propriétés et des méthodes d'une autre les classes.
* Le mot-clé ```super``` permet de faire référence à la classe mère.

```js
class Chat {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    console.log(`${this.nom} fait du bruit.`);
  }
}

class Lion extends Chat {
  parler() {
    super.parler();
    console.log(`${this.nom} rugit.`);
  }
}
```