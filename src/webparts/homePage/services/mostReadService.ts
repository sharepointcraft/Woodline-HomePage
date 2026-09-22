import { IMostReadItem } from '../types';

export const DEFAULT_MOST_READ: IMostReadItem[] = [
  {
    rank: 1,
    title: 'Quarterly Updates',
    url: '#'
  },
  {
    rank: 2,
    title: 'London Office Refurbishment',
    url: '#'
  },
  {
    rank: 3,
    title: 'New Joiners Announcement',
    url: '#'
  },
  {
    rank: 4,
    title: 'Learning Highlights',
    url: '#'
  },
  {
    rank: 5,
    title: 'Woodline 5 Year Anniversary',
    url: '#'
  }
];

export function getMostRead(): IMostReadItem[] {
  return DEFAULT_MOST_READ;
}
