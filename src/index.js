import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero/index.js';
import OurClients from './components/OurClients/index.js';
import Process from './components/Process/index.js';
import Services from './components/Services/index.js';
import AboutUs from './components/AboutUs/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hero />
    <Services />
    <Process />
    <OurClients />
    <AboutUs />
    
  </React.StrictMode>
);


reportWebVitals();
