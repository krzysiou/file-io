import React from 'react';

import { Header } from '../src/components/Header/Header';
import { Footer } from '../src/components/Footer/Footer';

import '../src/scss/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
