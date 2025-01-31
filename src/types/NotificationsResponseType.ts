export interface NotificationsResponseType {
  seen: boolean;
  _id: string;
  authorName: string;
  post: string;
  data: Like | Comment;
}

type Comment = {
  notificationType: "comment";
  _id: string
  comment: string;
  createAt: string;
}
type Like = {
  notificationType: "like";
  _id: string;
  createAt: string;
}