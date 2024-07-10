import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './variables.css';

import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero/index.js';
import OurClients from './components/OurClients/index.js';
import Process from './components/Process/index.js';
import TabSwitcher from './components/Services/TabSwitcher.js';
import AboutUs from './components/AboutUs/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <TabSwitcher/>
    <Process />
    <OurClients />
    <AboutUs />
    
  </React.StrictMode>
);


reportWebVitals();
