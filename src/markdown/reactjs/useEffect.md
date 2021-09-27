# useEffect

```jsx
import { useEffect } from 'react';

function Component(){

    useEffect(() => {
        console.log(`Le composant vient d'être monté.`);
    });

    const handleClick = () => {
        console.log(`Le composant vient d'être actualisé.`);
    }

    return (
        <div>
            <p onClick={handleClick}>Click me</p>
        </div>
    );
}
```