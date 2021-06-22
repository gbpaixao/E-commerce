/* eslint-disable global-require */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button, Form, Image, InputGroup,
} from 'react-bootstrap';
import { Layout } from '../../../components/Layout';
import './styles.css';
import ButtonGroup from '../../../components/ButtonGroup';
import ItemsAmount from '../../../components/ItemsAmount';
import { ICamisa } from '../../../types/Camisa';
import api from '../../../services/api';
import { IParams } from '../../../types/Params';
import { names as imgNames, paths as imgPaths } from '../../../assets';

export default function DescricaoCamisa():JSX.Element {
  /* Initial State */
  const arrayTamanhos = ['P', 'M', 'G'];
  const [camisa, setCamisa] = useState<ICamisa>({
    nomeCamisa: '',
    descricao: '',
    valor: 0,
    tamanho: Array.from<boolean>({ length: arrayTamanhos.length }).fill(false),
    estoque: 0,
    quantidade: 1,
    numeroJogador: '',
    nomeJogador: '',
    pictures: [],
    mainPicture: '',
  } as ICamisa);

  /* Fetch from server */
  const { id: idCamisa } = useParams<IParams>();
  useEffect(() => {
    api.get(`/camisa/${idCamisa}`).then((res) => setCamisa({ ...res.data[0] }));
  }, [idCamisa]);

  /* Handle Callback */
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
              {camisa.pictures.map((picture, index) => {
                const assetIndex = imgNames.indexOf(picture);
                return (
                  <Image
                  // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    src={imgPaths[assetIndex]}
                    width={75}
                    height={95}
                  />
                );
              })}
            </div>
            <div id="pictures-container-main">

              <Image
                src={imgPaths[imgNames.indexOf(camisa.mainPicture)]}
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
                  maxLength={12}
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
                  maxLength={2}
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

        {/* <Dropzone /> */}
      </Form>
    </Layout>
  );
}
