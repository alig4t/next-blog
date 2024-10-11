import NewPostForm from '@/components/admin/New-post-form';
import AdminPostList from '@/components/admin/admin-post-list';
import Container from '@/components/ui/Container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';
import Loading from '../loading';

const AdminPage = async () => {
  const session = await getServerSession(authOption);
  // console.log(session);

  if (!session || session?.user.userRole != 'ADMIN')
    return (
      <div className='flex min-h-dvh flex-col items-center justify-center'>
        دسترسی غیرمجاز
      </div>
    );
  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        <div className='w-full p-2'>
          <NewPostForm />
        </div>
        <div className='my-5 block border-b shadow-md md:hidden'></div>
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <Suspense fallback={<Loading />}>
            <AdminPostList />
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default AdminPage;
