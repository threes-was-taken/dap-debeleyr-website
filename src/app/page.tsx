import { Card } from '@/components/card/Card';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Image from 'next/image';
import styles from './page.module.css';

import vetOffice from '/public/assets/vet-office.jpeg';

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <section className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroGradient} />
            <div className={styles.heroContent}>
              <div>
                <h1>DAP De Beleyr</h1>
                <p>Uw dierenartsenpraktijk gespecialiseerd in kleine huisdieren.</p>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div>
                <Image alt="DAP De Beleyr office" src={vetOffice.src} quality={100} fill objectFit="cover" />
              </div>
            </div>
            <div className={styles.heroScroll}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Scroll down"
              >
                <title>Scroll down</title>
                <path
                  d="M3.85355 2.14645C3.65829 1.95118 3.34171 1.95118 3.14645 2.14645C2.95118 2.34171 2.95118 2.65829 3.14645 2.85355L7.14645 6.85355C7.34171 7.04882 7.65829 7.04882 7.85355 6.85355L11.8536 2.85355C12.0488 2.65829 12.0488 2.34171 11.8536 2.14645C11.6583 1.95118 11.3417 1.95118 11.1464 2.14645L7.5 5.79289L3.85355 2.14645ZM3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </section>
        <section className={styles.information}>
          <Card title="Bericht van de praktijk">
            <p>Beste klanten</p>
            <p>
              Gedurende de zomermaanden, juli en augustus, zal de praktijk{' '}
              <strong className={styles.strong}>NIET</strong> gesloten zijn. (Geen verlofperiode) <br />
              Wel zullen we deze maanden op <strong className={styles.strong}>dinsdagnamiddag</strong> telefonisch niet
              bereikbaar zijn! <br />
              Voor <strong className={styles.strong}>ZEER DRINGENDE GEVALLEN</strong> kan u ons wel nog steeds
              contacteren op het GSM-nummer{' '}
              <a href="tel:+32475658433" className={styles.link}>
                +32(0)475 65 84 33
              </a>
            </p>
            <p>Alvast bedankt voor uw begrip en ook voor u een fijne vakantie gewenst.</p>
            <p>
              Uw dierenartsen, <br />
              Ingrid De Beleyr, Katrijn Rosiers & Kimberly Coolen <br />
              en de assistentes, <br />
              Jutta, Katharina en Mara
            </p>
          </Card>
          <Card title="Contact">
            <p>
              <strong className={styles.strong}>Adres:</strong> <br />
              DAP De Beleyr <br />
              Grote Baan 304A <br />
              9120 Beveren
            </p>
            <p>
              <strong className={styles.strong}>Telefoon:</strong> <br />
              <a href="tel:+3237752026" className={styles.link}>
                +32(0)3 775 20 26
              </a>
            </p>
            <p>
              <strong className={styles.strong}>GSM (zéér dringende gevallen):</strong> <br />
              <a href="tel:+32475658433" className={styles.link}>
                +32(0)475 65 84 33
              </a>
            </p>
            <p>
              <strong className={styles.strong}>E-mail:</strong> <br />
              <a href="mailto:dr.idb@skynet.be" className={styles.link}>
                dr.idb@skynet.be
              </a>
            </p>
          </Card>
          <Card title="Openingstijden">
            <p>
              van 08u00 - 12u00 <br />
              van 13u15 - 19u30 <br />
              <strong className={styles.strong}>ENKEL</strong> op afspraak
            </p>
            <div>
              <strong className={styles.strong}>Telefonisch bereikbaar:</strong>
              <p>Maandag - vrijdag: 09u30 - 12u15 & 13u30 - 17u30</p>
            </div>
            <div>
              <strong className={styles.strong}>Ophalen van voeding en/of medicatie:</strong>
              <p>Maandag - vrijdag: 11u00 - 12u15 & 13u30 - 18u00</p>
            </div>
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
