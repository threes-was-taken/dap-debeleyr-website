import styles from './TeamMember.module.css';
import Image from 'next/image';

export default function TeamMember({
  name,
  occupation,
  description,
  imageUrl,
}: {
  name: string;
  occupation: string;
  description: string;
  imageUrl: string;
}): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles['card-img-top']}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>{name}</h5>
        <p className={styles['card-subtitle']}>{occupation}</p>
        <p className={styles['card-text']}>{description}</p>
      </div>
    </div>
  );
}
