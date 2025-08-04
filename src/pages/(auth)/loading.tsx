import { Skeleton } from '@/components/ui/skeleton';

export const AuthLoading = () => (
  <>
    <header className='py-10 px-150 flex items-center justify-between'>
      <Skeleton className='h-7 w-7' />
      <nav className='ml-10 gap-5 flex flex-1'>
        <Skeleton className='h-7 w-14' />
        <Skeleton className='h-7 w-14' />
      </nav>
      <Skeleton className='h-7 w-7' />
    </header>
    <main className='py-10 flex flex-col gap-5 px-150'>
      <Skeleton className='h-40 w-full' />
      <Skeleton className='h-40 w-full' />
      <Skeleton className='h-40 w-full' />
    </main>
  </>
);
