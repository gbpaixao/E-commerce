import {
  Alert, Col, Image, Row, Button,
} from 'react-bootstrap';
import { FiHome } from 'react-icons/fi';
import { ImHome } from 'react-icons/im';
import { RiStore3Fill } from 'react-icons/ri';
import { MdLocalShipping } from 'react-icons/md';

import { Layout } from '../../components/Layout';
import ItemsAmount from '../../components/ItemsAmount';
import { useCarrinho } from '../../contexts/CarrinhoContext';

import { formatCurrency } from '../../utils/utils';
import { styles } from './styles';
import { getRandomTshirt } from '../../server/getRandomTshirt';

export function AcompanharPedido(): JSX.Element {
  return (
    <Layout>

      <div>
        <div className="d-flex align-items-center" style={{ background: 'rgba(222, 226, 230, 1)', borderRadius: '10px' }}>
          <Image
            src={getRandomTshirt()}
            height={140}
            width={104}
            thumbnail
            style={{ marginLeft: '5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}
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
            marginRight: '5rem',
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

        <div
          className="d-flex align-items-center"
          style={{
            marginTop: '2rem',
            marginLeft: '5rem',
            marginRight: '5rem',
          }}
        >

          <div>
            <div
              style={{
                width: '5rem',
                height: '5rem',
                background: 'rgba(222, 226, 230, 1)',
                borderRadius: '100px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
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
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(222, 226, 230, 1)',
              borderRadius: '100px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            >
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
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(222, 226, 230, 1)',
              borderRadius: '100px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            >
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
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            marginRight: '5rem',
            marginLeft: '5rem',
            marginTop: '2rem',
          }}
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
                background: 'rgba(222, 226, 230, 1)',
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            >
              <h5> Código de rastreio</h5>
              <p>HFAAF</p>
            </div>

            <div
              style={{
                background: 'rgba(222, 226, 230, 1)',
                marginLeft: '1rem',
                marginTop: '1rem',
              }}
            >
              <h5> Data de compra </h5>
              <p>HFAAF</p>
            </div>

            <div
              style={{
                background: 'rgba(222, 226, 230, 1)',
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
