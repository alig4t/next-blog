import Loading from '@/app/loading';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  title: string;
};
const SubmitButton = ({ title }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type='submit'
        className='rounded-md bg-black px-7 py-2 text-white hover:bg-gray-800 disabled:bg-gray-400'
        disabled={pending}
      >
        {title}
      </button>
      {pending && <Loading />}
    </>
  );
};

export default SubmitButton;
