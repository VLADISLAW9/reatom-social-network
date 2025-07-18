interface User {
  id: number;
  username: string;
}

interface Post {
  creator: User;
  description?: string;
  id: number;
  images?: string[];
  title: string;
}
