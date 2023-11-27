'use client';

import { ChakraProvider, Flex } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { theme } from '@/theme';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex direction="column" alignItems="center" justifyContent="center" margin="auto" maxW="80%">
          {children}
        </Flex>
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  );
}
