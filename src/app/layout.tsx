import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

const inter = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DAP De Beleyr',
  description: 'DAP De Beleyr, Belgian veterinary practice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
