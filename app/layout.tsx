'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { StyledComponentsRegistry } from './registry';
import { Header } from '../src/components/shared/Header/Header';
import { Footer } from '../src/components/shared/Footer/Footer';
import { Reset } from '../public/styles/Reset.styles';
import { Globals } from '../public/styles/Globals.styles';

const DOWNLOAD_PATHNAME = '/profile/download';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDownload = pathname === DOWNLOAD_PATHNAME;

  const headerComponent = !isDownload && <Header />;
  const footerComponent = !isDownload && <Footer />;

  return (
    <>
      <head>
        <title>file-io</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <html lang="en">
        <StyledComponentsRegistry>
          <Reset />
          <Globals />
          <body>
            {headerComponent}
            {children}
            {footerComponent}
          </body>
        </StyledComponentsRegistry>
      </html>
    </>
  );
}
