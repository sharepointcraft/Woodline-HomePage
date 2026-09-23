import { IPodcastItem } from '../types';
import podcast1Img from '../assets/podcast-1.png';

export const DEFAULT_PODCASTS: IPodcastItem[] = [
  {
    company: 'Eli Lilly',
    guestName: 'Dave Ricks',
    listenUrl: '#',
    imageUrl: podcast1Img,
    listenText: 'Listen Here'
  },
  {
    company: 'Regeneron',
    guestName: 'Dr. Len Schleifer',
    listenUrl: '#',
    imageUrl: podcast1Img,
    listenText: 'Listen Here'
  }
];

export function getPodcasts(): IPodcastItem[] {
  return DEFAULT_PODCASTS;
}
