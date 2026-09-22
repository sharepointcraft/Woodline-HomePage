import { IVideoItem } from '../../types';

export interface IVideoLibraryProps {
  title?: string;
  videos?: IVideoItem[];
  onVideoSelect?: (video: IVideoItem) => void;
  viewAllUrl?: string;
}
