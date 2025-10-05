export type Comment = {
  id: number;
  postId: number;
  userId?: number;
  name: string;
  body: string;
};

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};