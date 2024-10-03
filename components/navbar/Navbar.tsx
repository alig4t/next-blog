import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Container from '../ui/Container';
import UserAvatar from './UserAvatar';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className='border-b py-4'>
      <Container isFullHeight className='flex items-center justify-between'>
        <div></div>
        <div className='flex justify-normal gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
