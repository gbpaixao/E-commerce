import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
// teste
import loginImg from '../../assets/login.jpg';
import './styles.css';

export function Cadastro(): JSX.Element {
  return (
    <main className="d-flex" style={{ maxWidth: 1366 }}>
      <div
        className="d-flex vh-100 timage"
      >
        <img src={loginImg} alt="Compras online" className="w-100" />
      </div>

      <section
        className="d-flex vh-100 justify-content-center align-items-center px-5"
        style={{ background: '#DEE2E6' }}
      >
        <Col>
          <div className="d-flex flex-column align-items-center">
            <h3 className="mb-4">Cadastro</h3>
            <h4 className="mb-5">Seja bem-vindo ao RedsAju</h4>
          </div>
          <div className="d-flex">
            <div className="d-table w-50 pd-right-form">
              <Form>
                <FormGroup>
                  <FormControl
                    type="nome"
                    placeholder="Nome"
                    autoFocus
                  />
                </FormGroup>
              </Form>
            </div>
            <div className="d-table w-50 pd-left-form">
              <Form>
                <FormGroup>
                  <FormControl
                    type="sobrenome"
                    placeholder="Sobrenome"
                    autoFocus
                  />
                </FormGroup>
              </Form>
            </div>
          </div>

          <Form>
            <FormGroup>
              <FormControl
                type="cpf"
                placeholder="CPF"
                autoFocus
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                type="telefone"
                placeholder="Telefone"
                autoFocus
              />
            </FormGroup>

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
                autoFocus
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                type="password"
                placeholder="Confirme sua senha"
              />
            </FormGroup>

            <div
              className="d-flex flex-column justify-content-center"
            >
              <Button className="mb-3" style={{ background: '#5227CC' }}>Cadastrar</Button>

              <div className="d-flex text-center justify-content-center">
                <p className="pr-1" style={{ color: '#6C757D' }}>
                  Já é um membro?
                </p>
                <p className="pl-1 font-weight-bold">
                  <a href="index.tsx" style={{ color: '#6C757D' }}>Faça o login</a>
                </p>
              </div>
            </div>
          </Form>
        </Col>
      </section>
    </main>
  );
}
