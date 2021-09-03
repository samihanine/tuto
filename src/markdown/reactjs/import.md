# Les imports

## Importer du style
* chemin relatif de la feuille de style
* css
```jsx
import './index.css';
```

* scss
```jsx
import './index.scss';
```

## Importer un autre composant
* chemin relatif du composant
```jsx
import Header from './Header';
// ...
<Header />
```

## Importer une image
* chemin relatif de l'image
```jsx
import icon from './icon.png';
// ...
<img src={icon} alt="description" />
```

## Importer une librairie
* nom de la libraire
```jsx
import axios from 'axios';
// ...
axios.get();
```