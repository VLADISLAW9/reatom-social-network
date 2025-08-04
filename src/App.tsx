import { lazy, Suspense } from 'react';
import { reatomComponent } from '@reatom/react';

import { Toaster } from './components/ui/sonner';
import { AuthLayout } from './pages/(auth)/layout';

import { HomeLoading } from './pages/(auth)/home/loading';
import { Loader } from './components';
import { ProfilePage } from './pages/(auth)/profile/page';
import { router } from './router';

const LoginPage = lazy(() =>
  import('./pages/login/page').then((module) => ({ default: module.LoginPage }))
);

const HomePage = lazy(() =>
  import('./pages/(auth)/home/page').then((module) => ({ default: module.HomePage }))
);

export const App = reatomComponent(() => (
  <>
    {router.login.exact() && (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    )}

    {router.home.exact() && (
      <Suspense fallback={<Loader />}>
        <AuthLayout>{router.home.loader.ready() ? <HomePage /> : <HomeLoading />}</AuthLayout>
      </Suspense>
    )}

    {router.profile.exact() && (
      <Suspense fallback={<Loader />}>
        <AuthLayout>
          <ProfilePage />
        </AuthLayout>
      </Suspense>
    )}

    <Toaster />
  </>
));
