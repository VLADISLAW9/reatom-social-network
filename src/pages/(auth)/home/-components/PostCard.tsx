import { bindField, reatomComponent } from '@reatom/react';

import { IconDots } from '../../../../components/icons';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../../components/ui/card';
import { Input } from '../../../../components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../components/ui/popover';
import { profile } from '../../../../model';
import { useDisclosure } from '../../../../utils/hooks';
import { editablePostId, editPostForm, onPostDelete } from '../model';

export const PostCard = reatomComponent((post: Post) => {
  const optionsCombobox = useDisclosure();

  const titleField = bindField(editPostForm.fields.title);
  const descriptionField = bindField(editPostForm.fields.description);

  const isEditablePostCard = post.id === editablePostId();
  const canEditPost = post.creator.id === profile()!.id;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (editablePostId()) editPostForm.submit();
      }}
    >
      <Card>
        <CardHeader className='flex items-center justify-between'>
          <CardTitle>
            {!isEditablePostCard && post.title}
            {isEditablePostCard && <Input placeholder='Title...' {...titleField} />}
          </CardTitle>
          {canEditPost && (
            <Popover onOpenChange={optionsCombobox.toggle} open={optionsCombobox.opened}>
              <PopoverTrigger>
                <Button size='icon' variant='ghost'>
                  <IconDots />
                </Button>
              </PopoverTrigger>
              <PopoverContent align='end' className='w-30 flex flex-col gap-2'>
                <Button
                  variant='outline'
                  onClick={() => {
                    editablePostId.set(post.id);

                    titleField.onChange(post.title);
                    descriptionField.onChange(post.description ?? '');

                    optionsCombobox.close();
                  }}
                >
                  Edit
                </Button>
                <Button
                  disabled={!!onPostDelete.pending()}
                  variant='destructive'
                  onClick={() => onPostDelete(post.id)}
                >
                  Remove
                </Button>
              </PopoverContent>
            </Popover>
          )}
        </CardHeader>
        <CardContent>
          {!isEditablePostCard && <CardDescription>{post.description}</CardDescription>}
          {isEditablePostCard && <Input placeholder='Description...' {...descriptionField} />}
        </CardContent>
        <CardFooter className='flex justify-end w-full items-center gap-2'>
          {!isEditablePostCard && (
            <>
              <Avatar className='w-8 h-8'>
                <AvatarFallback>{post.creator.username[0]}</AvatarFallback>
              </Avatar>
              <p>{post.creator.username}</p>
            </>
          )}
          {isEditablePostCard && (
            <div className='flex gap-2'>
              <Button type='submit'>Save</Button>
              <Button variant='outline' onClick={() => editablePostId.set(null)}>
                Cancel
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </form>
  );
});
