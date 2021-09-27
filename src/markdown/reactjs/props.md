# Les props

```js
function Component_A(){

    const variable = "test";

    return <div>
        <Component_B item={variable} />
    </div>
}
```

```js
function Component_B(props){

    const display = props.item;

    return <p>{display}</p>
}
```