import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { Layout } from '../../components/Layout';

import api from '../../services/api';

import { ICamisa } from '../../types/Camisa';
import { formatCurrency } from '../../utils/utils';

export function Home(): JSX.Element {
  const [camisas, setCamisas] = useState<ICamisa[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function getCamisas() {
      const response = await api.get('/camisas');

      setCamisas(response.data.camisas);
    }

    getCamisas();
  }, []);

  return (
    <Layout>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
        {camisas.map((camisa) => (
          <div key={camisa.id}>
            <div style={{ width: 256, height: 168 }}>
              {/* <Image
                src={camisa.mainPicture}
                height={168}
                width={256}
                thumbnail
              /> */}
              <div style={{ height: 168, width: 256, background: 'red' }} />
              <div style={{ padding: 25 }}>
                <h5><b>{camisa.nomeCamisa}</b></h5>
                <h5 style={{ marginBottom: 24 }}>{formatCurrency(camisa.valor)}</h5>

                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
                >
                  <Button
                    type="button"
                    onClick={() => history.push(`/descricaoCamisa/${camisa.id}`)}
                    style={{ background: '#5227CC', border: 0 }}
                  >
                    Ver mais
                  </Button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
