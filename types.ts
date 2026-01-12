export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number; // 0-5
  reviewCount: number;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    color: 'primary' | 'secondary' | 'accent' | 'highlight';
  };
  events?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}