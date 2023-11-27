'use client';

import { Flex, Heading, Image } from '@chakra-ui/react';

export default function About() {
  const team = [
    {
      name: 'Ingrid De Beleyr',
      function: 'Oprichter en dierenarts',
      image: 'https://placehold.co/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katrijn ',
      function: 'Dierenarts',
      image: 'https://placehold.co/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Jutta Heyninck',
      function: 'Assistente',
      image: 'https://placehold.co/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katharina Gillis',
      function: 'Assistente',
      image: 'https://placehold.co/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
  ];

  return (
    <>
      <Flex direction="column" gap={4}>
        <Heading as="h1" size="lg">
          Ons team
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
          {team.map((member) => (
            <Flex direction="column" key={member.name} gap={2}>
              <Image src={member.image} alt={member.name} />
              <Heading as="h2" size="md">
                {member.name}
              </Heading>
              <Heading as="h3" size="sm">
                {member.function}
              </Heading>
              <p>{member.description}</p>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
