
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';


// JS => JSX
// Que voy a pintar
// const primeraEtiqueta = <h1>Hola Mundo</h1>
// console.log(primeraEtiqueta);

// En donde lo voy a pintar
// const div = document.getElementById('root')
// console.log(div);

// // ReactDOM.render(lo que voy a pintar, en donde lo voy a pintar)
// ReactDOM.render(primeraEtiqueta, div)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


