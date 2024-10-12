import { createPortal } from 'react-dom';

const Loading = () => {
  return (
    <div className='z-50 flex h-dvh w-full items-center justify-center'>
      <div className='loading-dots'>
        {/* <h1 className='mb-6'>در حال بارگزاری</h1> */}
        <h1 className='dot one'>.</h1>
        <h1 className='dot two'>.</h1>
        <h1 className='dot three'>.</h1>
      </div>
    </div>
  );
};

export default Loading;
