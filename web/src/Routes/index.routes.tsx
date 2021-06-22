import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CamisaRoutes from './camisa.routes';

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <CamisaProvider> */}
      <CamisaRoutes />
      {/* </CamisaProvider> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
