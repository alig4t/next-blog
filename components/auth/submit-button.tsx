import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='rounded-md bg-black px-7 py-2 text-white hover:bg-gray-800 disabled:bg-gray-400'
      disabled={pending}
    >
      ثبت
    </button>
  );
};

export default SubmitButton;
