import './App.css';
import { useEffect, useState } from "react";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-batch';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-js-extras';
import 'prismjs/components/prism-bash';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

import class_md from './markdown/javascript/class.md';
import array_md from './markdown/javascript/array.md';
import variable_md from './markdown/javascript/variable.md';
import condition_md from './markdown/javascript/condition.md';
import example_md from './markdown/javascript/example.md';
import function_md from './markdown/javascript/function.md';
import loop_md from './markdown/javascript/loop.md';
import object_md from './markdown/javascript/object.md';
import comment_md from './markdown/javascript/comment.md';

import start_md from './markdown/reactjs/start.md';
import component_md from './markdown/reactjs/component.md';
import import_md from './markdown/reactjs/import.md';
import jsx_md from './markdown/reactjs/jsx.md';
import useState_md from './markdown/reactjs/useState.md';
import useEffect_md from './markdown/reactjs/useEffect.md';
import useRef_md from './markdown/reactjs/useRef.md';
import router_md from './markdown/reactjs/router.md';
import props_md from './markdown/reactjs/props.md';
import example1_md from './markdown/reactjs/example.md';
class MarkdownFile {

  constructor(settings) {
    this.name = settings.name || "unknown";
    this.module = settings.module || null;
    this.text = "";
  }

}

let data_js = [
  new MarkdownFile({ name: "Les Variables", module: variable_md }),
  new MarkdownFile({ name: "Les Conditions", module: condition_md }),
  new MarkdownFile({ name: "Les Boucles", module: loop_md }),
  new MarkdownFile({ name: "Les Fonctions", module: function_md }),
  new MarkdownFile({ name: "Les Tableaux", module: array_md }),
  new MarkdownFile({ name: "Les Classes", module: class_md }),
  new MarkdownFile({ name: "Les Objets", module: object_md }),
  new MarkdownFile({ name: "Les Commentaires", module: comment_md }),
  new MarkdownFile({ name: "Exemple", module: example_md }),
];

let data_react = [
  new MarkdownFile({ name: "Démarrer", module: start_md }),
  new MarkdownFile({ name: "Les composants", module: component_md }),
  new MarkdownFile({ name: "Les imports", module: import_md }),
  new MarkdownFile({ name: "La syntaxe jsx", module: jsx_md }),
  new MarkdownFile({ name: "useState", module: useState_md }),
  new MarkdownFile({ name: "useEffect", module: useEffect_md }),
  new MarkdownFile({ name: "useRef", module: useRef_md }),
  new MarkdownFile({ name: "Gérer l'url", module: router_md }),
  new MarkdownFile({ name: "Les props", module: props_md }),
  new MarkdownFile({ name: "Exemple", module: example1_md })
];

let pages = [
  { name: "Javascript", data: data_js },
  { name: "React.js", data: data_react },
]

function App() {

  const [markdown, setMarkdown] = useState(false);
  const [display, setDisplay] = useState(false);
  const [currentFile, setCurrentFile] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    let load = 0;

    let loading = () => {
      load++;
      if (load === data_js.length + data_react.length) setMarkdown(true)
    };

    pages.forEach(page => {
      page.data.forEach(item => {
        fetch(item.module).then((response) => response.text()).then((text) => {
          item.text = text;
          loading();
          Prism.highlightAll();
        })
      })
    })


    return () => {}
  }, [])

  Prism.highlightAll();
  
  return (
    <> 
    <header>
      <div className="ref">
        {pages.map((item, index) => <div 
        className={index===currentPage ? "btn ref-select" : "btn"} 
        onClick={() => {setCurrentPage(index); setCurrentFile(0)}} 
        key={index}>{item.name}</div>)}
      </div>

      <div className="hide">
        <div className={display ? "btn" : "btn select"} onClick={() => setDisplay(false)}>Résumer</div>
        <div className={display ? "btn select" : "btn"} onClick={() => setDisplay(true)}>Détailler</div>
      </div>
    </header>

    <div className="page">
      <div className="main">
      {markdown &&
        <div className={display ? "md" : "md hide-ul"}>
        {pages.map((element,i) => 
          element.data.map((item,index) => <ReactMarkdown key={index} className={index===currentFile && i === currentPage ? "md-item" : "md-hide"} children={item.text} remarkPlugins={[remarkGfm]} />)
        )}
        </div>
      }
      </div>
      <div className="aside">
        <div className="summary">
          {pages[currentPage].data.map((item,index) => 
            <div className={index===currentFile ? "btn summary-select" : "btn"} key={index} onClick={() => setCurrentFile(index)}>{item.name}</div>
          )}
        </div>
      </div>
    </div>
    </>


  )
}

export default App;