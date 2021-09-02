# Les conditions

## Stucture d'une condition
* Une condition renvoie un boolean : ```true``` or ```false```
* Généralement, la structure d'une condition se présentent comme ce qui suit:
* [valeur 1] [opérateur conditionnel] [valeur 2]
```js
(age > 18) // => true or false
```

## Tester une condition

### [if else](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else)
* On peut effectuer un traitement si la conditons donnée renvoie true à l'aide des mots-clés ```if```  et ```else```
```js
if (condition) {
    // instructions
} else if (condtion) {
    // instructions
} else {
    // instructions
}
```
### [switch](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch)
* L'instruction ```switch``` permet d'effectuer des traitements en fonction de la valeur d'une expression.
```js
const expr = 'b';
switch (expr) {
  case 'a': /* instructions */ break;
  case 'b': /* instructions */ break;
  case 'c': /* instructions */ break;
  default: /* instructions */ break;
}
```

### [ternaire](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* On peut affecter une variable en fonction d'une condition grâce à l'opérateur ternaire.
```js
let denomination = (age < 18) ? "minor" : "major";
```

## [Les opérateurs conditionnels](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators)
| symbole | signification |
|---|---|
| ```>``` | strictement plus grand que |
| ```>=``` | plus grand que  |
| ```<``` | plus petit que |
| ```<=``` | strictement plus petit que |
| ```==``` | égale |
| ```===``` | égale (en considérant le type des valeurs) |
| ```!=``` | différent |
| ```!==``` | différent (en considérant le type des valeurs) |
| | |
| ```!```(condition) | inverse la condition |
| ```&&``` | ET |
| ```\|\|``` | OU |
| | |
| ```typeof``` 1 == "number" | vérifie le type d'une valeur |
| obj ```instanceof``` Class | vérifie si un objet est l'instance d'une classe donnée |