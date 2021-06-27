import { Route } from 'react-router-dom';

import DescricaoCamisa from '../pages/Camisa/DescricaoCamisa';

const CamisaRoutes = ():JSX.Element => (
  <Route exact path="/descricaoCamisa" component={DescricaoCamisa} />
);

export default CamisaRoutes;
