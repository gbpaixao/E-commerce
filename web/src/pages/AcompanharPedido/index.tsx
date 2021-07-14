import {
  Col, Image, Button,
} from 'react-bootstrap';
import { ImHome } from 'react-icons/im';
import { RiStore3Fill } from 'react-icons/ri';
import { MdLocalShipping } from 'react-icons/md';

import { Layout } from '../../components/Layout';
import ItemsAmount from '../../components/ItemsAmount';
import { useCarrinho } from '../../contexts/CarrinhoContext';

import { formatCurrency } from '../../utils/utils';
import { getRandomTshirt } from '../../server/getRandomTshirt';
import { styles } from './styles';

export function AcompanharPedido(): JSX.Element {
  return (
    <Layout>

      <div>
        <div className={styles.divCancel}>
          <Image
            src={getRandomTshirt()}
            height={140}
            width={104}
            thumbnail
            style={{ marginLeft: '50px', marginTop: '0.5rem', marginBottom: '0.5rem' }}
          />
          <Col>
            <p>N°</p>
            <b>43612</b>
          </Col>
          <Col style={{ minWidth: '15rem' }}>
            <p>Previsão de entrega</p>
            <b>29/08/2021</b>
          </Col>
          <Col>
            <p>Total</p>
            <b>R$100,00</b>
          </Col>
          <Col style={{
            minWidth: '10rem',
            marginRight: '20px',
            marginLeft: '2rem',
          }}
          >
            <Button
              variant="light"
              size="sm"
            >
              Cancelar pedido
            </Button>
          </Col>
        </div>

        <div className={styles.divRadios}>

          <div>
            <div className={styles.radioDiv}>
              <RiStore3Fill color="#5227CC" size={30} />
            </div>
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <p> Loja </p>
            </div>
          </div>

          <hr style={{
            minWidth: '33%',
          }}
          />

          <div>
            <div className={styles.radioDiv}>
              <MdLocalShipping color="#5227CC" size={30} />
            </div>
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <p> Correios </p>
            </div>
          </div>

          <hr style={{
            minWidth: '33%',
          }}
          />

          <div>
            <div className={styles.radioDiv}>
              <ImHome color="#5227CC" size={30} />
            </div>
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <p> Entregue </p>
            </div>
          </div>
        </div>

        <div
          className={styles.divLast}
        >

          <div
            style={{
              alignItems: 'space-between',
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
            <div
              style={{
                marginLeft: '1rem',
                width: '3rem',
              }}
            >
              <p>Atualização</p>
              <p>Atualização</p>
              <p>Atualização</p>
              <p>Atualização massas</p>

            </div>

            <div
              style={{
                marginLeft: '5rem',
                width: '2rem',
              }}
            >
              <p>Status</p>
            </div>

          </div>

          <div
            style={{
              background: 'rgba(222, 226, 230, 1)',
              width: '20rem',
              borderRadius: '10px',
            }}
          >
            <div
              style={{
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            >
              <h5> Código de rastreio</h5>
              <p>HFAAF</p>
            </div>

            <div
              style={{
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            >
              <h5> Data de compra </h5>
              <p>HFAAF</p>
            </div>

            <div
              style={{
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            >
              <h5> Previsão de entrega </h5>
              <p>HFAAF</p>
            </div>
          </div>

        </div>
      </div>
    </Layout>

  );
}
