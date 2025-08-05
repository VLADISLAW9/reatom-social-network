import { api } from '@/utils/api/instanse';
import type { FetchesRequestConfig } from '@siberiacancode/fetches';

interface PatchPostsParams {
  postId: number;
  title: string;
  description?: string;
}

type PatchPostsConfig = FetchesRequestConfig<PatchPostsParams>;

export const patchPosts = ({ params, config }: PatchPostsConfig) =>
  api.patch<Post>(`/posts/${params.postId}`, params, config);
