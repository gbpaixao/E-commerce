import { Route } from 'react-router-dom';
import { CamisaContextProvider } from '../contexts/CamisaContext';
import CadastroCamisa from '../pages/Camisa/CadastrarCamisa';

import DescricaoCamisa from '../pages/Camisa/DescricaoCamisa';

const CamisaRoutes = ():JSX.Element => (
  <CamisaContextProvider>
    <Route exact path="/descricaoCamisa/:id" component={DescricaoCamisa} />
    <Route exact path="/cadastrarCamisa" component={CadastroCamisa} />
  </CamisaContextProvider>
);

export default CamisaRoutes;
