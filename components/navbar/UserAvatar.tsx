import prismadb from '@/libs/prismadb';
import { Session } from 'next-auth';
import Link from 'next/link';
import User from './User';

type userAvatarProps = {
  session: Session | null;
};

const UserAvatar = async ({ session }: userAvatarProps) => {
  console.log(session);

  if (!session?.user?.userId) {
    return (
      <div>
        <Link
          href={'/login'}
          className='rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800'
        >
          ورود/ثبت نام
        </Link>
      </div>
    );
  }

  const user = await prismadb.user.findUnique({
    where: {
      id: session.user.userId,
    },
  });
  return <User name={user?.name as string} />;
};

export default UserAvatar;
