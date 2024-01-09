import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './style.css';


const element = document.createElement('div');

const root = createRoot(element);
root.render(<App />)

document.body.appendChild(element);