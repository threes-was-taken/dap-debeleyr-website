import Image from 'next/image';
import logo from '/public/assets/logo.jpeg';
import { JSX } from 'react';

export default function Header(): JSX.Element {
  return (
    <>
      <header>
        <div>
          <Image src={logo.src} width={200} height={200} alt={'DAP De Beleyr'} priority />
          DAP De Beleyr
        </div>
      </header>
    </>
  );
}
