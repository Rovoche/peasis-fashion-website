/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  collectionId: 'everyday-elegance' | 'occasion-wear' | 'couture';
  price?: number; // Optional for couture
  description: string;
  fabric: string;
  skyTimeline: string; // Dynamic production timeline text
  sizes: string[];
  images: string[]; // List of gallery images (with zoom details)
  isFeatured?: boolean;
}

export interface Collection {
  id: 'everyday-elegance' | 'occasion-wear' | 'couture';
  name: string;
  description: string;
  leadTime: string;
  images: string[];
}

export interface FeaturedLook {
  slug?: string;
  name: string;
  image: string;
  collectionId?: Collection['id'];
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export type ViewRoute =
  | { type: 'home' }
  | { type: 'collection'; id: Collection['id'] }
  | { type: 'product'; slug: string }
  | { type: 'consultation' };
