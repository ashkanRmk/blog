export type Comment = {
  id: string;
  postSlug: string;
  authorName: string;
  authorEmail?: string;
  body: string;
  createdAt: string;
};

export type CreateCommentInput = {
  postSlug: string;
  authorName: string;
  authorEmail: string;
  body: string;
};
