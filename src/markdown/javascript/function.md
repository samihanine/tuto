# Les fonctions

## [Déclarer une fonction](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function)

* On peut déclarer une fonction avec l'instruction ```function```
* L'instruction ```return``` met fin à la fonction et renvoie la valeur qui lui succède.
```js
function test(settings){
  return 2 * settings;
}
```

## [Les fonctions fléchés](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* On peut également utiliser les "arrows functions" pour déclarer une fonction.
* L'intérêt est d'avoir une syntaxe plus compacte.
* Les "arrows function" ne possède pas leur propre contexte.
* Cela implique qu'elle ne modifierons pas la variable ```this```.
```js
const test = (settings) => {
  return 2 * settings;
}
```

## Appeler une fonction
```js
test(3); // => 6
```