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
  {
    title: "How to Register a Business Name in Nigeria: Step-by-Step 2026 Guide",
    slug: "how-to-register-a-business-name",
    date: "Mar 25, 2026",
    readTime: "10 min read",
    category: "Registration",
    description: "A complete walkthrough of the 2026 CAC registration process for business names. From name availability search to downloading your digital certificate.",
    thumbnail: "/blog-how-to-register.png",
  },
  {
    title: "CAC Registration Requirements: What Documents Do You Need in 2026?",
    slug: "cac-registration-requirements",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    category: "Legal",
    description: "The mandatory documents required for business registration in Nigeria as of 2026. Includes NIN, digital signatures, and biometric verification details.",
    thumbnail: "/blog-cac-requirements.png",
  },
  {
    title: "How Much Does CAC Registration Cost? 2026 Fees Explained",
    slug: "cac-registration-cost",
    date: "Mar 25, 2026",
    readTime: "7 min read",
    category: "Finance",
    description: "A detailed breakdown of all official CAC fees in 2026, including name reservation, filing fees, stamp duties, and annual returns.",
    thumbnail: "/blog-cac-fees.png",
  },
  {
    title: "Business Name Search Nigeria: How to Check Availability (2026)",
    slug: "business-name-search-nigeria",
    date: "Mar 25, 2026",
    readTime: "5 min read",
    category: "Branding",
    description: "Learn how to use the CAC public search portal and FastCAC marketplace to find and reserve the perfect name for your Nigerian business.",
    thumbnail: "/blog-business-search.png",
  },
  {
    title: "How Long Does CAC Registration Take? 2026 Processing Times",
    slug: "cac-registration-timeline",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    category: "Operations",
    description: "Current CAC processing durations in 2026 for Business Names, Limited Companies, and NGOs. Tips to avoid delays and get registered faster.",
    thumbnail: "/blog-cac-timeline.png",
  },
];
