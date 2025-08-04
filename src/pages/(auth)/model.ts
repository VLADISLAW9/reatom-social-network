import { action, computed, withAsync } from '@reatom/core';
import fetches from '@siberiacancode/fetches';

import { profile } from '../../model';
import { router } from '../../router';

const logoutAction = action(
  async () =>
    await fetches.post('/api/logout', undefined, {
      parse: 'raw'
    })
).extend(withAsync());

export const onLogout = async () => {
  await logoutAction();
  profile.set(undefined);
  router.login.go();
};

export const isLoading = computed(() => !!logoutAction.pending());
