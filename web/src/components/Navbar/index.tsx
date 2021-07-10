import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  InputGroup,
  Navbar as NavbarBs,
  Row,
} from 'react-bootstrap';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

export function Navbar(): JSX.Element {
  const history = useHistory();

  return (
    <NavbarBs
      style={{
        background: '#5227CC',
      }}
    >
      <Row
        className="d-flex w-100 align-items-center justify-content-between"
        style={{
          marginLeft: '10rem',
          marginRight: '5rem',
          color: '#FFF',
        }}
      >
        <button
          type="button"
          style={{ backgroundColor: 'transparent', border: 'none', color: '#FFF' }}
          onClick={() => history.push('/home')}
        >
          <h4>RedsAju</h4>
        </button>

        <Form>
          <InputGroup className="">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ width: 400 }}
            />
            <InputGroup.Append>
              <Button style={{ background: '#F8D7DA' }}>
                <FiSearch color="#000" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>

        <Row
          className="d-flex align-items-center justify-content-between"
          style={{ width: '12rem' }}
        >
          <p className="mb-0">Usuário</p>

          <Button
            style={{ background: 'transparent', border: 'none' }}
            onClick={() => history.push('/carrinho')}
          >
            <FiShoppingCart size={20} />
          </Button>

          <Col xs={6} md={4}>
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              width={35}
              height={35}
              roundedCircle
            />
          </Col>
        </Row>
      </Row>
    </NavbarBs>
  );
}
