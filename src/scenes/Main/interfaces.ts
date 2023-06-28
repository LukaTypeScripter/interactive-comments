type Image = {
    png: string;
    webp: string;
  };
  
  type User = {
    image: Image;
    username: string;
  };
  
 export type Replys = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: User;
    isEditing?: boolean;
  };
  
  type Comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replies: Replys[];
  };
  
  export type CommentData = {
    currentUser: User;
    comments: Comment[];
  };