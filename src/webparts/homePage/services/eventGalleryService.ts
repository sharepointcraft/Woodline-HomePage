import { IEventGalleryData } from '../types';

export const DEFAULT_EVENT_GALLERY: IEventGalleryData = {
  title: 'Events Gallery',
  description: 'Explore recent events, meetings, and office activities.',
  viewDetailsUrl: '#',
  viewDetailsText: 'VIEW DETAILS →',
  images: [
    {
      imageUrl: require('../assets/podcast-1.png'),
      altText: 'Woodline event'
    },
    {
      imageUrl: require('../assets/podcast-1.png'),
      altText: 'Woodline event'
    },
    {
      imageUrl: require('../assets/podcast-1.png'),
      altText: 'Woodline event'
    }
  ]
};

export function getEventGallery(): IEventGalleryData {
  return DEFAULT_EVENT_GALLERY;
}
