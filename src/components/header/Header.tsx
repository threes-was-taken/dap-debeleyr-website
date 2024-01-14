import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import HeaderBackground from './HeaderBackground';
import NavLink from './NavLink';

import logo from '@/assets/logo.jpeg';

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo.src} width={200} height={200} alt={'DAP De Beleyr'} priority />
          DAP De Beleyr
        </Link>

        <nav className={styles.nav}>
          <NavLink href="/about">
            <h3>Over ons</h3>
          </NavLink>
        </nav>
      </header>
    </>
  );
}
