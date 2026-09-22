import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IUpcomingEventsProps } from './IUpcomingEventsProps';
import { IUpcomingEvent } from '../../types';
import { DEFAULT_UPCOMING_EVENTS } from '../../services';

export const UpcomingEvents: React.FC<IUpcomingEventsProps> = ({
  title = 'Upcoming Events',
  events = DEFAULT_UPCOMING_EVENTS
}) => {
  return (
    <div className={styles.contentCard}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {events.map((event: IUpcomingEvent, index: number) => (
        <div className={styles.eventListItem} key={event.id || `${event.title}-${index}`}>
          <strong>{event.title}</strong>
          <span>{event.dateInfo}</span>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
