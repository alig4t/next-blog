'use client';

import SubmitButton from './submit-button';

const RegisterForm = () => {
  return (
    <form className='mx-auto flex w-96 flex-col gap-y-5'>
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
