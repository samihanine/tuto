# [Les boucles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration)

## For
* Une boucle ```for``` répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.
```js
for(let i=0; i<10; i++) {
    ...
    if (x) break;
    if (y) continue;
}
```
* L'instruction ```break``` arrête la boucle for.
* L'instruction ```continue``` passe directement à l'itération suivante de la boucle.

## While
* Une instruction while permet d'exécuter une instruction tant qu'une condition donnée est vérifiée.
```js
while(condition) {
    ...
    if (x) break;
    if (y) continue;
}
```