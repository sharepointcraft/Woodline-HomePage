import { IPodcastItem } from '../types';

export const DEFAULT_PODCASTS: IPodcastItem[] = [
  {
    company: 'Eli Lilly',
    guestName: 'Dave Ricks',
    listenUrl: '#',
    imageUrl: require('../assets/podcast-1.png'),
    listenText: 'Listen Here'
  },
  {
    company: 'Regeneron',
    guestName: 'Dr. Len Schleifer',
    listenUrl: '#',
    imageUrl: require('../assets/podcast-1.png'),
    listenText: 'Listen Here'
  }
];

export function getPodcasts(): IPodcastItem[] {
  return DEFAULT_PODCASTS;
}
