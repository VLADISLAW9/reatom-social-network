import { Skeleton } from '@/components/ui/skeleton';

export const HomeLoading = () => (
  <div className='flex flex-col gap-10'>
    <Skeleton className='h-50 w-full' />
    <Skeleton className='h-50 w-full' />
    <Skeleton className='h-50 w-full' />
  </div>
);
