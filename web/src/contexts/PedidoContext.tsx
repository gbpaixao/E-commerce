import React, { createContext, useContext, useState } from 'react';
import { Pedido } from '../types/PedidoMetadados';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface PedidoContext {
  pedido: Pedido;
  setPedido: (pedido: Pedido) => void
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

  /* Persist */
  function setPedido(newPedido: Pedido) {
    setPedidoContext(newPedido);
    localStorage.setItem('Pedido', JSON.stringify(newPedido));
  }

  /* Provider */
  return (
    <PedidoContext.Provider value={{ pedido, setPedido }}>
      {children}
    </PedidoContext.Provider>
  );
}

export const usePedido = (): PedidoContext => useContext(PedidoContext);
