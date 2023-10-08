import React from 'react';

import { StyledComponentsRegistry } from './lib/registry';
import { Header } from '../src/components/shared/Header/Header';
import { Footer } from '../src/components/shared/Footer/Footer';
import { Reset } from '../public/styles/Reset.styles';
import { Globals } from '../public/styles/Globals.styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Reset />
        <Globals />
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
