export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  tags: string[];
  href: string;
  creatorName?: string;
}
