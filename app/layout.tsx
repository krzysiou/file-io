import React from 'react';

import { StyledComponentsRegistry } from './registry';
import { Header } from '../src/components/shared/Header/Header';
import { Footer } from '../src/components/shared/Footer/Footer';
import { Reset } from '../public/styles/Reset.styles';
import { Globals } from '../public/styles/Globals.styles';
import { config } from '../config/config';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <html lang="en">
        <StyledComponentsRegistry>
          <Reset />
          <Globals />
          <body>
            <Header config={config} />
            {children}
            <Footer />
          </body>
        </StyledComponentsRegistry>
      </html>
    </>
  );
}
