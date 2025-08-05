import type { FetchesRequestConfig } from '@siberiacancode/fetches';
import { api } from '../../instanse';

type LogoutConfig = FetchesRequestConfig;

export const logout = ({ params, config }: LogoutConfig) => api.post('/logout', params, config);
