'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './ImageSlideShow.module.css';

import placeholderA from '@/assets/pexels-burak-the-weekender-65536.jpg';
import placeholderB from '@/assets/pexels-mikhail-nilov-7474857.jpg';
import placeholderC from '@/assets/pexels-mikhail-nilov-7470753.jpg';

const images: { image: StaticImageData; alt: string }[] = [
  { image: placeholderA, alt: 'placeholderA' },
  { image: placeholderB, alt: 'placeholderB' },
  { image: placeholderC, alt: 'placeholderC' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ''}
          alt={image.alt}
          fill
        />
      ))}
    </div>
  );
}
