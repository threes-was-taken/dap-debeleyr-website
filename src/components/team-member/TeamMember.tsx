import styles from './TeamMember.module.css';
import Image from 'next/image';

export default function TeamMember({
  name,
  occupation,
  imageUrl,
}: {
  name: string;
  occupation: string;
  imageUrl: string;
}): JSX.Element {
  return (
    <article className={styles.card}>
      <section className={styles['card-img-top']}>
        <Image src={imageUrl} alt={name} fill />
      </section>
      <section className={styles['card-body']}>
        <h5 className={styles['card-title']}>{name}</h5>
        <p className={styles['card-subtitle']}>{occupation}</p>
      </section>
    </article>
  );
}
