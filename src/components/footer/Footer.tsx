import type { JSX } from 'react';
import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <section>
        <div>
          <p>&copy; 2025 BV DAP De Beleyr</p>
          <p>BTW: BE 0471 521 156</p>
        </div>
      </section>
    </footer>
  );
}
