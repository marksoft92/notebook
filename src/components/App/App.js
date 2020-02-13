
import React from 'react';
import HomeApp from '../HomeApp/HomeApp.js';
import Onas from "../Onas";
import Kontakt from "../Kontakt";
import Oferta from "../Oferta";


import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Footer from '../Footer/Footer.js';


const App = () => (
  <BrowserRouter>

    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      <Route exact path='/' component={HomeApp} />
      <Route exact path='/onas' component={Onas} />
      <Route exact path='/oferta' component={Oferta} />
      <Route exact path='/kontakt' component={Kontakt} />

    </AnimatedSwitch>
    <Footer />
  </BrowserRouter>
);
export default App;