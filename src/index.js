import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero/index.js';
import OurClients from './components/OurClients/index.js';
import Process from './components/Process/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hero />
    <OurClients />
    <Process />
    
  </React.StrictMode>
);


reportWebVitals();
