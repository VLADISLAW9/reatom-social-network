import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instanse';

type GetPostsConfig = FetchesRequestConfig;

export const getPosts = (params?: GetPostsConfig) => api.get<Post[]>('/posts', params?.config);
