import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';
import { CarrinhoContextProvider } from '../contexts/CarrinhoContext';
import Carrinho from '../pages/Carrinho';

import Home from '../pages/Home';
import CamisaRoutes from './camisa.routes';

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <CarrinhoContextProvider>
        <CamisaContextProvider>
          <CamisaRoutes />
        </CamisaContextProvider>
        <Route exact path="/carrinho" component={Carrinho} />
      </CarrinhoContextProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;
