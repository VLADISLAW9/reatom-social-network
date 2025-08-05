import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

export const api = fetches.create({
  baseURL: '/api'
});

api.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status < 500) {
    toast.error('An unexpected error occurred during the operation');
  }

  return response;
});
