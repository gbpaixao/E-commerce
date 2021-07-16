import { ReactNode } from 'react';
import { useUsuario } from '../../contexts/UsuarioContext';
import { MiniNavbar } from '../MiniNavbar';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const { usuario } = useUsuario();
  const { admin } = usuario;
  return (
    <div>
      <Navbar />

      {admin && (<MiniNavbar />)}
      <div
        style={{
          margin: '0 11rem',
          padding: '2.5rem 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
