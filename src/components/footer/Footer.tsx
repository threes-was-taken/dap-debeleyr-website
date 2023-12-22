'use client';
import { Flex, Text } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  return (
    <footer>
      <Flex direction="row" alignItems="center" padding="1rem" color="gray" shrink={0}>
        <Flex grow={2} justifyContent="center" gap={4}>
          <Text size="2xl">Made with love by her son. ❤️ &copy;</Text>
        </Flex>
      </Flex>
    </footer>
  );
}
