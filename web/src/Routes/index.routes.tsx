import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';

import Home from '../pages/Home';
import CamisaRoutes from './camisa.routes';

const Routes = ():JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <CamisaContextProvider>
        <CamisaRoutes />
      </CamisaContextProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;
