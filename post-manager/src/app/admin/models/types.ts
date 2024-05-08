export interface Post {
  createdAt?: string;
  Title?: string;
  content?: string;
  id?: string;
  userId?: string;
  author?: author;
}

export interface IUser {
  createdAt?: string;
  name?: string;
  avatar?: string;
  id?: string;
  recent_posts?: Post[];
}

interface author {
  createdAt?: string;
  name?: string;
  avatar?: string;
  userId?: string;
}

export interface IPostRequestBody {
  createdAt?: string;
  Title?: string;
  content?: string;
  author?: author;
}
