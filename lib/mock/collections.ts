export interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string;
  image?: {
    url: string;
    altText: string;
  };
}

export const collections: Collection[] = [
  {
    id: '1',
    title: 'Summer Collection',
    handle: 'summer-collection',
    description: 'Discover our latest summer styles',
    image: {
      url: '/images/collections/summer.jpg',
      altText: 'Summer Collection'
    }
  },
  {
    id: '2',
    title: 'Winter Collection',
    handle: 'winter-collection',
    description: 'Stay warm with our winter essentials',
    image: {
      url: '/images/collections/winter.jpg',
      altText: 'Winter Collection'
    }
  },
  {
    id: '3',
    title: 'Accessories',
    handle: 'accessories',
    description: 'Complete your look with our accessories',
    image: {
      url: '/images/collections/accessories.jpg',
      altText: 'Accessories Collection'
    }
  }
]; 