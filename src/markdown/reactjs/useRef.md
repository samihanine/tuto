
```jsx
import { useState } from 'react';

function Component(){

    const inputEl = useRef(null);

    const handleClick = () => {
        const pseudo = inputEl.current.value;
        console.log(pseudo)
    }

    return (
        <div>
            <p onClick={handleClick}>Click me</p>
            <input ref={inputEl} type="text" />
        </div>
    );
}
```