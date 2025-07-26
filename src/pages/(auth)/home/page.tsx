import { bindField, reatomComponent } from '@reatom/react';

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
import { Input } from '../../../components/ui/input';
import { isLoading, postForm } from './model';
import { Button } from '../../../components/ui/button';
import { Textarea } from '../../../components/ui/textarea';

export const HomePage = reatomComponent(() => {
  const postTitleField = bindField(postForm.fields.title);
  const postDescriptionField = bindField(postForm.fields.description);

  return (
    <div className='flex flex-col gap-10'>
      <Card>
        <CardHeader>
          <CardTitle>Create post</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              postForm.submit();
            }}
            className='flex flex-col gap-6'
          >
            <Input placeholder='Title...' {...postTitleField} />
            <Textarea placeholder='Description...' {...postDescriptionField} />
            <Button type='submit' disabled={isLoading()} className='w-40'>
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
      {homeRoute.loader.data()!.posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{post.title}</CardDescription>
          </CardContent>
          <CardFooter>
            <div className='flex justify-end w-full items-center gap-2'>
              <Avatar className='w-8 h-8'>
                <AvatarFallback>{post.creator.username[0]}</AvatarFallback>
              </Avatar>
              <p>{post.creator.username}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
});
