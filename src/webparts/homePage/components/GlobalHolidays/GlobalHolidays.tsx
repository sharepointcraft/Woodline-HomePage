import * as React from 'react';
import styles from '../HomePage.module.scss';
import { IGlobalHolidaysProps } from './IGlobalHolidaysProps';
import { IGlobalHoliday } from '../../types';
import { DEFAULT_GLOBAL_HOLIDAYS } from '../../services';

export const GlobalHolidays: React.FC<IGlobalHolidaysProps> = ({
  title = 'Global Holidays',
  holidays = DEFAULT_GLOBAL_HOLIDAYS
}) => {
  return (
    <div className={styles.contentCard}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {holidays.map((holiday: IGlobalHoliday, index: number) => (
        <div className={styles.holidayItem} key={`${holiday.date}-${holiday.title}-${index}`}>
          <div>
            <strong>{holiday.date}</strong>
            <span>{holiday.title}</span>
          </div>
          <small>{holiday.location}</small>
        </div>
      ))}
    </div>
  );
};

export default GlobalHolidays;
