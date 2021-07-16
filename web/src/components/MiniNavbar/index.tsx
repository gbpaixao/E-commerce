import { useHistory } from 'react-router-dom';
import { styles } from './styles';

export function MiniNavbar() : JSX.Element {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <button
        type="button"
        style={{ background: 'transparent', border: 'none' }}
        onClick={() => history.push('/home')}
      >
        Home
      </button>
      <button
        type="button"
        style={{ background: 'transparent', border: 'none' }}
        onClick={() => history.push('/cadastrarCamisa')}
      >
        Cadastrar Camisa
      </button>
    </div>
  );
}
