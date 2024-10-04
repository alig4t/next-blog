'use client';

import { useRef } from 'react';
import SubmitButton from '../auth/submit-button';
import { CreatePostAction } from '@/actions/post-action';

const NewPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        console.log(formData);
        formRef.current?.reset();
        await CreatePostAction(formData);
      }}
      className='space-y-6'
    >
      <div className='flex flex-col gap-y-1'>
        <label>عنوان</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          name='title'
          placeholder='عنوان پست'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>محتوا</label>
        <textarea
          className='rounded-md border p-2 shadow-sm'
          name='body'
          placeholder='توضیحات'
          rows={5}
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>تصویر</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          name='image'
          placeholder='آدرس تصویر'
        />
      </div>
      <SubmitButton title='انتشار' />
    </form>
  );
};

export default NewPostForm;
