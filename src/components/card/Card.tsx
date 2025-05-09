import type { JSX } from 'react';
import styles from './Card.module.css';

export function Card({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>): JSX.Element {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
