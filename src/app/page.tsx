import { Card } from '@/components/card/Card';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import styles from './page.module.css';
import Image from 'next/image';

import vetOffice from '/public/assets/vet-office.jpeg';

export default function Home() {
  return (
    <div className={styles['page-container']}>
      <Header />
      <div className={styles['page-content']}>
        <section className={styles['landing-zone']}>
          <div className={styles['landing-zone__background']}></div>
          <div className={styles['landing-zone__scroll-down']}>
            <p className={styles['scroll-down']}>Scroll down</p>
          </div>
          <div className={styles['landing-zone__content']}>
            <div className={'landing-zone__content-title'}>
              <h1 className={styles['landing-zone__title']}>DAP De Beleyr</h1>
              <p className={styles['landing-zone__subtitle']}>
                Uw dierenartsenpraktijk gespecialiseerd in kleine huisdieren.
              </p>
            </div>
          </div>
          <div className={styles['image-wrapper']}>
            <div className={styles['office-image']}>
              <Image alt="DAP De Beleyr office" src={vetOffice.src} quality={100} fill objectFit="cover" />
            </div>
          </div>
        </section>
        <section id="information" className={styles.information}>
          <div className={styles['information-block']}>
            <Card title="Bericht van de praktijk">
              <p>Beste klanten</p>
              <p>
                Gedurende de zomermaanden, juli en augustus, zal de praktijk <strong>NIET</strong> gesloten zijn. (Geen
                verlofperiode) <br />
                Wel zullen we deze maanden op <strong>dinsdagnamiddag</strong> telefonisch niet bereikbaar zijn! <br />
                Voor <strong>ZEER DRINGENDE GEVALLEN</strong> kan u ons wel nog steeds contacteren op het GSM-nummer{' '}
                <a href="tel:+32475658433">+32(0)475 65 84 33</a>
              </p>
              <p>Alvast bedankt voor uw begrip en ook voor u een fijne vakantie gewenst.</p>
              <p>
                Uw dierenartsen, <br />
                Ingrid De Beleyr & Katrijn Rosiers <br />
                en de assistentes, <br />
                Jutta, Katharina en Mara
              </p>
            </Card>
          </div>
          <div className={styles['contact-block']}>
            <Card title="Contact">
              <p>
                <strong>Adres:</strong> <br />
                DAP De Beleyr <br />
                Grote Baan 304A <br />
                9120 Beveren
              </p>
              <p>
                <strong>Telefoon:</strong> <br />
                <a href="tel:+3237752026">+32(0)3 775 20 26</a>
              </p>
              <p>
                <strong>GSM (zéér dringende gevallen):</strong> <br />
                <a href="tel:+32475658433">+32(0)475 65 84 33</a>
              </p>
              <p>
                <strong>E-mail:</strong> <br />
                <a href="mailto:dr.idb@skynet.be">dr.idb@skynet.be</a>
              </p>
            </Card>
          </div>
          <div className={styles['opening-hours-block']}>
            <Card title="Openingstijden">
              <p>
                van 08u00 - 12u00 <br />
                van 13u15 - 19u30 <br />
                <strong>ENKEL</strong> op afspraak
              </p>
              <div className={styles['opening-hours-block__availability']}>
                <strong>Telefonisch bereikbaar:</strong>
                <p>Maandag - vrijdag: 09u30 - 12u15 & 13u30 - 17u30</p>
              </div>
              <div className={styles['opening-hours-block__medication']}>
                <strong>Ophalen van voeding en/of medicatie:</strong>
                <p>Maandag - vrijdag: 11u00 - 12u15 & 13u30 - 18u00</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
