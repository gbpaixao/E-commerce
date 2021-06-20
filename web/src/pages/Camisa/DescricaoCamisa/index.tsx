import { useState, useEffect } from 'react';
import {
  Button, Form, Image, InputGroup,
} from 'react-bootstrap';
import { Layout } from '../../../components/Layout';
import Camisa from '../../../assets/camisa3.jpg';
import './styles.css';
import ButtonGroup from '../../../components/ButtonGroup';
import ItemsAmount from '../../../components/ItemsAmount';

export default function DescricaoCamisa():JSX.Element {
  /* Tamanho */
  const arrayTamanhos = ['P', 'M', 'G'];
  const [tamanho, setTamanho] = useState<boolean[]>(
    Array.from<boolean>({ length: arrayTamanhos.length }).fill(false),
  );
  const handleCallbackTamanho = (childData: boolean[]) => {
    setTamanho(childData);
  };

  /* Quantidade */
  const [estoque, setEstoque] = useState<number>(23);
  const [quantidade, setQuantidade] = useState<number>(1);
  const handleCallbackQuantidade = (childData: number) => {
    setQuantidade(childData);
  };

  useEffect(() => console.log('quantidade', quantidade),
    [quantidade]);

  useEffect(() => console.log('tamanho', tamanho),
    [tamanho]);

  return (
    <Layout>
      <Form>
        <div id="main-container">
          <div id="pictures-container">
            <div id="pictures-container-thumbnails">
              <Image
                src={Camisa}
                width={75}
                height={95}
              />
              <Image
                src={Camisa}
                width={75}
                height={95}
              />
              <Image
                src={Camisa}
                width={75}
                height={95}
              />
              <Image
                src={Camisa}
                width={75}
                height={95}
              />
            </div>
            <div id="pictures-container-main">
              <Image
                src={Camisa}
                width={300}
                height={440}
              />
            </div>
          </div>

          <div id="description-container">
            <h1>Nome da Camisa</h1>

            <p>
              Camisa Flamengo I 21/22 s/n°
              Torcedor Adidas Masculina - Vermelho+Preto
              <br />
              <br />
              Alô, Nação Rubro-Negra! Chegou o novo manto do Mengão para a temporada 21/22.
              Inspirado no modelo que os craques do Flamengo usaram no “ano de ouro”,
              a Camisa Flamengo Adidas ...
            </p>

            <Form.Group controlId="tamanho-camisa">
              <Form.Label><b>Tamanho</b></Form.Label>
              <br />
              <ButtonGroup array={arrayTamanhos} parentCallback={handleCallbackTamanho} />
            </Form.Group>

            <div id="description-container-input-group">
              <Form.Group controlId="nome-jogador" style={{ width: '200px' }}>
                <Form.Label><b>Nome Jogador</b></Form.Label>
                <Form.Control aria-label="nome-jogador" />
                <Form.Text><small>Máximo de 12 caracteres</small></Form.Text>
              </Form.Group>

              <Form.Group controlId="numero-jogador" style={{ width: '126px' }}>
                <Form.Label><b>Nº do Jogador</b></Form.Label>
                <Form.Control aria-label="numero-jogador" />
                <Form.Text><small>Máximo de 2 caracteres</small></Form.Text>
              </Form.Group>
            </div>

          </div>

          <div id="shipping-container">
            <div>
              <h1>R$ 150,00</h1>
              <small>6x de R$ 25,00</small>
            </div>

            <div>
              <Form.Group controlId="quantidade-camisa">
                <Form.Label>Quantidade</Form.Label>
                <ItemsAmount estoque={estoque} parentCallback={handleCallbackQuantidade} />
                <Form.Text>
                  <small>
                    {estoque}
                    {' '}
                    unidades restantes
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
