import React from 'react';
import HomeApp from '../../common/HomeApp';


import styles from './App.scss';



import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Editor from '../../common/Editor';

const App = () => (
  <BrowserRouter>

    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className={styles.switchWrapper}
    >
      <Route exact path='/' component={HomeApp} />
      <Route exact path='/status' component={Editor} />

    </AnimatedSwitch>

  </BrowserRouter>
);
export default App;