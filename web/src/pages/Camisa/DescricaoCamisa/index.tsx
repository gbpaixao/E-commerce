import { useState, useEffect } from 'react';
import {
  Button, Form, Image, InputGroup,
} from 'react-bootstrap';
import { Layout } from '../../../components/Layout';
import CamisaImg from '../../../assets/camisa3.jpg';
import './styles.css';
import ButtonGroup from '../../../components/ButtonGroup';
import ItemsAmount from '../../../components/ItemsAmount';
import { CamisaData } from '../../../types/Camisa';

export default function DescricaoCamisa():JSX.Element {
  /* Initial State (camisa) */
  const arrayTamanhos = ['P', 'M', 'G'];
  const initialState: CamisaData = {
    nomeCamisa: 'Camisa Básica',
    descricao:
    `Camisa Flamengo I 21/22 s/n° Torcedor Adidas Masculina - Vermelho+Preto.
    Alô, Nação Rubro-Negra! Chegou o novo manto do Mengão para a temporada 21/22.
    Inspirado no modelo que os craques do Flamengo usaram no “ano de ouro”,
    a Camisa Flamengo Adidas ...`,
    valor: 150,
    tamanho: Array.from<boolean>({ length: arrayTamanhos.length }).fill(false),
    estoque: 23,
    quantidade: 1,
    numeroJogador: '',
    nomeJogador: '',
  };

  const [camisa, setCamisa] = useState<CamisaData>({ ...initialState });

  useEffect(() => console.log('camisa', camisa),
    [camisa]);

  const handleCallbackTamanho = (childData: boolean[]) => {
    setCamisa({ ...camisa, tamanho: childData });
  };

  const handleCallbackQuantidade = (childData: number) => {
    setCamisa({ ...camisa, quantidade: childData });
  };

  return (
    <Layout>
      <Form>
        <div id="main-container">
          <div id="pictures-container">
            <div id="pictures-container-thumbnails">
              <Image
                src={CamisaImg}
                width={75}
                height={95}
              />
              <Image
                src={CamisaImg}
                width={75}
                height={95}
              />
              <Image
                src={CamisaImg}
                width={75}
                height={95}
              />
              <Image
                src={CamisaImg}
                width={75}
                height={95}
              />
            </div>
            <div id="pictures-container-main">
              <Image
                src={CamisaImg}
                width={300}
                height={440}
              />
            </div>
          </div>

          <div id="description-container">
            <h1>{camisa.nomeCamisa}</h1>

            <p>{camisa.descricao}</p>

            <Form.Group controlId="tamanho-camisa">
              <Form.Label><b>Tamanho</b></Form.Label>
              <br />
              <ButtonGroup array={arrayTamanhos} parentCallback={handleCallbackTamanho} />
            </Form.Group>

            <div id="description-container-input-group">
              <Form.Group controlId="nome-jogador" style={{ width: '200px' }}>
                <Form.Label>
                  <b>Nome Jogador</b>

                </Form.Label>
                <Form.Control
                  aria-label="nome-jogador"
                  value={camisa.nomeJogador}
                  onChange={
                    (event) => setCamisa({ ...camisa, nomeJogador: event.target.value })
                  }
                />
                <Form.Text><small>Máximo de 12 caracteres</small></Form.Text>
              </Form.Group>

              <Form.Group controlId="numero-jogador" style={{ width: '126px' }}>
                <Form.Label><b>Nº do Jogador</b></Form.Label>
                <Form.Control
                  aria-label="numero-jogador"
                  value={camisa.numeroJogador}
                  onChange={
                    (event) => setCamisa({ ...camisa, numeroJogador: event.target.value })
                  }
                />
                <Form.Text><small>Máximo de 2 caracteres</small></Form.Text>
              </Form.Group>
            </div>

          </div>

          <div id="shipping-container">
            <div>
              <h1>{`R$ ${camisa.valor.toFixed(2).replace('.', ',')}`}</h1>
              <small>{`6x de R$ ${(camisa.valor / 6).toFixed(2).replace('.', ',')}`}</small>
            </div>

            <div>
              <Form.Group controlId="quantidade-camisa">
                <Form.Label>Quantidade</Form.Label>
                <ItemsAmount estoque={camisa.estoque} parentCallback={handleCallbackQuantidade} />
                <Form.Text>
                  <small>
                    {`${camisa.estoque} unidades restantes`}
                  </small>
                </Form.Text>
              </Form.Group>
            </div>

            <div>
              <Form.Group controlId="frete">
                <Form.Label>Calcular Frete</Form.Label>
                <InputGroup>
                  <Form.Control aria-label="frete" placeholder="1" />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Ok</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </div>

            <div id="add-to-cart">
              <Button style={{ backgroundColor: '#5227CC', borderColor: '#5227CC' }}>
                Adicionar ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Layout>
  );
}
