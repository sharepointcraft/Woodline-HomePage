import * as React from 'react';
import styles from '../HomePage.module.scss';
import { INewsCardsProps } from './INewsCardsProps';
import { INewsCardItem } from '../../types';
import { DEFAULT_NEWS_ITEMS } from '../../services';

export const NewsCards: React.FC<INewsCardsProps> = ({
  newsItems = DEFAULT_NEWS_ITEMS
}) => {
  return (
    <div className={styles.newsGrid}>
      {newsItems.map((item: INewsCardItem, index: number) => (
        <article className={styles.newsCard} key={item.id || `${item.title}-${index}`}>
          <img
            src={item.imageUrl}
            alt={item.title || ''}
          />

          <div className={styles.newsCardContent}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsCards;
