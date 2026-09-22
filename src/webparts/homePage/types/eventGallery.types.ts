export interface IEventGalleryItem {
  imageUrl: string;
  altText?: string;
  url?: string;
}

export interface IEventGalleryData {
  title?: string;
  description?: string;
  viewDetailsUrl?: string;
  viewDetailsText?: string;
  images: IEventGalleryItem[];
}
