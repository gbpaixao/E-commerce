/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Col, Image, Button,
} from 'react-bootstrap';

import bsCustomFileInput from 'bs-custom-file-input';
import { useHistory } from 'react-router-dom';
import { FormEvent, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Layout } from '../../components/Layout';
import ItemsAmount from '../../components/ItemsAmount';
import { useCarrinho } from '../../contexts/CarrinhoContext';

import { formatCurrency } from '../../utils/utils';
import { getRandomTshirt } from '../../server/getRandomTshirt';
import { styles } from './styles';
import { Pedido } from '../../types/PedidoMetadados';
import { usePedido } from '../../contexts/PedidoContext';
import api from '../../services/api';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

const hoje = `${dd}/${mm}/${yyyy}`;
const entrega = new Date(yyyy, Number(mm), Number(dd));

export function Usuario(): JSX.Element {
  bsCustomFileInput.init();

  const { pedido, setPedido } = usePedido();

  const history = useHistory();

  const clienteId = 1;

  useEffect(() => {
    async function getPedido() {
      const response = await api.get(`/pedidos/${clienteId}`, undefined, false);
      console.log(response);
      setPedido(response.data);
    }
    getPedido();
  }, []);
  return (
    <Layout>

      <div>
        <div className={styles.divUser}>
          <Image
            src={getRandomTshirt()}
            height={50}
            width={100}
            thumbnail
            style={{
              marginLeft: '50px', marginTop: '0.5rem', marginBottom: '0.5rem', borderRadius: '120px', width: '140px', height: '140px',
            }}
          />
          <Col style={{ minWidth: '150px' }}>
            <p>Willians Augusto</p>
            <b>1215</b>
            <br />
            <b>1215</b>
            <br />
            <b>1215</b>
          </Col>

          <Col style={{
            minWidth: '10rem',
            marginRight: '0px',
            marginLeft: '17rem',
          }}
          >
            <Button
              variant="outline-dark"
              size="sm"
            >
              Alterar
            </Button>
          </Col>
        </div>

        <div>
          <b style={{ marginLeft: '1.2rem' }}>Meus pedidos (1)</b>
          <div className={styles.divCancel}>
            <Image
              src={getRandomTshirt()}
              height={140}
              width={104}
              thumbnail
              style={{ marginLeft: '70px', marginTop: '0.5rem', marginBottom: '0.5rem' }}
            />
            <Col style={{ minWidth: '7rem' }}>
              <p>N°</p>
              <b>{pedido.idPedido}</b>

            </Col>
            <Col style={{ minWidth: '12rem' }}>
              <p>Previsão de entrega</p>
              <b>
                {entrega.setDate(entrega.getDate() + 1)}
              </b>
            </Col>
            <Col>
              <p>Total</p>
              <b>R$100,00</b>
            </Col>
            <Col style={{
              minWidth: '15rem',
            }}
            >
              <Button
                style={{
                  minWidth: '10rem',
                  marginBottom: '0.7rem',
                }}
                variant="primary"
                size="sm"
              >
                Acompanhar Pedido
              </Button>
              <Button
                style={{
                  minWidth: '10rem',
                }}
                variant="outline-dark"
                size="sm"
              >
                Cancelar pedido
              </Button>
            </Col>
          </div>
        </div>

      </div>
    </Layout>

  );
}
function setSubmitting(arg0: boolean) {
  throw new Error('Function not implemented.');
}
