import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';
import { Camisa } from '../types/Camisa';
import { Carrinho, Item } from '../types/Carrinho';
import { CamisaInitialState } from './CamisaContext';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface CarrinhoContext {
  carrinho: Carrinho;
  addItem: (itemId: string, itemCarrinho: ItemCarrinho) => void;
  // setCarrinho: React.Dispatch<React.SetStateAction<Carrinho>>
}

interface ItemCarrinho {
  quantidade: number;
  numeroJogador: string;
  nomeJogador: string;
}

const CarrinhoContext = createContext<CarrinhoContext>({} as CarrinhoContext);

export function CarrinhoContextProvider({ children }: ContextChildrenProps):JSX.Element {
  const [carrinho, setCarrinho] = useState<Carrinho>(() => {
    const storagedItems = localStorage.getItem('@RedsAju:carrinho');

    if (storagedItems) {
      return JSON.parse(storagedItems);
    }

    return {
      items: [],
    };
  });

  async function addItem(itemId: string, itemCarrinho: ItemCarrinho) {
    const itemsStoraged = [...carrinho.items];
    const { data: camisa } = await api.get(`/camisas/${itemId}`);

    if (itemCarrinho.quantidade > camisa.estoque) {
      return;
    }

    const newItem: Item = {
      camisa,
      ...itemCarrinho,
    };

    setCarrinho({ items: [...itemsStoraged, newItem] });
    localStorage.setItem('@RedsAju:carrinho', JSON.stringify({
      items: [...itemsStoraged, newItem],
    }));
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, addItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = (): CarrinhoContext => useContext(CarrinhoContext);
