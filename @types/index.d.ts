interface User {
  id: number;
  username: string;
}

interface Post {
  creator: User;
  description?: string;
  id: number;
  title: string;
}
