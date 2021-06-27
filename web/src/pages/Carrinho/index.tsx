import { useCarrinho } from '../../contexts/CarrinhoContext';

export default function Carrinho():JSX.Element {
  const { carrinho } = useCarrinho();

  console.log('carrinho', carrinho);
  return (
    <h1>
      Carrin
    </h1>
  );
}
