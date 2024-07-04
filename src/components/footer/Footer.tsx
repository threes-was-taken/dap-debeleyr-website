import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <section className={styles.section}>
        <div>
          <p>&copy; 2024</p>
          <p>BTW: BE 0471 521 156</p>
        </div>
      </section>
    </footer>
  );
}
