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
    const itemsCarrinho = [...carrinho.items];
    const item = itemsCarrinho.find((carrinhoItem) => carrinhoItem.camisa.id === itemId);

    const { data: camisa } = await api.get(`/camisas/${itemId}`);

    const quantidadeAtual = item?.quantidade || 0;
    const quantidade = quantidadeAtual + 1;

    if (quantidade > camisa.estoque) {
      return;
    }

    if (item) {
      item.quantidade = quantidade;
    } else {
      const novoItem: Item = {
        camisa,
        ...itemCarrinho,
      };

      itemsCarrinho.push(novoItem);
    }

    setCarrinho({ items: [...itemsCarrinho] });
    localStorage.setItem('@RedsAju:carrinho', JSON.stringify({
      items: itemsCarrinho,
    }));
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, addItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = (): CarrinhoContext => useContext(CarrinhoContext);
