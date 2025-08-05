import { api } from '@/utils/api/instanse';
import type { FetchesRequestConfig } from '@siberiacancode/fetches';

interface DeletePostParams {
  postId: number;
}

type DeletePostConfig = FetchesRequestConfig<DeletePostParams>;

export const deletePost = ({ params, config }: DeletePostConfig) =>
  api.delete(`/posts/${params.postId}`, config);
