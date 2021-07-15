import CadastroCamisa from '../pages/Camisa/CadastrarCamisa';
import DescricaoCamisa from '../pages/Camisa/DescricaoCamisa';
import EditarCamisa from '../pages/Camisa/EditarCamisa';

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
  {
    key: 'editarCamisa',
    path: '/editarCamisa/:id',
    component: EditarCamisa,
  },
];
