
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime?: number; // Adding the readTime property as optional
}
