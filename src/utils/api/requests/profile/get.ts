import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instanse';

type GetProfileConfig = FetchesRequestConfig | undefined;

export const getProfile = (params?: GetProfileConfig) => api.get<User>('/profile', params?.config);
