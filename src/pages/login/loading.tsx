import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const LoginLoading = () => (
  <div className='h-screen flex items-center justify-center'>
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <Skeleton className='h-5 w-40' />
      </CardHeader>
      <div className='flex flex-col gap-6'>
        <CardContent>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Skeleton className='h-5 w-20' />
              <Skeleton className='h-10 w-70' />
            </div>
            <div className='flex flex-col gap-2'>
              <Skeleton className='h-5 w-20' />
              <Skeleton className='h-10 w-70' />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Skeleton className='h-10 w-40' />
        </CardFooter>
      </div>
    </Card>
  </div>
);
