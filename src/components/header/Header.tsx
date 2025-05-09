import Image from 'next/image';
import type { JSX } from 'react';
import styles from './Header.module.css';
import logo from '/public/assets/logo.jpeg';

export default function Header(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src={logo.src} width={80} height={80} alt={'DAP De Beleyr'} priority />
          <h1 className={styles.title}>DAP De Beleyr</h1>
        </div>
      </header>
    </>
  );
}
