import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IPodcastSectionProps } from './IPodcastSectionProps';
import { IPodcastItem } from '../../types';
import { DEFAULT_PODCASTS } from '../../services';

export const PodcastSection: React.FC<IPodcastSectionProps> = ({
  title = 'inSpired Podcast',
  podcasts = DEFAULT_PODCASTS
}) => {
  return (
    <div className={styles.contentCard}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {podcasts.map((podcast: IPodcastItem) => (
        <div className={styles.podcastItem} key={podcast.company}>
          <div className={styles.podcastActionPanel}>
            <a
              href={podcast.listenUrl}
              className={styles.podcastCompanyBtn}
              title={podcast.company}
            >
              {podcast.company}
            </a>

            <a
              href={podcast.listenUrl}
              className={styles.podcastListenBtn}
              title={podcast.listenText || 'Listen Here'}
            >
              {podcast.listenText || 'Listen Here'}
            </a>
          </div>

          <div className={styles.podcastImage}>
            <img
              src={podcast.imageUrl}
              alt={`${podcast.company} - ${podcast.guestName}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastSection;
