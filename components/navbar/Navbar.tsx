import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Container from '../ui/Container';
import UserAvatar from './UserAvatar';
import Logo from './Logo';
import NavbarRoutes from './Navbar-Routes';
import NavbarMobileMenu from './Navbar-mobile-manu';
import Link from 'next/link';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  console.log(session);

  return (
    <nav className='border-b py-4'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-x-6'>
          <div className='hidden md:block'>
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes session={session} />
          </div>
          <div className='block md:hidden'>
            <NavbarMobileMenu session={session} />
          </div>
        </div>
        <div className='flex justify-normal gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
