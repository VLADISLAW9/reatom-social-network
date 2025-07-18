import type { ReactNode } from 'react';

import { reatomComponent } from '@reatom/react';
import { IconAtom } from '@tabler/icons-react';

import { Button } from '../../components/ui/button';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = reatomComponent(({ children }: AuthLayoutProps) => (
  <>
    <header className='py-10 px-150 flex justify-between'>
      <IconAtom size={50} />
      <Button size='lg'>Войти</Button>
    </header>
    <main className='py-10 px-150'>{children}</main>
  </>
));
