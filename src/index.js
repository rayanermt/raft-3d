import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hero />
    
  </React.StrictMode>
);


reportWebVitals();
