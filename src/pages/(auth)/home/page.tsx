import { reatomComponent } from '@reatom/react';

import { homeRoute } from '../../../router';

export const HomePage = reatomComponent(() => {
  const loading = !homeRoute.loader.ready();
  const posts = homeRoute.loader.data()?.posts;

  if (loading) return <div>Loader...</div>;

  if (homeRoute.exact() && !!posts)
    return (
      
      <div>
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>
    );
});
