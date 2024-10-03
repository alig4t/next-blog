'use client';
import { signIn } from 'next-auth/react';
import { CreateUserAction } from '@/actions/auth-action';
import SubmitButton from './submit-button';

const RegisterForm = () => {
  return (
    <form
      action={async (formData) => {
        const email = formData.get('email');
        const password = formData.get('password');
        // const { name, email, password } = Object.fromEntries(formData);

        const res = await CreateUserAction(formData);
        if (res?.success) {
          await signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>نام نویسی</h2>
      <input
        type='text'
        name='name'
        placeholder='نام'
        className='rounded-md border p-2 shadow-sm'
      />
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
      <SubmitButton />
    </form>
  );
};

export default RegisterForm;
