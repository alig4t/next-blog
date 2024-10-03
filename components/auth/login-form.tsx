'use client';
import { CheckUserExist } from '@/actions/auth-action';
import SubmitButton from './submit-button';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        const email = formData.get('email');
        const password = formData.get('password');

        // const { name, email, password } = Object.fromEntries(formData);
        const isExistedUser = await CheckUserExist(formData);
        console.log(isExistedUser);
        if (!isExistedUser) {
          redirect('/register');
        } else {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>ورود</h2>

      <input
        type='email'
        name='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
      />
      <input
        type='password'
        name='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
      />
      <SubmitButton title='ورود' />
    </form>
  );
};

export default LoginForm;
