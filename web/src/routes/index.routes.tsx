/* eslint-disable react/jsx-props-no-spreading */
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';
import { CarrinhoContextProvider } from '../contexts/CarrinhoContext';
import { Carrinho } from '../pages/Carrinho';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { camisaRoutes } from './camisa.routes';
import CadastroUsuario from '../pages/CadastroCliente';
import { UsuarioContextProvider } from '../contexts/UsuarioContext';

const Routes = ():JSX.Element => (
  <UsuarioContextProvider>
    <CarrinhoContextProvider>
      <CamisaContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/carrinho" component={Carrinho} />
            <Route exact path="/cadastro" component={CadastroUsuario} />

            {camisaRoutes.map((entry) => (<Route {...entry} />))}

            <Route path="*" component={Home} />
          </Switch>
        </BrowserRouter>
      </CamisaContextProvider>
    </CarrinhoContextProvider>
  </UsuarioContextProvider>
);

export default Routes;
