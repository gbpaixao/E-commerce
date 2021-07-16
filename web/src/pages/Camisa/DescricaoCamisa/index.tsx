/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button, Form, Image, InputGroup, Spinner,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Layout } from '../../../components/Layout';
import ItemsAmount from '../../../components/ItemsAmount';
import { BodyParams } from '../../../types/BodyParams';
import { styles } from './styles';
import { useCamisa } from '../../../contexts/CamisaContext';
import { useCarrinho } from '../../../contexts/CarrinhoContext';
import { getRandomTshirt } from '../../../server/getRandomTshirt';

export default function DescricaoCamisa(): JSX.Element {
  const { camisa, setCamisa } = useCamisa();
  const { addItem } = useCarrinho();
  const [itemCarrinho, setItemCarrinho] = useState({
    quantidade: 1,
    numeroJogador: '',
    nomeJogador: '',
  });
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const history = useHistory();

  const admin = false;

  /* Handle Submit */
  const handleSubmitCart = async () => {
    try {
      setSubmitting(true);
      addItem(camisa.id, itemCarrinho);

      history.push('/carrinho');
    } catch (error) {
      toast.error('Houve algum problema!');
    }
    setSubmitting(false);
  };

  const handleSubmitUpdate = async () => {
    try {
      setSubmitting(true);

      history.push(`/editarCamisa/${camisa.id}`);
    } catch (error) {
      toast.error('Houve algum problema!');
    }
    setSubmitting(false);
  };

  const handleSubmitDelete = async () => {
    try {
      setSubmitting(true);

      await api.delete(`/camisas/${camisa.id}`);

      history.push('/home');
    } catch (error) {
      toast.error('Houve algum problema!');
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <Form>
        <div className={styles.mainContainer}>
          <div className={styles.picturesContainer}>
            <div className={styles.picturesContainerThumbnails}>
              <Image src={getRandomTshirt()} width={75} height={95} />
              <Image src={getRandomTshirt()} width={75} height={95} />
              <Image src={getRandomTshirt()} width={75} height={95} />
              <Image src={getRandomTshirt()} width={75} height={95} />
            </div>

            <div>
              <Image src={getRandomTshirt()} width={300} height={440} />
            </div>
          </div>

          <div className={styles.descriptionContainer}>
            <h1>{camisa?.nomeCamisa}</h1>

            <p>{camisa?.descricao}</p>

            <div>
              <Form.Group controlId="tamanho-camisa">
                <Form.Label>
                  <b>Tamanho</b>
                </Form.Label>
                <br />
                <Button
                  style={{
                    backgroundColor: '#5227CC',
                    borderColor: '#5227CC',
                    boxShadow: 'none',
                    width: '70px',
                    cursor: 'default',
                  }}
                >
                  {camisa?.tamanho}
                </Button>
              </Form.Group>

              { !admin && (
                <div className={styles.descriptionContainerInputGroup}>
                  <Form.Group controlId="nome-jogador" style={{ width: '200px' }}>
                    <Form.Label>
                      <b>Nome Jogador</b>
                    </Form.Label>
                    <Form.Control
                      aria-label="nome-jogador"
                      value={itemCarrinho?.nomeJogador}
                      onChange={(event) => setItemCarrinho({
                        ...itemCarrinho,
                        nomeJogador: event.target.value,
                      })}
                      maxLength={12}
                    />
                    <Form.Text>
                      <small>Máximo de 12 caracteres</small>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId="numero-jogador" style={{ width: '126px' }}>
                    <Form.Label>
                      <b>Nº do Jogador</b>
                    </Form.Label>
                    <Form.Control
                      aria-label="numero-jogador"
                      value={itemCarrinho?.numeroJogador}
                      onChange={(event) => {
                        setItemCarrinho({
                          ...itemCarrinho,
                          numeroJogador: event.target.value,
                        });
                      }}
                      maxLength={2}
                    />
                    <Form.Text>
                      <small>Máximo de 2 caracteres</small>
                    </Form.Text>
                  </Form.Group>
                </div>
              )}
            </div>
          </div>

          <div className={styles.shippingContainer}>
            <div>
              <h1>{`R$ ${camisa?.valor?.toFixed(2).replace('.', ',')}`}</h1>
              <small>
                {`6x de R$ ${(camisa?.valor / 6)
                  .toFixed(2)
                  .replace('.', ',')}`}

              </small>
            </div>

            <div>
              { !admin && (
                <Form.Group controlId="quantidade-camisa">
                  <Form.Label><b>Quantidade</b></Form.Label>
                  <ItemsAmount
                    counter={itemCarrinho?.quantidade}
                    setCounter={(childData: number) => {
                      setItemCarrinho({ ...itemCarrinho, quantidade: childData });
                    }}
                    estoque={camisa?.estoque}
                  />
                  <Form.Text>
                    <small>{`${camisa?.estoque} unidades restantes`}</small>
                  </Form.Text>
                </Form.Group>
              )}

              { admin && (
              <Form.Group controlId="quantidade-camisa">
                <Form.Label><b>Quantidade</b></Form.Label>
                <Form.Text>
                  {`${camisa?.estoque} unidades restantes`}
                </Form.Text>
              </Form.Group>
              )}
            </div>

            { !admin && (
            <div>
              <Form.Group controlId="frete">
                <Form.Label>Calcular Frete</Form.Label>
                <InputGroup>
                  <Form.Control aria-label="frete" placeholder="1" />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Ok</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </div>
            )}

            <div className={styles.addToCart}>
              { !admin && (
              <Button
                type="submit"
                onClick={handleSubmitCart}
                style={{
                  backgroundColor: '#5227CC',
                  borderColor: '#5227CC',
                  width: '100%',
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}
                  >
                    <Spinner
                      as="span"
                      size="sm"
                      animation="border"
                      role="status"
                    />
                    {'  Adicionando...'}
                  </div>
                ) : (
                  'Adicionar ao carrinho'
                )}
              </Button>
              )}

              { admin && (
                <div style={{
                  display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', height: 100,
                }}
                >
                  <Button
                    type="submit"
                    onClick={handleSubmitUpdate}
                    style={{
                      backgroundColor: '#5227CC',
                      borderColor: '#5227CC',
                      width: '100%',
                    }}
                    disabled={isSubmitting}
                  >
                    Editar Camisa
                  </Button>

                  <Button
                    type="submit"
                    onClick={handleSubmitDelete}
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: '#495057',
                      color: '#495057',
                      width: '100%',
                    }}
                    disabled={isSubmitting}
                  >
                    Excluir Camisa
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
    </Layout>
  );
}
