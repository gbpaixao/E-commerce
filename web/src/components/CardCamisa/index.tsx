import { useHistory } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

import { formatCurrency } from '../../utils/utils';
import { styles } from './styles';

import { Camisa } from '../../types/Camisa';

interface CardCamisaProps {
  camisa: Camisa;
}

export function CardCamisa({ camisa }: CardCamisaProps): JSX.Element {
  const history = useHistory();

  return (
    <div>
      <div className={styles.card}>
        <img
          src={camisa.mainPicture}
          height={168}
          width={255}
          alt={camisa.nomeCamisa}
        />

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
  );
}
