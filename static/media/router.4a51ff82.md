# React router

* react monopage / gestion d'url manuel / react router dom

## [Installation](https://www.npmjs.com/package/react-router-dom)
```bash
npm install react-router-dom
```

## [Balises Router et Route](https://reactrouter.com/web/example/basic)
* généralement dans le fichier app.js
* explication erreur 404

```jsx
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

function Component(){
  return (
    <>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
    </>
  );
}

export default Component;
```

## [Balise Link](https://reactrouter.com/web/api/Link)

```jsx
import { Link } from "react-router-dom";
// ...
<Link to="/contact">Click here</Link>
```