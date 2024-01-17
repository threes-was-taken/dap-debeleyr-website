import styles from './HeaderBackground.module.css';

export default function HeaderBackground(): JSX.Element {
  return (
    <div className={styles['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#192a56', stopOpacity: '1' }} />
            <stop offset="100%" style={{ stopColor: '#273c75', stopOpacity: '1' }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="m0 256 48-16c48-16 144-48 240-58.7 96-10.3 192-.3 288 5.4 96 5.3 192 5.3 288-5.4 96-10.3 192-32.3 288-48 96-16.3 192-26.3 240-32l48-5.3V0H0Z"
        />
      </svg>
    </div>
  );
}
