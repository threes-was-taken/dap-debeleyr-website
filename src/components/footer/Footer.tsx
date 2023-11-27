'use client';
import { Flex, Text } from '@chakra-ui/react';

export function Footer(): JSX.Element {
  return (
    <footer style={{ marginTop: 'auto', color: '#919297' }}>
      <Flex direction="row" alignItems="center" margin="1rem">
        <Flex grow={2} justifyContent="center" gap={4}>
          <Text size="2xl">Made with love by her son.</Text>
        </Flex>
      </Flex>
    </footer>
  );
}
