import { IGlobalHoliday } from '../types';

export const DEFAULT_GLOBAL_HOLIDAYS: IGlobalHoliday[] = [
  {
    date: '31 AUG',
    title: 'Summer Bank Holiday',
    location: 'London'
  },
  {
    date: '07 SEP',
    title: 'Labor Day',
    location: 'US offices'
  },
  {
    date: '26 NOV',
    title: 'Thanksgiving',
    location: 'US offices'
  }
];

export function getGlobalHolidays(): IGlobalHoliday[] {
  return DEFAULT_GLOBAL_HOLIDAYS;
}
