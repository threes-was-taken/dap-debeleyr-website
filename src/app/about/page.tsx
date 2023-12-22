'use client';

import { Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

export default function About() {
  const team = [
    {
      name: 'Ingrid De Beleyr',
      function: 'Oprichter en dierenarts',
      image: 'https://placehold.co/100x100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katrijn ',
      function: 'Dierenarts',
      image: 'https://placehold.co/100x100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Jutta Heyninck',
      function: 'Assistente',
      image: 'https://placehold.co/100x100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katharina Gillis',
      function: 'Assistente',
      image: 'https://placehold.co/100x100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Koen Verelst',
      function: 'Manusje van alles',
      image: 'https://placehold.co/100x100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
  ];

  return (
    <>
      <Flex direction="column" gap={4}>
        <Heading as="h1" size="lg" backgroundColor="lightGray" borderRadius="10px" padding="1rem">
          Ons team
        </Heading>
        <Grid templateRows={`repeat(${team.length}, 1fr)`} templateColumns={'repeat(2, 1fr)'}>
          {team.map((member, index) => (
            <GridItem key={member.name} margin="2rem">
              <Flex direction="row" gap={2}>
                <Image
                  src={member.image}
                  alt={member.name}
                  w={'10rem'}
                  justifySelf={index % 2 === 0 ? 'flex-end' : 'flex-start'}
                  borderRadius="10px"
                />
                <Flex direction="column" gap={2}>
                  <Heading as="h2" size="md">
                    {member.name}
                  </Heading>
                  <Heading as="h3" size="sm">
                    {member.function}
                  </Heading>
                  <p>{member.description}</p>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
