---
title: "نمونه کد و سینتکس"
description: "نمایش کد بلاک، کد درون‌خطی و فرمت JSON/Bash/TypeScript."
date: "2026-02-26"
---

در این صفحه، کدها باید با جهت چپ‌به‌راست نمایش داده شوند.

کد درون‌خطی: `const locale = "fa-IR";`

```bash
pnpm install
pnpm run dev
```

```ts
type Comment = {
  id: string;
  postSlug: string;
  authorName: string;
  body: string;
  createdAt: string;
};

const format = (value: number) => new Intl.NumberFormat("fa-IR").format(value);
```

```json
{
  "postSlug": "05-markdown-code",
  "authorName": "کاربر",
  "body": "این یک دیدگاه نمونه است"
}
```
