import ImageSlideShow from '@/components/slide-show/ImageSlideShow';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideShow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>DAP De Beleyr</h1>
            <p>Welkom bij dierenartsenpraktijk De Beleyr. </p>
            <p>Gespecialiseerd in kleine huisdieren.</p>
          </div>
        </div>
      </header>
      <main>
        <article className={styles.article}>
          <section>
            <h2>Openingsuren</h2>
            <p>Enkel op afspraak</p>
            <p>
              Telefonisch bereikbaar: <br /> maandag, donderdag en vrijdag van 9.30 tot 12.15 en van 13.15 tot 18.00{' '}
              <br /> dinsdag en woensdag: van 8.30 tot 12.15 en van 13.15 tot 17.30
            </p>
            <p>
              Ophalen van voeding en/of medicatie: <br />
              elke werkdag van 10.45 tot 12.15 en van 13.30 tot 18.30 (op woe tot 17.30)
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Tel.: <a href="tel:037752026">+32(0) 03 775 20 26</a>
            </p>
            <p>
              GSM: <a href="tel:0475658433">+32(0) 475 65 84 33</a>
            </p>
            <p>Grote baan 304a, 9120 Melsele</p>
            <p>
              <a href="https://maps.app.goo.gl/daoTffm2crX66ML77" target="_blank">
                navigatie
              </a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
