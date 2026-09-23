import { IFeaturedStory } from '../types';
import podcast1Img from '../assets/podcast-1.png';

export const DEFAULT_FEATURED_STORIES: IFeaturedStory[] = [
  {
    label: 'FUND UPDATE',
    title: 'Quarterly fund performance',
    description: 'Performance highlights, commentary and key developments.',
    imageUrl: podcast1Img
  },
  {
    label: 'WOODLINE HIGHLIGHTS',
    title: "Woodline's 5 Year Anniversary",
    description: 'Videos and moments from Aspen.',
    imageUrl: podcast1Img
  },
  {
    label: 'OUR PEOPLE',
    title: 'People across Woodline',
    description: 'New joiners, milestones and firmwide updates.',
    imageUrl: podcast1Img
  }
];

export const DEFAULT_FEATURED_STORY: IFeaturedStory = DEFAULT_FEATURED_STORIES[0];

export function getFeaturedStories(): IFeaturedStory[] {
  return DEFAULT_FEATURED_STORIES;
}

export function getFeaturedStory(): IFeaturedStory {
  return DEFAULT_FEATURED_STORY;
}
