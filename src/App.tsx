import { reatomComponent } from '@reatom/react';
import { lazy, Suspense } from 'react';

import { Toaster } from './components/ui/sonner';
import { AuthLayout } from './pages/(auth)/layout';
import { router } from './router';

const LoginPage = lazy(() =>
  import('./pages/login/page').then((module) => ({ default: module.LoginPage }))
);

const HomePage = lazy(() =>
  import('./pages/(auth)/home/page').then((module) => ({ default: module.HomePage }))
);

export const App = reatomComponent(() => (
  <>
    {router.home.exact() && (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLayout>
          {router.home.loader.ready() && <HomePage />}
          {!router.home.loader.ready() && <div>Loading...</div>}
        </AuthLayout>
      </Suspense>
    )}

    {router.login.exact() && (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    )}

    <Toaster />
  </>
));
