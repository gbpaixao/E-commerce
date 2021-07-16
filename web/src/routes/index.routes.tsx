/* eslint-disable react/jsx-props-no-spreading */
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';
import { CarrinhoContextProvider } from '../contexts/CarrinhoContext';
import { Carrinho } from '../pages/Carrinho';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { AcompanharPedido } from '../pages/AcompanharPedido';
import { Usuario } from '../pages/TelaUsuario';

import { camisaRoutes } from './camisa.routes';
import { PedidoContextProvider } from '../contexts/PedidoContext';

const Routes = (): JSX.Element => (
  <CarrinhoContextProvider>
    <CamisaContextProvider>
      <PedidoContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/carrinho" component={Carrinho} />
            <Route exact path="/acompanharPedido" component={AcompanharPedido} />
            <Route exact path="/usuario" component={Usuario} />

            {camisaRoutes.map((entry) => (<Route {...entry} />))}

            <Route path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      </PedidoContextProvider>
    </CamisaContextProvider>
  </CarrinhoContextProvider>
);

export default Routes;
