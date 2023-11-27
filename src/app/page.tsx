'use client';

import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" margin="auto" maxW="80%">
      <Flex marginBottom="2rem" gap={4} direction="column">
        <Heading>Welcome to DAP - De Beleyr!</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id urna vitae sapien venenatis cursus. Nullam
          lacinia, sapien euismod condimentum commodo, eros nisl ullamcorper magna, et ultrices quam tortor sit amet
          arcu. Sed euismod, augue vel sollicitudin ultricies, nisl sem lacinia quam, sed ultricies eros nisl vitae
          justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.
          Donec auctor, nisl ac ultricies facilisis, ligula sem lacinia magna, ac vehicula lacus felis sit amet nunc.
          Sed euismod, augue vel sollicitudin ultricies, nisl sem lacinia quam, sed ultricies eros nisl vitae justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec
          auctor, nisl ac ultricies facilisis, ligula sem lacinia magna, ac vehicula lacus felis sit amet nunc.
        </Text>
      </Flex>
      <Image alt="Team" src="https://placehold.co/800x400" />
    </Flex>
  );
}
