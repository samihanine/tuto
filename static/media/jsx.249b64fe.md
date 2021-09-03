# La syntaxe jsx

## Les conditions
```jsx
function Component(){

  const privilege = "ADMIN";
  const is_login = false;

  return (
    <div>
      {privilege === "ADMIN" ? <p>Hi admin</p> : <p>Hi user</p>}

      {is_login && <div>you are login</div>}
    </div>
  );
}
```

## Les évènements

### onClick
```jsx
function Component(){

  const handleClick = (msg) => { 
    console.log(msg);
  }

  return (
    <div>
      <div onClick={() => handleClick(msg)}>Click here</div>
    </div>
  );
}
```

### onChange
```jsx
function Component(){

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
```

## Afficher une liste
```jsx
function Component(){

  const books = [
      { name: "Charlie", author: "Stephen King", year: 1993 },
      { name: "L'Étranger", author: "Albert Camus", year: 1942 },
      { name: "La Couleur des sentiments", author: "Kathryn Stockett", year: 2009},
  ];

  const DisplayBooks = () => {
      return books.map((item,index) => {
          return <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.author}</p>
            <p>{item.year}</p>
          </div>
      })
  }

  return <div>
      <DisplayBooks />
    </div>

}
```