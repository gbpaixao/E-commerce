import { useEffect, useState } from 'react';
import { CardCamisa } from '../../components/CardCamisa';
import { Layout } from '../../components/Layout';

import api from '../../services/api';
import { styles } from './styles';

import { Camisa } from '../../types/Camisa';

export function Home(): JSX.Element {
  const [camisas, setCamisas] = useState<Camisa[]>([]);

  useEffect(() => {
    async function getCamisas() {
      const response = await api.get('/camisas');

      setCamisas(response.data.camisas);
    }

    getCamisas();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        {camisas.map((camisa) => <CardCamisa key={camisa.id} camisa={camisa} />)}
      </div>
    </Layout>
  );
}
