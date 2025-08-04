import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { profile } from '@/model';
import { reatomComponent } from '@reatom/react';

export const ProfilePage = reatomComponent(() => (
  <div className='flex flex-col justify-center items-center gap-10'>
    <Avatar className='w-30 h-30'>
      <AvatarFallback>{profile()!.username[0]}</AvatarFallback>
    </Avatar>
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <Label>ID</Label>
        <Input readOnly value={profile()?.id} className='w-full' />
      </div>
      <div className='flex flex-col gap-2'>
        <Label>Username</Label>
        <Input readOnly value={profile()?.username} className='w-full' />
      </div>
    </div>
  </div>
));
