'use client';

import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Flex direction="row" alignItems={'center'}>
        <Heading size={'lg'}>DAP De Beleyr</Heading>
        <Flex grow={2} justifyContent={'center'} gap={4}>
          <Link href={'/'}>
            <Heading size={'md'}>Home</Heading>
          </Link>
          <Link href={'/about'}>
            <Heading size={'md'}>About</Heading>
          </Link>
          <Link href={'/contact'}>
            <Heading size={'md'}>Contact</Heading>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}
