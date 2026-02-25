import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "وبلاگ فارسی من",
  EMAIL: "hello@example.com",
};

export const HOME: Metadata = {
  TITLE: "خانه",
  DESCRIPTION: "وبلاگ فارسی مینیمال ساخته شده با Astro.",
};

export const BLOG: Metadata = {
  TITLE: "وبلاگ",
  DESCRIPTION: "مجموعه‌ای از نوشته‌ها درباره توسعه و تجربه‌های فنی.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "ایکس",
    HREF: "https://x.com",
  },
  { 
    NAME: "گیت‌هاب",
    HREF: "https://github.com"
  },
  { 
    NAME: "لینکدین",
    HREF: "https://www.linkedin.com",
  }
];
