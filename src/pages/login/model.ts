import { action, computed, reatomForm, withAsync } from '@reatom/core';
import fetches from '@siberiacancode/fetches';
import { toast } from 'sonner';

import { profile } from '../../model';
import { router } from '../../router';

export const loginAction = action(
  async (body) => await fetches.post<User>('/api/login', body)
).extend(withAsync());

export const loginForm = reatomForm(
  {
    login: '',
    password: ''
  },
  {
    onSubmit: async (values) => {
      try {
        const loginResponse = await loginAction(values);

        profile.set(loginResponse.data);
        router.home.go();
      } catch {
        toast.error('Invalid credential');
      }
    },
    resetOnSubmit: false
  }
);

export const isLoading = computed(() => !!loginForm.submit.pending() || !!loginAction.pending());
