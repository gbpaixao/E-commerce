import React, { createContext, useContext, useState } from 'react';
import { Pedido, PedidoMetadados } from '../types/PedidoMetadados';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface PedidoContext {
  pedido: Pedido;
  pedidoMeta: PedidoMetadados[];
  setPedido: (pedido: Pedido) => void,
  setPedidoMeta: (pedido: PedidoMetadados[]) => void,
}

const PedidoContext = createContext<PedidoContext>({} as PedidoContext);

export const PedidoInitialState: Pedido = {
  idPedido: '',
  nomeCamisa: '',
  previsaoEntrega: '',
  valor: '',
  status: '',
  codigoRastreio: '',
  dataCompra: '',
};

export function PedidoContextProvider({ children }: ContextChildrenProps): JSX.Element {
  const [pedido, setPedidoContext] = useState<Pedido>(() => {
    const Pedido_aux = localStorage.getItem('pedido');
    if (Pedido_aux) return JSON.parse(Pedido_aux);

    return PedidoInitialState;
  });

  const [pedidoMeta, setPedidoMetaContext] = useState<PedidoMetadados[]>(() => {
    const pedidoMeta_aux = localStorage.getItem('pedidoMeta');
    if (pedidoMeta_aux) return JSON.parse(pedidoMeta_aux);

    return [];
  });

  /* Persist */
  function setPedido(newPedido: Pedido) {
    setPedidoContext(newPedido);
    localStorage.setItem('pedido', JSON.stringify(newPedido));
  }
  function setPedidoMeta(newPedido: PedidoMetadados[]) {
    setPedidoMetaContext(newPedido);
    localStorage.setItem('pedidoMeta', JSON.stringify(newPedido));
  }

  /* Provider */
  return (
    <PedidoContext.Provider value={{
      pedido, pedidoMeta, setPedido, setPedidoMeta,
    }}
    >
      {children}
    </PedidoContext.Provider>
  );
}

export const usePedido = (): PedidoContext => useContext(PedidoContext);
