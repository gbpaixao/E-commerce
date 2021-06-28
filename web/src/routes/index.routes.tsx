/* eslint-disable react/jsx-props-no-spreading */
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';
import { CarrinhoContextProvider } from '../contexts/CarrinhoContext';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';
import { camisaRoutes } from './camisa.routes';

const Routes = ():JSX.Element => (
  <CarrinhoContextProvider>
    <CamisaContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/carrinho" component={Carrinho} />

          {camisaRoutes.map((entry) => (<Route {...entry} />))}

          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </CamisaContextProvider>
  </CarrinhoContextProvider>
);

export default Routes;
