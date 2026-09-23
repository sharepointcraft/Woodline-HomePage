import { INewsCardItem } from '../types';
import podcast1Img from '../assets/podcast-1.png';

export const DEFAULT_NEWS_ITEMS: INewsCardItem[] = [
  {
    id: '1',
    title: 'Compliance reminder',
    description: 'Required actions and guidance.',
    imageUrl: podcast1Img
  },
  {
    id: '2',
    title: 'Learning spotlight',
    description: 'Upcoming learning resources.',
    imageUrl: podcast1Img
  },
  {
    id: '3',
    title: 'Office update',
    description: 'Visitor and office information.',
    imageUrl: podcast1Img
  }
];

export function getNewsItems(): INewsCardItem[] {
  return DEFAULT_NEWS_ITEMS;
}
