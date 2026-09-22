import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IEventGalleryProps } from './IEventGalleryProps';
import { IEventGalleryItem } from '../../types';
import { DEFAULT_EVENT_GALLERY } from '../../services';

export const EventGallery: React.FC<IEventGalleryProps> = ({
  galleryData = DEFAULT_EVENT_GALLERY
}) => {
  const {
    title = 'Events Gallery',
    description = 'Explore recent events, meetings, and office activities.',
    viewDetailsUrl = '#',
    viewDetailsText = 'VIEW DETAILS →',
    images = []
  } = galleryData;

  return (
    <div className={styles.eventsGallery}>
      <div className={styles.eventsGalleryHeader}>
        <h2>{title}</h2>
      </div>

      <div className={styles.galleryGrid}>
        <div className={styles.galleryText}>
          <p>{description}</p>
          <a href={viewDetailsUrl}>{viewDetailsText}</a>
        </div>

        {images.map((item: IEventGalleryItem, index: number) => (
          <img
            key={index}
            src={item.imageUrl}
            alt={item.altText || 'Woodline event'}
          />
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
