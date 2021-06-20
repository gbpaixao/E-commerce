import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Camisa from '../pages/Camisa';

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/camisa" component={Camisa} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
