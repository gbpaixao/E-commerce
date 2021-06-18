import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormText,
} from 'react-bootstrap';
// teste
import loginImg from '../../assets/login.jpg';

export function Login(): JSX.Element {
  return (
    <main className="d-flex" style={{ maxWidth: 1366 }}>
      <section
        className="d-flex vh-100 w-50 justify-content-center align-items-center px-5"
        style={{ background: '#DEE2E6' }}
      >
        <Col>
          <div className="d-flex flex-column align-items-center">
            <h3 className="mb-4">Login</h3>
            <h4 className="mb-5">Seja bem-vindo ao RedsAju</h4>
          </div>

          <Form>
            <FormGroup>
              <FormControl
                type="email"
                placeholder="Email"
                autoFocus
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                type="password"
                placeholder="Senha"
              />
              <FormText className="text-right">
                Esqueceu a senha?
              </FormText>
            </FormGroup>

            <div
              className="d-flex flex-column justify-content-center"
            >
              <Button className="mb-3" style={{ background: '#5227CC' }}>Realizar Login</Button>

              <div className="text-center">
                <p style={{ color: '#6C757D' }}>
                  Ainda não é um membro?
                  {' '}
                  <b>Faça o cadastro</b>
                </p>
              </div>
            </div>
          </Form>
        </Col>
      </section>
      <div
        className="d-flex vh-100 w-50"
      >
        <img src={loginImg} alt="Compras online" />
      </div>
    </main>
  );
}
