import { action, computed, withAsync } from '@reatom/core';

import { profile } from '@/model';
import { router } from '@/router';
import { logout } from '@/utils/api/requests';

export const onLogout = action(async () => {
  await logout({ config: { parse: 'raw' } });
  profile.set(undefined);
  router.login.go();
}).extend(withAsync());

export const isLoading = computed(() => !!onLogout.pending());
