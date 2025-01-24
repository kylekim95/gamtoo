export interface NotificationsResponseType {
  seen: boolean;
  _id: string;
  author: string;
  user: string;
  post: string;
  follow: string;
  comment: {
    _id: string;
    comment: string;
    author: string;
    post: string;
    createdAt: string;
    updatedAt: string;
  },
  message: string;
  createdAt: string;
  updatedAt: string;
}