/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import { HelmetProvider } from 'react-helmet-async';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Ildi Idraulico - Roma',
  description: 'Servizi di idraulica e riscaldamento professionali a Roma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HelmetProvider>
          {children}
        </HelmetProvider>
      </body>
    </html>
  );
}
