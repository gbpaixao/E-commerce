import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CadastroCliente } from '../pages/CadastroCliente';

import Home from '../pages/Home';
import { Login } from '../pages/Login';
import CamisaRoutes from './camisa.routes';

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={CadastroCliente} />
      <CamisaRoutes />
    </Switch>
  </BrowserRouter>
);

export default Routes;
