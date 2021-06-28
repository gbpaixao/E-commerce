import React, { createContext, useContext, useState } from 'react';
import { Camisa } from '../types/Camisa';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface CamisaContext {
  camisa: Camisa,
  setCamisa: (camisa: Camisa) => void
}

const CamisaContext = createContext<CamisaContext>({} as CamisaContext);

export const CamisaInitialState: Camisa = {
  id: '',
  nomeCamisa: '',
  descricao: '',
  valor: 0.00,
  tamanho: '',
  estoque: 0,
  pictures: [],
  mainPicture: '',
  fornecedor: '',
  tipo: '',
};

export function CamisaContextProvider({ children }: ContextChildrenProps):JSX.Element {
  const [camisa, setCamisaContext] = useState<Camisa>(() => {
    const camisa_aux = localStorage.getItem('camisa');
    if (camisa_aux) return JSON.parse(camisa_aux);

    return CamisaInitialState;
  });

  /* Persist */
  function setCamisa(newCamisa: Camisa) {
    setCamisaContext(newCamisa);
    localStorage.setItem('camisa', JSON.stringify(newCamisa));
  }

  /* Provider */
  return (
    <CamisaContext.Provider value={{ camisa, setCamisa }}>
      {children}
    </CamisaContext.Provider>
  );
}

export const useCamisa = (): CamisaContext => useContext(CamisaContext);
