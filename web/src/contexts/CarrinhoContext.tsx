import React, { createContext, useContext, useState } from 'react';
import { Carrinho } from '../types/Carrinho';
import { CamisaInitialState } from './CamisaContext';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface CarrinhoContext {
  carrinho: Carrinho,
  setCarrinho: React.Dispatch<React.SetStateAction<Carrinho>>
}

const CarrinhoContext = createContext<CarrinhoContext>({} as CarrinhoContext);

export const CarrinhoInitialState: Carrinho = {
  items: [{
    camisa: CamisaInitialState,
    quantidade: 1,
    numeroJogador: '',
    nomeJogador: '',
  }],
};

export function CarrinhoContextProvider({ children }: ContextChildrenProps):JSX.Element {
  const [carrinho, setCarrinho] = useState(CarrinhoInitialState);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = (): CarrinhoContext => useContext(CarrinhoContext);
