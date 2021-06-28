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

      setCamisas(response.data);
    }

    getCamisas();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        {camisas.map((camisa) => <CardCamisa key={camisa.idCamisa} camisa={camisa} />)}
      </div>
    </Layout>
  );
}
