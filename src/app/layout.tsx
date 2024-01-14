import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
