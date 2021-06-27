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
import '../CadastroCliente/styles.css';

export function Login(): JSX.Element {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex ">

        <section
          className="d-flex vh-100 w-50 justify-content-center align-items-center px-5"
          style={{ background: '#DEE2E6', width: '100%' }}
        >
          <Col>
            <div className="d-flex flex-column align-items-center">
              <h3 className="mb-4">Login</h3>
              <h4 className="mb-5">Seja bem-vindo ao RedsAju</h4>
            </div>

            <Form style={{ maxWidth: 315 }}>
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
                  <p className="pl-1">
                    <a href=" " style={{ color: 'black' }}>Esqueceu a senha?</a>
                  </p>
                </FormText>
              </FormGroup>
              <div
                className="d-flex flex-column justify-content-center"
              >
                <Button className="mb-3" style={{ background: '#5227CC' }}>Realizar Login</Button>

                <div className="d-flex text-center justify-content-center">
                  <p className="pr-1" style={{ color: '#6C757D' }}>
                    Ainda não é um membro?
                  </p>
                  <p className="pl-1 font-weight-bold">
                    <a href="http://localhost:3000/cadastro" style={{ color: '#6C757D' }}>Faça o cadastro</a>
                  </p>
                </div>
              </div>
            </Form>
          </Col>
        </section>

        <img className="d-flex vh-100" src={loginImg} alt="Compras online" />
      </div>
    </div>
  );
}
