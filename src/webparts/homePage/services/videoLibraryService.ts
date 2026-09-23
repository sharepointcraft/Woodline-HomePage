import { IVideoItem } from '../types';
import podcast1Img from '../assets/podcast-1.png';

export const DEFAULT_VIDEOS: IVideoItem[] = [
  {
    id: '1',
    title: 'Market Intelligence Briefing: Q3 Analysis',
    duration: '14:20',
    category: 'Market Intelligence',
    thumbnailUrl: podcast1Img,
    videoUrl: '#',
    speaker: 'Dave Ricks'
  },
  {
    id: '2',
    title: 'Woodline Culture & Values: Leadership Q&A',
    duration: '22:45',
    category: 'Leadership',
    thumbnailUrl: podcast1Img,
    videoUrl: '#',
    speaker: 'Executive Team'
  },
  {
    id: '3',
    title: 'Compliance & Governance Workshop 2026',
    duration: '09:15',
    category: 'Compliance',
    thumbnailUrl: podcast1Img,
    videoUrl: '#',
    speaker: 'Legal & Compliance'
  }
];

export function getVideoLibraryItems(): IVideoItem[] {
  return DEFAULT_VIDEOS;
}
