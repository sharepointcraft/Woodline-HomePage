import { INewsCardItem } from '../types';

export const DEFAULT_NEWS_ITEMS: INewsCardItem[] = [
  {
    id: '1',
    title: 'Compliance reminder',
    description: 'Required actions and guidance.',
    imageUrl: require('../assets/podcast-1.png')
  },
  {
    id: '2',
    title: 'Learning spotlight',
    description: 'Upcoming learning resources.',
    imageUrl: require('../assets/podcast-1.png')
  },
  {
    id: '3',
    title: 'Office update',
    description: 'Visitor and office information.',
    imageUrl: require('../assets/podcast-1.png')
  }
];

export function getNewsItems(): INewsCardItem[] {
  return DEFAULT_NEWS_ITEMS;
}
