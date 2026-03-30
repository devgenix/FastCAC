import { BLOG_POSTS_DATA } from "./blog-data.mjs";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  thumbnail: string;
}

export const BLOG_POSTS: BlogPost[] = (BLOG_POSTS_DATA as any[]).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
