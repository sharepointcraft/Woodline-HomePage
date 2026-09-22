import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IHeroSectionProps } from './IHeroSectionProps';
import { IOfficeTime } from '../../types';
import { getOfficeTimes, DEFAULT_OFFICES } from '../../services';
import defaultHeroBg from '../../assets/hero-bg.png';

export const HeroSection: React.FC<IHeroSectionProps> = ({
  eyebrow = 'YOUR FIRM. CONNECTED.',
  title = 'Welcome to Woodline Web',
  description = 'Explore the latest updates, upcoming events, and essential documents to stay informed and connected.',
  bgImageUrl,
  offices = DEFAULT_OFFICES
}) => {
  const [officeTimes, setOfficeTimes] = React.useState<IOfficeTime[]>(() =>
    getOfficeTimes(offices)
  );

  React.useEffect(() => {
    // Initial update
    setOfficeTimes(getOfficeTimes(offices));

    // 1-second interval timer
    const timerId = window.setInterval(() => {
      setOfficeTimes(getOfficeTimes(offices));
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [offices]);

  const backgroundImage = bgImageUrl || defaultHeroBg;

  return (
    <React.Fragment>
      {/* HERO SECTION */}
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>{eyebrow}</div>

          <h1 className={styles.heroTitle}>{title}</h1>

          <p className={styles.heroDescription}>{description}</p>
        </div>
      </div>

      {/* OFFICE WORLD CLOCK */}
      <div className={styles.officeClockSection}>
        {officeTimes.map((office: IOfficeTime) => (
          <div className={styles.officeCard} key={office.city}>
            <div className={styles.officeCity}>{office.city}</div>
            <div className={styles.officeTime}>{office.time}</div>
            <div className={styles.officeName}>{office.officeName}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
