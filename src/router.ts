import { reatomRoute } from '@reatom/core';

import { getPosts } from './utils/api/requests';

export const loginRoute = reatomRoute({
  path: 'login'
});

export const profileRoute = reatomRoute({
  path: 'profile'
});

export const homeRoute = reatomRoute({
  path: '',
  loader: async () => ({ posts: (await getPosts()).data })
});

export const router = {
  login: loginRoute,
  home: homeRoute,
  profile: profileRoute
};
