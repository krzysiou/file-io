import React from 'react';

import { Header } from '../src/components/shared/Header/Header';
import { Footer } from '../src/components/shared/Footer/Footer';

import '../public/scss/globals.scss';

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
