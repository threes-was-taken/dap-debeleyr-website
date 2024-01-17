import TeamMember from '@/components/team-member/TeamMember';
import styles from './page.module.css';

import CatA from '/public/assets/cat-1.jpeg';
import CatB from '/public/assets/cat-2.jpeg';
import CatC from '/public/assets/cat-3.jpeg';
import CatD from '/public/assets/cat-4.jpeg';
import CatE from '/public/assets/cat-5.jpeg';

export default function Team() {
  const team = [
    {
      name: 'Ingrid De Beleyr',
      occupation: 'Oprichter en dierenarts',
      image: CatA.src,
    },
    {
      name: 'Katrijn Rosiers',
      occupation: 'Dierenarts',
      image: CatB.src,
    },
    {
      name: 'Jutta Heyninck',
      occupation: 'Assistente',
      image: CatC.src,
    },
    {
      name: 'Katharina Gillis',
      occupation: 'Assistente',
      image: CatD.src,
    },
    {
      name: 'Koen Verelst',
      occupation: 'Assistent',
      image: CatE.src,
    },
  ];

  return (
    <>
      <main className={styles.main}>
        {team.map((member) => (
          <TeamMember key={member.name} name={member.name} occupation={member.occupation} imageUrl={member.image} />
        ))}
      </main>
    </>
  );
}
