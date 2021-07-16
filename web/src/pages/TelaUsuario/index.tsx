/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Col, Image, Button, Alert,
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
import { useUsuario } from '../../contexts/UsuarioContext';

export function Usuario(): JSX.Element {
  bsCustomFileInput.init();
  const { usuario, setUsuario } = useUsuario();
  const { pedidoMeta, setPedidoMeta } = usePedido();

  const history = useHistory();

  const clienteId = 1;
  useEffect(() => {
    async function getPedido() {
      const response = await api.get(`/pedidos/${clienteId}`, undefined, false);
      console.log(response);
      setPedidoMeta(response.data);
    }
    getPedido();
  }, []);

  const formatData = (dataEntrega: string) => {
    const entrega = new Date(dataEntrega);
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(entrega);
  };

  const handleAcompanhar = async (idAcompanhar: string) => {
    const response = await api.get(`/pedidos/${clienteId}/${idAcompanhar}`);
    history.push(`/acompanharPedido/${idAcompanhar}`);
  };

  const handleCancelar = async (idCancel: string) => {
    const response = await api.delete(`/pedidos/${clienteId}/${idCancel}`);
  };
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
          <Col style={{ minWidth: '160px' }}>
            <p style={{ fontWeight: 'bold', margin: 0 }}>{`${usuario.nome} ${usuario.sobrenome}`}</p>
            <p style={{ margin: 0 }}>{usuario.telefone}</p>
            <p style={{ margin: 0 }}>{usuario.email}</p>
            <p style={{ margin: 0 }}>
              {`${usuario.rua}, ${usuario.numero}`}
            </p>
            <p style={{ margin: 0 }}>
              {`${usuario.cidade} - ${usuario.estado}`}
            </p>
          </Col>

          <Col style={{
            minWidth: '10rem',
            marginRight: '0px',
            marginLeft: '17rem',
          }}
          >
            {/* {  <Button
              variant="outline-dark"
              size="sm"
            >
              Alterar
            </Button>} */}
          </Col>
        </div>

        <div>
          <b style={{ marginLeft: '1.2rem' }}>
            Meus pedidos (
            {pedidoMeta.length}
            )
          </b>

          {pedidoMeta.length ? (
            <div>

              {pedidoMeta?.map((item, index) => (

                <div key={index} className={styles.divCancel}>
                  <Image
                    src={getRandomTshirt()}
                    height={140}
                    width={104}
                    thumbnail
                    style={{ marginLeft: '70px', marginTop: '0.5rem', marginBottom: '0.5rem' }}
                  />
                  <Col style={{ minWidth: '7rem' }}>
                    <p>N°</p>
                    <b>
                      {item.idPedido}

                      {console.log(item, 'item')}

                    </b>

                  </Col>
                  <Col style={{ minWidth: '12rem' }}>
                    <p>Previsão de entrega</p>
                    <b>
                      {formatData(item.previsaoEntrega)}
                    </b>
                  </Col>
                  <Col>
                    <p>Total</p>
                    <b>{item.valor}</b>
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
                      onClick={() => handleAcompanhar(item.idPedido)}

                    >
                      Acompanhar Pedido
                    </Button>
                    <Button
                      style={{
                        minWidth: '10rem',
                      }}
                      variant="outline-dark"
                      size="sm"
                      onClick={() => handleCancelar(item.idPedido)}

                    >
                      Cancelar pedido
                    </Button>
                  </Col>
                </div>
              ))}
            </div>
          ) : (
            <Alert variant="secondary">
              Você ainda não realizou nenhum pedido
            </Alert>
          )}
        </div>

      </div>
    </Layout>

  );
}
