import { IFeaturedStory } from '../../types';

export interface IFeaturedStoriesProps {
  stories?: IFeaturedStory[];
  story?: IFeaturedStory;
  autoPlay?: boolean;
  intervalMs?: number;
  initialSlide?: number;
}
