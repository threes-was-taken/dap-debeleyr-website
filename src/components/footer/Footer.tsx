import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <section className={styles.section}>
        <div>
          <p>Made with love by her son. ❤️ &copy;</p>
        </div>
      </section>
    </footer>
  );
}
