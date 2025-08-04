import { bindField, reatomComponent } from '@reatom/react';

import { IconSpinner } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { isLoading, loginForm } from './model';

export const LoginPage = reatomComponent(() => {
  const loginField = bindField(loginForm.fields.login);
  const passwordField = bindField(loginForm.fields.password);

  return (
    <div className='h-screen flex items-center justify-center'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            loginForm.submit();
          }}
        >
          <div className='flex flex-col gap-6'>
            <CardContent>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                  <Label>Login</Label>
                  <Input id='login' type='login' placeholder='Login...' {...loginField} />
                </div>
                <div className='flex flex-col gap-2'>
                  <Label>Password</Label>
                  <Input
                    id='password'
                    type='password'
                    placeholder='Password...'
                    {...passwordField}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className='w-40 ' disabled={isLoading()} type='submit'>
                {isLoading() && <IconSpinner />}
                Login
              </Button>
            </CardFooter>
          </div>
        </form>
      </Card>
    </div>
  );
});
