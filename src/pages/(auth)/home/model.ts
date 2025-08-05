import { action, atom, reatomForm, withAsync } from '@reatom/core';
import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

import { homeRoute } from '../../../router';
import { createPost, deletePost, patchPosts } from '@/utils/api/requests';

export const editablePostId = atom<number | null>(null);

export const editPostForm = reatomForm(
  {
    title: '',
    description: ''
  },
  {
    onSubmit: async (values) => {
      const patchPostResponse = await patchPosts({
        params: { postId: editablePostId()!, ...values }
      });

      homeRoute.loader.data.set((data) => ({
        ...data!,
        posts: data!.posts.map((post) =>
          post.id === editablePostId() ? patchPostResponse.data : post
        )
      }));

      editablePostId.set(null);
      toast.success('Post was edited');
    }
  }
);

export const postForm = reatomForm(
  {
    title: '',
    description: ''
  },
  {
    onSubmit: async (values) => {
      const postResponse = await createPost({ params: values });

      homeRoute.loader.data.set((data) => ({
        ...data!,
        posts: [postResponse.data, ...data!.posts]
      }));

      toast.success('Post was created');
    }
  }
);

export const onPostDelete = action(async (postId: number) => {
  homeRoute.loader.data.set((data) => ({
    ...data!,
    posts: data!.posts.filter((post) => post.id !== postId)
  }));

  await deletePost({ params: { postId } });

  toast.success('Post was deleted');
}).extend(withAsync());
