
export interface ContentSection {
  type: "paragraph" | "heading2" | "heading3" | "list" | "quote" | "callout";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime?: number;
  content?: ContentSection[];
}
