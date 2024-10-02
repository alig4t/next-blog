import Container from '@/components/ui/Container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const RegisterPage = async () => {
  const session = await getServerSession(authOption);

  if (session?.user.userId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>ss</Container>
    </div>
  );
};

export default RegisterPage;
