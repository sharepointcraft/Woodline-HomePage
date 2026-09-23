import { IEventGalleryData } from '../types';
import podcast1Img from '../assets/podcast-1.png';

export const DEFAULT_EVENT_GALLERY: IEventGalleryData = {
  title: 'Events Gallery',
  description: 'Explore recent events, meetings, and office activities.',
  viewDetailsUrl: '#',
  viewDetailsText: 'VIEW DETAILS →',
  images: [
    {
      imageUrl: podcast1Img,
      altText: 'Woodline event'
    },
    {
      imageUrl: podcast1Img,
      altText: 'Woodline event'
    },
    {
      imageUrl: podcast1Img,
      altText: 'Woodline event'
    }
  ]
};

export function getEventGallery(): IEventGalleryData {
  return DEFAULT_EVENT_GALLERY;
}
