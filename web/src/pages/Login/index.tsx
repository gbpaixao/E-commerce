import { useState, FormEvent, useEffect } from 'react';

import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormText,
  Spinner,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import loginImg from '../../assets/login.jpg';
import api from '../../services/api';

interface Auth {
  email: string;
  password: string;
}

export function Login(): JSX.Element {
  useEffect(() => {
    localStorage.removeItem('authToken');
  }, []);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const history = useHistory();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await api.post('/auth', {
        email: state.email,
        password: state.password,
      });

      const { token } = response.data;
      console.log('token', token);
      localStorage.setItem('authToken', String(token));

      history.push('/home');
    } catch (error) {
      toast.error('Houve algum problema com o servidor!');
    }
    setSubmitting(false);
  };

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
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                autoFocus
              />
            </FormGroup>

            <FormGroup>
              <FormControl
                type="password"
                placeholder="Senha"
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
              />
              <FormText className="text-right">Esqueceu a senha?</FormText>
            </FormGroup>

            <div className="d-flex flex-column justify-content-center">
              <Button
                type="submit"
                className="mb-3"
                style={{ background: '#5227CC' }}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Spinner
                      as="span"
                      size="sm"
                      animation="border"
                      role="status"
                      style={{ marginRight: 10 }}
                    />
                    Logando...
                  </div>
                ) : (
                  'Realizar Login'
                )}
              </Button>

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
      <div className="d-flex vh-100 w-50">
        <img src={loginImg} alt="Compras online" />
      </div>
    </main>
  );
}
