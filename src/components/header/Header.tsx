'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Flex alignItems="center" direction="row" justify="space-between" margin="1rem">
        <Link href="/">
          <Heading size="lg">DAP De Beleyr</Heading>
        </Link>
        <Flex direction="row" alignItems="center">
          <Flex justifyContent="center" gap={4}>
            <Link href="/">
              <Heading size="md">Home</Heading>
            </Link>
            <Link href="/about">
              <Heading size="md">About</Heading>
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
