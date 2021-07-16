/* eslint-disable import/extensions */
/* eslint-disable max-len */
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Spinner,
} from 'react-bootstrap';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginImg from '../../assets/login.jpg';
import './styles.css';
import api from '../../services/api';
import { useUsuario } from '../../contexts/UsuarioContext';
// eslint-disable-next-line import/order
import bsCustomFileInput from 'bs-custom-file-input';
// eslint-disable-next-line import/order
import { toast } from 'react-toastify';

export default function CadastroUsuario(): JSX.Element {
  bsCustomFileInput.init();
  const { usuario, setUsuario } = useUsuario();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const history = useHistory();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      delete usuario.idUsuario;
      const response = await api.post('/usuario', {
        usuario,
        endereco: {
          rua: usuario.rua,
          bairro: usuario.bairro,
          numero: usuario.numero,
          cep: usuario.cep,
          complemento: usuario.complemento,
          cidade: usuario.cidade,
          estado: usuario.estado,
          pais: usuario.pais,
        },
      }, undefined, false);

      setUsuario(response.data.usuario);
      const auth = await api.post('/auth', {
        email: usuario.email,
        password: usuario.senha,
      });

      const { token, user } = auth.data;
      setUsuario(user);
      localStorage.setItem('authToken', String(token));
      history.push('/home');
      /* Adicionar à contextAPI */
    } catch (error) {
      toast.error('Houve algum problema!');
    }
    setSubmitting(false);
  };
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
                      value={usuario.nome}
                      onChange={(event) => setUsuario({ ...usuario, nome: event.target.value })}
                    />
                  </FormGroup>
                </div>
                <div className="d-table w-50 pd-left-form">
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Sobrenome"
                      value={usuario.sobrenome}
                      onChange={(event) => setUsuario({ ...usuario, sobrenome: event.target.value })}
                    />
                  </FormGroup>
                </div>
              </div>

              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="CPF"
                  maxLength={14}
                  value={usuario.cpf}
                  onChange={(event) => setUsuario({ ...usuario, cpf: event.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="tel"
                  placeholder="Telefone"
                  maxLength={15}
                  value={usuario.telefone}
                  onChange={(event) => setUsuario({ ...usuario, telefone: event.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Email"
                  value={usuario.email}
                  onChange={(event) => setUsuario({ ...usuario, email: event.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="password"
                  placeholder="Senha"
                  value={usuario.senha}
                  onChange={(event) => setUsuario({ ...usuario, senha: event.target.value })}
                />
              </FormGroup>

              {/* <FormGroup>
                <FormControl
                  type="password"
                  placeholder="Confirme sua senha"
                />
              </FormGroup> */}

              <div className="d-flex flex-column align-items-center" style={{ margin: 0 }}>
                <h6 className="mb-5">Endereço</h6>
              </div>
              <div style={{ margin: 0 }}>
                <div className="d-flex">
                  <div className="d-table pd-right-form" style={{ width: '70%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Rua"
                        autoFocus
                        value={usuario.rua}
                        onChange={(event) => setUsuario({ ...usuario, rua: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                  <div className="d-table pd-left-form" style={{ width: '30%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Número"
                        value={usuario.numero}
                        onChange={(event) => setUsuario({ ...usuario, numero: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-table w-50 pd-right-form">
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Bairro"
                        autoFocus
                        value={usuario.bairro}
                        onChange={(event) => setUsuario({ ...usuario, bairro: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                  <div className="d-table w-50 pd-left-form">
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Complemento"
                        value={usuario.complemento}
                        onChange={(event) => setUsuario({ ...usuario, complemento: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-table pd-right-form" style={{ width: '50%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Cidade"
                        autoFocus
                        value={usuario.cidade}
                        onChange={(event) => setUsuario({ ...usuario, cidade: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                  <div className="d-table pd-left-form" style={{ width: '50%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="CEP"
                        maxLength={8}
                        value={usuario.cep}
                        onChange={(event) => setUsuario({ ...usuario, cep: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="d-table pd-right-form" style={{ width: '50%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="Estado"
                        autoFocus
                        value={usuario.estado}
                        onChange={(event) => setUsuario({ ...usuario, estado: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                  <div className="d-table pd-left-form" style={{ width: '50%' }}>
                    <FormGroup>
                      <FormControl
                        type="text"
                        placeholder="País"
                        value={usuario.pais}
                        onChange={(event) => setUsuario({ ...usuario, pais: event.target.value })}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-center"
              >

                <Button
                  type="submit"
                  className="mb-3"
                  onClick={handleSubmit}
                  style={{ background: '#5227CC' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Spinner as="span" size="sm" animation="border" role="status" />
                        {'  Cadastrando...'}
                      </div>
                    )
                    : 'Cadastrar'}

                </Button>

                <div className="d-flex text-center justify-content-center">
                  <p className="pr-1" style={{ color: '#6C757D' }}>
                    Já é um membro?
                  </p>
                  <p className="pl-1 font-weight-bold">
                    <button
                      onClick={() => history.push('/')}
                      style={{
                        color: '#6C757D', backgroundColor: 'transparent', border: 0, fontWeight: 'bold',
                      }}
                      type="button"
                    >
                      <a href=" " style={{ color: '#6C757D' }}>Faça o login</a>

                    </button>
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
