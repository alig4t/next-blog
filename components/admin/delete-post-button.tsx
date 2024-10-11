'use client';

import { DeletePostAction } from '@/actions/post-action';
import { Trash } from 'lucide-react';
import { useFormStatus } from 'react-dom';

type Iprops = {
  id: number;
};

const DeletePostButton = ({ id }: Iprops) => {
  const { pending } = useFormStatus();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        DeletePostAction(id);
      }}
      className='rounded-md bg-gray-100 p-4 text-rose-500 hover:bg-gray-200'
    >
      <Trash className='size-5' />
    </button>
  );
};

export default DeletePostButton;
