'use client';

import { deletePostAction } from '@/actions/post-action';
import { Trash } from 'lucide-react';

type Iprops = {
  id: number;
};

const DeletePostButton = ({ id }: Iprops) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        deletePostAction(id);
      }}
      className='rounded-md bg-gray-100 p-4 text-rose-500 hover:bg-gray-200'
    >
      <Trash className='size-5' />
    </button>
  );
};

export default DeletePostButton;
