export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Electronics',
    rating: 4.5,
    stock: 50
  },
  {
    id: '2',
    title: 'Smart Watch',
    description: 'Fitness tracker and smart watch with heart rate monitor',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Electronics',
    rating: 4.2,
    stock: 30
  },
  {
    id: '3',
    title: 'Running Shoes',
    description: 'Lightweight running shoes with cushion technology',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Sports',
    rating: 4.7,
    stock: 100
  },
  {
    id: '4',
    title: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Home',
    rating: 4.3,
    stock: 25
  },
  {
    id: '5',
    title: 'Backpack',
    description: 'Water-resistant backpack with laptop compartment',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Accessories',
    rating: 4.8,
    stock: 75
  },
  {
    id: '6',
    title: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 12-hour battery life',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Electronics',
    rating: 4.4,
    stock: 40
  }
]; 