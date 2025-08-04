import { reatomComponent } from '@reatom/react';
import { lazy, Suspense } from 'react';

import { Toaster } from './components/ui/sonner';
import { AuthLayout } from './pages/(auth)/layout';
import { AuthLoading } from './pages/(auth)/loading';
import { LoginLoading } from './pages/login/loading';
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
      <Suspense fallback={<AuthLoading />}>
        <AuthLayout>{router.home.loader.ready() ? <HomePage /> : <div>Loading...</div>}</AuthLayout>
      </Suspense>
    )}

    {router.login.exact() && (
      <Suspense fallback={<LoginLoading />}>
        <LoginPage />
      </Suspense>
    )}

    <Toaster />
  </>
));
