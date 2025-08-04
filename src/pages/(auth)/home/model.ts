import { action, atom, reatomForm, withAsync } from '@reatom/core';
import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

import { homeRoute } from '../../../router';

export const editablePostId = atom<number | null>(null);

export const editPostForm = reatomForm(
  {
    title: '',
    description: ''
  },
  {
    onSubmit: async (values) => {
      try {
        const patchPostResponse = await fetches.patch<Post>(
          `/api/post/${editablePostId()}`,
          values
        );

        homeRoute.loader.data.set((data) => ({
          ...data!,
          posts: data!.posts.map((post) =>
            post.id === editablePostId() ? patchPostResponse.data : post
          )
        }));

        editablePostId.set(null);
        toast.success('Post was edited');
      } catch {
        toast.error('Something went wrong when edit the post');
      }
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
      try {
        const postResponse = await fetches.post<Post>('/api/post', values);

        homeRoute.loader.data.set((data) => ({
          ...data!,
          posts: [postResponse.data, ...data!.posts]
        }));

        toast.success('Post was created');
      } catch {
        toast.error('Something went wrong when creating the post');
      }
    }
  }
);

export const onPostDelete = action(async (postId: number) => {
  homeRoute.loader.data.set((data) => ({
    ...data!,
    posts: data!.posts.filter((post) => post.id !== postId)
  }));

  await fetches.delete(`/api/post/${postId}`);

  toast.success('Post was deleted');
}).extend(withAsync());
