import { reatomComponent } from '@reatom/react';

import { HomePage } from './pages/(auth)/home/page';
import { AuthLayout } from './pages/(auth)/layout';

export const App = reatomComponent(() => (
  <AuthLayout>
    <HomePage />
  </AuthLayout>
));
