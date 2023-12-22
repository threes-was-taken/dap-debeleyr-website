'use client';

import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import { MdOutlinePinDrop, MdOutlinePhoneIphone, MdOutlinePhone, MdOutlineEmail } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1000px)" rowGap={4} columnGap={4}>
        <GridItem padding="1rem">
          <Flex marginBottom="2rem" gap={4} direction="column" justifyContent="center">
            <Heading backgroundColor="lightGray" borderRadius="10px" padding="1rem">
              Dierenartsenpraktijk De Beleyr
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id urna vitae sapien venenatis cursus.
              Nullam lacinia, sapien euismod condimentum commodo, eros nisl ullamcorper magna, et ultrices quam tortor
              sit amet arcu. Sed euismod, augue vel sollicitudin ultricies, nisl sem lacinia quam, sed ultricies eros
              nisl vitae justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Nulla facilisi. Donec auctor, nisl ac ultricies facilisis, ligula sem lacinia magna, ac vehicula lacus
              felis sit amet nunc. Sed euismod, augue vel sollicitudin ultricies, nisl sem lacinia quam, sed ultricies
              eros nisl vitae justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Nulla facilisi. Donec auctor, nisl ac ultricies facilisis, ligula sem lacinia magna, ac vehicula
              lacus felis sit amet nunc.
            </Text>
          </Flex>
        </GridItem>
        <GridItem padding="1rem">
          <Image borderRadius="10px" alt="Team" src="https://placehold.co/700x600" />
        </GridItem>
        <GridItem padding="1rem">
          <div></div>
        </GridItem>
        <GridItem padding="1rem">
          <Box borderRadius="10px" backgroundColor="lightGray" maxW={'700px'} padding="1rem">
            <Flex direction="column">
              <Heading as="h2" size="md" padding="1rem">
                Contact
              </Heading>
              <Flex direction="column" padding="1rem" gap={4}>
                <Flex align="center" gap={4}>
                  <Icon w="1.43rem" h="1.43rem" as={MdOutlinePhone} />
                  <Link href="tel:+3237752026">+32 (0)3 775 20 26</Link>
                </Flex>
                <Flex align="center" gap={4}>
                  <Icon w="1.43rem" h="1.43rem" as={MdOutlinePhoneIphone} />
                  <Link href="tel:+32475658433">+32 475 65 84 33</Link>
                </Flex>
                <Flex align="center" gap={4}>
                  <Icon w="1.43rem" h="1.43rem" as={MdOutlineEmail} />{' '}
                  <Link href="mailto:dr.idb@skynet.be">dr.idb@skynet.be</Link>
                </Flex>
                <Flex align="center" gap={4}>
                  <Icon w="1.43rem" h="1.43rem" as={MdOutlinePinDrop} /> <Text>Grote Baan 308, 9120 Melsele</Text>
                </Flex>
              </Flex>
              <Link
                href="https://maps.app.goo.gl/Zt1JYziG3cY8DCks6"
                target="_blank"
                padding="1.25rem"
                borderRadius="10px"
                border="2px solid"
                borderColor="primary"
                textAlign="center"
                width="100%"
                _hover={{ textDecoration: 'none', backgroundColor: 'primary', color: 'white', transition: '0.5s' }}
              >
                ROUTE
              </Link>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
