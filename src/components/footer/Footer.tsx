'use client';
import { Flex, Text } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  return (
    <footer>
      <Flex direction="row" alignItems="center" marginTop="auto" padding="1rem" color="lightGray">
        <Flex grow={2} justifyContent="center" gap={4}>
          <Text size="2xl">Made with love by her son.</Text>
        </Flex>
      </Flex>
    </footer>
  );
}
