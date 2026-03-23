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
    date: "Mar 21, 2026",
    readTime: "5 min read",
    category: "Branding",
    description: "In 2026, naming is about heritage and minimalism. Learn how to pick a name that resonates with the modern Nigerian consumer while remaining simple and unique.",
    thumbnail: "/blog-naming-guide.webp",
  },
  {
    title: "Everything You Need to Know About CAC Registration",
    slug: "cac-registration-guide",
    date: "Mar 21, 2026",
    readTime: "8 min read",
    category: "Legal",
    description: "The definitive 2026 guide to CAC registration. From CAMA 2020 compliance and new fee schedules to digital certificates and automatic TIN generation.",
    thumbnail: "/blog-cac-guide.webp",
  },
  {
    title: "Beyond CAC: The 2026 Post-Registration Compliance Checklist",
    slug: "post-registration-compliance",
    date: "Mar 23, 2026",
    readTime: "7 min read",
    category: "Compliance",
    description: "You've got your CAC certificate—now what? Discover the 5 essential steps to keep your Nigerian business legal, from TIN and SCUML to corporate banking.",
    thumbnail: "/blog-compliance-guide.webp",
  },
];
