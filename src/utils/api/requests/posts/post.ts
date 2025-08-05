import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instanse';

interface CreatePostParams {
  title: string;
  description?: string;
}

type CreatePostConfig = FetchesRequestConfig<CreatePostParams>;

export const createPost = ({ params, config }: CreatePostConfig) =>
  api.post<Post>('/posts', params, config);
