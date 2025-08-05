import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instanse';

interface LoginParams {
  login: string;
  password: string;
}

type LoginConfig = FetchesRequestConfig<LoginParams>;

export const login = ({ params, config }: LoginConfig) => api.post<User>('/login', params, config);
