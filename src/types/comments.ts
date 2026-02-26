export type Comment = {
  id: number;
  created_at: string;
  email: string;
  name: string;
  post_slug: string;
  body: string;
  parent: number | null;
};

export type CreateCommentInput = {
  email: string;
  name: string;
  post_slug: string;
  body: string;
  created_at: string;
  parent: number | null;
};
