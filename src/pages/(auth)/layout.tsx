import type { ReactNode } from 'react';

import { reatomComponent } from '@reatom/react';

import { IconAtom } from '../../components/icons';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';
import { profile } from '../../model';
import { Button } from '../../components/ui/button';
import { router } from '../../router';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { isLoading, onLogout } from './model';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = reatomComponent(({ children }: AuthLayoutProps) => (
  <>
    <header className='py-10 px-150 flex items-center justify-between'>
      <IconAtom width={30} height={30} />
      <nav className='ml-10 flex flex-1'>
        <Button onClick={router.home.go} variant='link'>
          Home
        </Button>
        <Button onClick={router.profile.go} variant='link'>
          Profile
        </Button>
      </nav>
      <Popover>
        <PopoverTrigger>
          <Avatar className='w-8 h-8'>
            <AvatarFallback>{profile()!.username[0]}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className='p-3 w-fit' align='end'>
          <Button disabled={isLoading()} onClick={onLogout} size='sm' variant='destructive'>
            Log Out
          </Button>
        </PopoverContent>
      </Popover>
    </header>
    <main className='py-10 px-150'>{children}</main>
  </>
));
