import { ReactNode } from 'react';
import { MiniNavbar } from '../MiniNavbar';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  const admin = true;
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
