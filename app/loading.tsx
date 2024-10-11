import { createPortal } from 'react-dom';

const Loading = () => {
  return createPortal(
    <div className='absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#5f5c5c0f]'>
      <p>در حال بارگزاری...</p>
    </div>,
    document.body,
  );
};

export default Loading;
