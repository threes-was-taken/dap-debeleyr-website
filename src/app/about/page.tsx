import TeamMember from '@/components/team-member/TeamMember';
import styles from './page.module.css';

import CatA from '/public/assets/cat-1.jpeg';
import CatB from '/public/assets/cat-2.jpeg';
import CatC from '/public/assets/cat-3.jpeg';
import CatD from '/public/assets/cat-4.jpeg';
import CatE from '/public/assets/cat-5.jpeg';

export default function About() {
  const team = [
    {
      name: 'Ingrid De Beleyr',
      occupation: 'Oprichter en dierenarts',
      image: CatA.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katrijn Rosiers',
      occupation: 'Dierenarts',
      image: CatB.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Jutta Heyninck',
      occupation: 'Assistente',
      image: CatC.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Katharina Gillis',
      occupation: 'Assistente',
      image: CatD.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
    {
      name: 'Koen Verelst',
      occupation: 'Assistent',
      image: CatE.src,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ero dui.',
    },
  ];

  return (
    <>
      <main className={styles.main}>
        {team.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            occupation={member.occupation}
            description={member.description}
            imageUrl={member.image}
          />
        ))}
      </main>
    </>
  );
}
