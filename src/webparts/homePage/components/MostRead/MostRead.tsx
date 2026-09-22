import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IMostReadProps } from './IMostReadProps';
import { IMostReadItem } from '../../types';
import { DEFAULT_MOST_READ } from '../../services';

export const MostRead: React.FC<IMostReadProps> = ({
  title = 'Most Read',
  items = DEFAULT_MOST_READ
}) => {
  return (
    <div className={styles.mostRead}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={styles.mostReadList} role="list" aria-label={title}>
        {items.map((item: IMostReadItem) => (
          <div key={item.rank} className={styles.mostReadItem} role="listitem">
            <span>{item.rank}</span>
            {item.url ? (
              <a href={item.url} style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
