import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './page.module.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
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
    <html lang="nl" className={inter.className}>
      <body>
        <Theme accentColor="indigo" grayColor="slate" radius="large" scaling="95%">
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
