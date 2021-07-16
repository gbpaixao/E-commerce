import React, { createContext, useContext, useState } from 'react';
import { Usuario } from '../types/Usuario';

interface ContextChildrenProps {
  children: React.ReactNode
}

interface UsuarioContext {
  usuario: Usuario,
  setUsuario: (usuario: Usuario) => void
}

const UsuarioContext = createContext<UsuarioContext>({} as UsuarioContext);

export const UsuarioInitialState: Usuario = {
  idUsuario: 0,
  admin: false,
  cpf: '',
  senha: '',
  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
  rua: '',
  bairro: '',
  numero: '',
  cep: '',
  complemento: '',
  cidade: '',
  estado: '',
  pais: '',
};

export function UsuarioContextProvider({ children }: ContextChildrenProps):JSX.Element {
  const [usuario, setUsuarioContext] = useState<Usuario>(() => {
    const usuario_aux = localStorage.getItem('usuario');
    if (usuario_aux) return JSON.parse(usuario_aux);

    return UsuarioInitialState;
  });

  /* Persist */
  function setUsuario(newUsuario: Usuario) {
    setUsuarioContext(newUsuario);
    localStorage.setItem('usuario', JSON.stringify(newUsuario));
  }

  /* Provider */
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export const useUsuario = (): UsuarioContext => useContext(UsuarioContext);
