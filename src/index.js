import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style.css';


const element = document.createElement('div');

document.body.appendChild(element);
document.body.insertAdjacentHTML("beforeend", '<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script><script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>');

ReactDOM.render(React.createElement(App), element);