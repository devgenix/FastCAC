export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  description: string;
  category: string;
  thumbnail: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How to Choose a Great Business Name",
    slug: "how-to-choose-a-business-name",
    date: "Mar 21, 2024",
    readTime: "5 min read",
    category: "Branding",
    description: "Choosing a name is the first step toward building a brand. Learn how to pick a name that is simple, unique, and long-term.",
    thumbnail: "/blog-naming-guide.webp", // I will copy the generated image here
  },
  {
    title: "Everything You Need to Know About CAC Registration",
    slug: "cac-registration-guide",
    date: "Mar 20, 2024",
    readTime: "8 min read",
    category: "Legal",
    description: "A complete guide on the requirements, process, and benefits of registering your business with the Corporate Affairs Commission.",
    thumbnail: "/blog-cac-guide.webp",
  },
];
