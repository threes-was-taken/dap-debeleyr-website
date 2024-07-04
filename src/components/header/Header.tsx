import Image from 'next/image';
import styles from './Header.module.css';

import logo from '/public/assets/logo.jpeg';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo.src} width={200} height={200} alt={'DAP De Beleyr'} priority />
          DAP De Beleyr
        </div>
      </header>
    </>
  );
}
