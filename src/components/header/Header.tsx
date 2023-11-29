'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Flex
        alignItems="center"
        direction={{ sm: 'column', md: 'row' }}
        justify="space-between"
        padding="1rem"
        marginBottom="2rem"
        gap={{ sm: 4, md: 0 }}
        backgroundColor="primary"
        color="white"
      >
        <Link href="/">
          <Heading size="lg">DAP De Beleyr</Heading>
        </Link>
        <Flex direction="row" alignItems="center">
          <Flex justifyContent="center" gap={4}>
            <Link href="/">
              <Heading size="md">Home</Heading>
            </Link>
            <Link href="/about">
              <Heading size="md">Over ons</Heading>
            </Link>
            <Link href="/contact">
              <Heading size="md">Contact</Heading>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
}
