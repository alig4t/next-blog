import RegisterForm from '@/components/auth/register-form';
import Container from '@/components/ui/Container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const RegisterPage = async () => {
  const session = await getServerSession(authOption);
  console.log(session);
  if (session?.user.userId) redirect('/');

  return (
    <div className='mt-20'>
      <Container>
        <RegisterForm />
        <Link
          href={'/login'}
          className='text-gray-700 transition hover:text-blue-600'
        >
          <p className='mt-6 text-center text-xs'>
            قبلا ثبت نام کرده اید؟ وارد شوید
          </p>
        </Link>
      </Container>
    </div>
  );
};

export default RegisterPage;
