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
      <h2 className={styles['card-title']}>{title}</h2>
      <div className={styles['card-content']}>{children}</div>
    </div>
  );
}
