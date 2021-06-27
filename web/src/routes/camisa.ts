import CadastroCamisa from '../pages/Camisa/CadastrarCamisa';
import DescricaoCamisa from '../pages/Camisa/DescricaoCamisa';

export const camisaRoutes = [
  {
    key: 'descricaoCamisa',
    path: '/descricaoCamisa/:id',
    component: DescricaoCamisa,
  },
  {
    key: 'cadastrarCamisa',
    path: '/cadastrarCamisa',
    component: CadastroCamisa,
  },
];
