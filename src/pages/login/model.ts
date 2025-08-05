import { computed, reatomForm } from '@reatom/core';

import { profile } from '@/model';
import { router } from '@/router';
import { login } from '@/utils/api/requests';

export const loginForm = reatomForm(
  {
    login: '',
    password: ''
  },
  {
    onSubmit: async (values) => {
      const loginResponse = await login({ params: values });

      profile.set(loginResponse.data);
      router.home.go();
    },
    resetOnSubmit: false
  }
);

export const isLoading = computed(() => !!loginForm.submit.pending());
