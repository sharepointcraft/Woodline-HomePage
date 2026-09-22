import { IVideoItem } from '../types';

export const DEFAULT_VIDEOS: IVideoItem[] = [
  {
    id: '1',
    title: 'Market Intelligence Briefing: Q3 Analysis',
    duration: '14:20',
    category: 'Market Intelligence',
    thumbnailUrl: require('../assets/podcast-1.png'),
    videoUrl: '#',
    speaker: 'Dave Ricks'
  },
  {
    id: '2',
    title: 'Woodline Culture & Values: Leadership Q&A',
    duration: '22:45',
    category: 'Leadership',
    thumbnailUrl: require('../assets/podcast-1.png'),
    videoUrl: '#',
    speaker: 'Executive Team'
  },
  {
    id: '3',
    title: 'Compliance & Governance Workshop 2026',
    duration: '09:15',
    category: 'Compliance',
    thumbnailUrl: require('../assets/podcast-1.png'),
    videoUrl: '#',
    speaker: 'Legal & Compliance'
  }
];

export function getVideoLibraryItems(): IVideoItem[] {
  return DEFAULT_VIDEOS;
}
