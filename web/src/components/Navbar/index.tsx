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
import Avatar from '../../assets/avatar.jpg';

export function Navbar(): JSX.Element {
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
        <h4>RedsAju</h4>

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

          <Button style={{ background: 'transparent', border: 'none' }}>
            <FiShoppingCart size={20} />
          </Button>

          <Col xs={6} md={4}>
            <Image
              src={Avatar}
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
