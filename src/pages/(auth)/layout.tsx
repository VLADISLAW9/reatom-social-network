import type { ReactNode } from 'react';

import { reatomComponent } from '@reatom/react';

import { IconAtom, IconSpinner } from '../../components/icons';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { Button } from '../../components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { profile } from '../../model';
import { router } from '../../router';
import { isLoading, onLogout } from './model';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = reatomComponent(({ children }: AuthLayoutProps) => (
  <>
    <header className='py-10 px-150 flex items-center justify-between'>
      <IconAtom height={30} width={30} />
      <nav className='ml-10 flex flex-1'>
        <Button variant='link' onClick={router.home.go}>
          Home
        </Button>
        <Button variant='link' onClick={router.profile.go}>
          Profile
        </Button>
      </nav>
      <Popover>
        <PopoverTrigger>
          <Avatar className='w-8 h-8'>
            <AvatarFallback>{profile()!.username[0]}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent align='end' className='p-3 w-fit'>
          <Button disabled={isLoading()} size='sm' variant='destructive' onClick={onLogout}>
            {isLoading() && <IconSpinner />}
            Log Out
          </Button>
        </PopoverContent>
      </Popover>
    </header>
    <main className='py-10 px-150'>{children}</main>
  </>
));
