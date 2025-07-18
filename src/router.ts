import { reatomRoute } from '@reatom/core';
import fetches from '@siberiacancode/fetches';

export const homeRoute = reatomRoute({
  path: '',
  loader: async () => {
    const postsResponse = await fetches.get<Post[]>('/api/posts');
    return { posts: postsResponse.data };
  }
});

export const loginRoute = reatomRoute('login');

export const router = {
  login: loginRoute,
  home: homeRoute
};
