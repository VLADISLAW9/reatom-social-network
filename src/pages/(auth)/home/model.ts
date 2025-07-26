import { computed, reatomForm } from '@reatom/core';
import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';
import { homeRoute } from '../../../router';

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

export const isLoading = computed(() => !!postForm.submit.pending());
