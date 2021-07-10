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
  removeItem: (itemId: string) => void;
  updateItemAmount: (quantidade: number, itemId: string) => void;
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
    const item = itemsCarrinho.find((carrinhoItem) => carrinhoItem.camisa.idCamisa === itemId);

    const { data: camisa } = await api.get(`/camisas/${itemId}`, undefined, false);

    const quantidadeAtual = item?.quantidade || 0;
    const quantidade = quantidadeAtual + 1;

    if (quantidade > camisa.estoque) {
      throw new Error('Quantidade solicitada fora de estoque');
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

    setCarrinho({ items: itemsCarrinho });
    localStorage.setItem('@RedsAju:carrinho', JSON.stringify({
      items: itemsCarrinho,
    }));
  }

  async function removeItem(itemId: string) {
    const itemsFiltrados = carrinho.items.filter((item) => item.camisa.idCamisa !== itemId);

    if (itemsFiltrados.length < carrinho.items.length) {
      setCarrinho({ items: itemsFiltrados });
      localStorage.setItem('@RedsAju:carrinho', JSON.stringify({
        items: itemsFiltrados,
      }));
    }
  }

  async function updateItemAmount(quantidade: number, itemId: string) {
    const { data: camisa } = await api.get(`/camisas/${itemId}`, undefined, false);

    if (quantidade > camisa.estoque) {
      throw new Error('Quantidade solicitada fora de estoque');
    }

    const itemsCarrinho = [...carrinho.items];
    const item = itemsCarrinho.find((carrinhoItem) => carrinhoItem.camisa.idCamisa === itemId);

    if (item) {
      item.quantidade = quantidade;

      setCarrinho({ items: itemsCarrinho });
      localStorage.setItem('@RedsAju:carrinho', JSON.stringify({
        items: itemsCarrinho,
      }));
    }
  }

  return (
    <CarrinhoContext.Provider value={{
      carrinho, addItem, removeItem, updateItemAmount,
    }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = (): CarrinhoContext => useContext(CarrinhoContext);
