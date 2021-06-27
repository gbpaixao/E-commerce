import { Route } from 'react-router-dom';
import CadastroCamisa from '../pages/Camisa/CadastrarCamisa';

import DescricaoCamisa from '../pages/Camisa/DescricaoCamisa';

const CamisaRoutes = ():JSX.Element => (
  <>
    <Route exact path="/descricaoCamisa/:id" component={DescricaoCamisa} />
    <Route exact path="/cadastrarCamisa" component={CadastroCamisa} />
  </>
);

export default CamisaRoutes;
