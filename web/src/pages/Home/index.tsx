import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardCamisa } from '../../components/CardCamisa';
import { Layout } from '../../components/Layout';

import api from '../../services/api';
import { styles } from './styles';

import { Camisa } from '../../types/Camisa';

export function Home(): JSX.Element {
  const [camisas, setCamisas] = useState<Camisa[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function getCamisas() {
      const response = await api.get('/camisas', undefined, false);
      console.log(response.data);
      if (response) {
        setCamisas(response.data);
      }
    }

    getCamisas();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <button
          type="button"
          style={{ background: 'transparent', border: 'none' }}
          onClick={() => history.push('/cadastrarCamisa')}
        >
          <p className="mb-0">Cadastrar camisa</p>
          <p>+</p>
        </button>
        {camisas.map((camisa) => <CardCamisa key={camisa.id} camisa={camisa} />)}
      </div>
    </Layout>
  );
}
