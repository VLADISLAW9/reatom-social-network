import { bindField, reatomComponent } from '@reatom/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { homeRoute } from '@/router';

import { PostCard } from './-components';
import { isLoading, postForm } from './model';

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
            className='flex flex-col gap-6'
            onSubmit={(event) => {
              event.preventDefault();
              postForm.submit();
            }}
          >
            <Input placeholder='Title...' {...postTitleField} />
            <Textarea placeholder='Description...' {...postDescriptionField} />
            <Button className='w-40' disabled={isLoading()} type='submit'>
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
      {homeRoute.loader.data()!.posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
});
