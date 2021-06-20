import { ReactNode } from 'react';
import { Navbar } from '../Navbar';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />
      <div
        style={{
          margin: '0 11rem',
          padding: '2.5rem 0',
        }}
      >
        {children}
      </div>
    </div>
  );
}
