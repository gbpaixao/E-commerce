import React, { createContext, useContext, useState } from 'react';
import { Camisa } from '../types/Camisa';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface CamisaContext {
  camisa: Camisa,
  setCamisa: React.Dispatch<React.SetStateAction<Camisa>>
}

const CamisaContext = createContext<CamisaContext>({} as CamisaContext);

export const CamisaInitialState: Camisa = {
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
  const [camisa, setCamisa] = useState(CamisaInitialState);

  return (
    <CamisaContext.Provider value={{ camisa, setCamisa }}>
      {children}
    </CamisaContext.Provider>
  );
}

export const useCamisa = (): CamisaContext => useContext(CamisaContext);
