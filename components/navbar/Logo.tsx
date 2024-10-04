import { cn } from '@/libs/utils';
import logoBlog from '@/public/blog.png';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('relative size-10', className)}>
      <Image src={logoBlog} alt='logo' fill sizes='100vw' />
    </div>
  );
};

export default Logo;
