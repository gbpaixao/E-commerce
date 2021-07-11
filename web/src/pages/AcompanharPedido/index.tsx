import {
    Alert, Col, Image, Row,
  } from 'react-bootstrap';
  import { FiTrash2 } from 'react-icons/fi';
  
  import { Layout } from '../../components/Layout';
  import ItemsAmount from '../../components/ItemsAmount';
  import { useCarrinho } from '../../contexts/CarrinhoContext';
  
  import { formatCurrency } from '../../utils/utils';
  import { styles } from './styles';
  import { getRandomTshirt } from '../../server/getRandomTshirt';
  
  export function AcompanharPedido(): JSX.Element {
    const { carrinho, removeItem, updateItemAmount } = useCarrinho();
  
    console.log(carrinho);
  
    return (
      <Layout>
        {carrinho.items.length ? (
          <div>
            <div className="d-flex">
              <h3 style={{ marginLeft: 'calc(157px + 6rem + 15px)' }}>CAMISA</h3>
              <h3 style={{ marginLeft: '12.75rem' }}>QTD</h3>
              <h3 style={{ marginLeft: '13.5rem' }}>SUBTOTAL</h3>
            </div>
            {carrinho.items?.map((item) => (
              <div key={item.camisa.idCamisa} className="d-flex align-items-center">
                <Image
                  src={getRandomTshirt()}
                  height={157}
                  width={157}
                  style={{ marginRight: '6rem' }}
                  thumbnail
                />
                <Col style={{ marginRight: '6rem', minWidth: '15rem' }}>
                  <h4>{item.camisa.nomeCamisa}</h4>
                  <h3>
                    <b>{formatCurrency(item.camisa.valor)}</b>
                  </h3>
                </Col>
                <Col style={{ marginRight: '6rem' }}>
                  <ItemsAmount
                    setCounter={(quantidade: number) => (
                      updateItemAmount(quantidade, item.camisa.idCamisa))}
                    counter={item.quantidade}
                  />
                </Col>
                <Col>
                  <h4 style={{ minWidth: '10rem' }}>
                    <b>{formatCurrency(item.camisa.valor * item.quantidade)}</b>
                  </h4>
                </Col>
                <Col>
                  <button
                    type="button"
                    className={styles.trashButton}
                    onClick={() => removeItem(item.camisa.idCamisa)}
                  >
                    <FiTrash2 color="#5227CC" size={24} />
                  </button>
                </Col>
              </div>
            ))}
          </div>
        ) : (
          <Alert variant="secondary">
            Seu carrinho está vazio
          </Alert>
        )}
      </Layout>
    );
  }
  