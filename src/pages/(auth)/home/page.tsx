import { reatomComponent } from '@reatom/react';

import { homeRoute } from '../../../router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../components/ui/card';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback } from '../../../components/ui/avatar';

export const HomePage = reatomComponent(() => (
  <div className='flex flex-col gap-10'>
    {homeRoute.loader.data()!.posts.map((post) => (
      <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{post.title}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className='flex items-center gap-2'>
            <Avatar className='w-8 h-8'>
              <AvatarFallback>{post.creator.username[0]}</AvatarFallback>
            </Avatar>
            <p>{post.creator.username}</p>
          </div>
        </CardFooter>
      </Card>
    ))}
  </div>
));
