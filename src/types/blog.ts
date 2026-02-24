export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  coverImage: string;
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  featured: boolean;
}
