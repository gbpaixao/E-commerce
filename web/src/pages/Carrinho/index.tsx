/* eslint-disable @typescript-eslint/no-empty-function */
import { Col, Image, Row } from 'react-bootstrap';
import { Layout } from '../../components/Layout';

// import CamisaImg from '../../assets/camisa6.jpg';
import ItemsAmount from '../../components/ItemsAmount';

export function Carrinho(): JSX.Element {
  return (
    <Layout>
      <div className="d-flex">
        <h3 style={{ marginLeft: 'calc(157px + 6rem + 15px)' }}>PRODUTO</h3>
        <h3 style={{ marginLeft: '12.75rem' }}>QTD</h3>
        <h3 style={{ marginLeft: '13rem' }}>SUBTOTAL</h3>
      </div>

      <div className="d-flex align-items-center">
        <Image
          src=""
          height={157}
          width={157}
          style={{ marginRight: '6rem' }}
          thumbnail
        />

        <Col style={{ marginRight: '6rem', minWidth: '15rem' }}>
          <h4>Camisa do Flamengo</h4>
          <h3>
            <b>R$ 150,00</b>
          </h3>
        </Col>

        <Col style={{ marginRight: '6rem' }}>
          <ItemsAmount setCounter={() => {}} counter={0} />
        </Col>

        <Col>
          <h4 style={{ minWidth: '10rem' }}>
            <b>R$ 1500,00</b>
          </h4>
        </Col>

        <Col />
      </div>
    </Layout>
  );
}
