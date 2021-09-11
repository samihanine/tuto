# useState

```jsx
import { useState } from 'react';

function Component(){

    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <p onClick={handleClick}>Click me</p>
        </div>
    );
}
```