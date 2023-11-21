'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { theme } from '@/theme';
import { Header } from '@/components/header';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Header />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
