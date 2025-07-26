import { reatomRoute } from '@reatom/core';
import fetches from '@siberiacancode/fetches';

export const loginRoute = reatomRoute({
  path: 'login'
});

export const profileRoute = reatomRoute({
  path: 'profile'
});

export const homeRoute = reatomRoute({
  path: '',
  loader: async () => {
    const postsResponse = await fetches.get<{ posts: Post[]; hasMore: boolean }>('/api/posts');

    return {
      posts: postsResponse.data.posts,
      hasMore: postsResponse.data.hasMore
    };
  }
});

export const router = {
  login: loginRoute,
  home: homeRoute,
  profile: profileRoute
};
