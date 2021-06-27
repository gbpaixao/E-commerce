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

export function CadastroCliente(): JSX.Element {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex ">

        <img className="d-flex vh-100" src={loginImg} alt="Compras online" />

        <section
          className="d-flex vh-100 w-50 justify-content-center align-items-center px-5"
          style={{ background: '#DEE2E6', width: '100%' }}
        >
          <Col>
            <div className="d-flex flex-column align-items-center">
              <h3 className="mb-4">Cadastro</h3>
              <h4 className="mb-5">Seja bem-vindo ao RedsAju!</h4>
            </div>
            <Form style={{ maxWidth: 315 }}>
              <div className="d-flex">
                <div className="d-table w-50 pd-right-form">
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Nome"
                      autoFocus
                    />
                  </FormGroup>
                </div>
                <div className="d-table w-50 pd-left-form">
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Sobrenome"
                    />
                  </FormGroup>
                </div>
              </div>

              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="CPF"
                  maxLength={14}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="tel"
                  placeholder="Telefone"
                  maxLength={15}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Email"
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="password"
                  placeholder="Senha"
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
                <Button type="submit" className="mb-3" style={{ background: '#5227CC' }}>Cadastrar</Button>

                <div className="d-flex text-center justify-content-center">
                  <p className="pr-1" style={{ color: '#6C757D' }}>
                    Já é um membro?
                  </p>
                  <p className="pl-1 font-weight-bold">
                    <a href="http://localhost:3000/login" style={{ color: '#6C757D' }}>Faça o login</a>
                  </p>
                </div>
              </div>
            </Form>
          </Col>
        </section>
      </div>
    </div>
  );
}
