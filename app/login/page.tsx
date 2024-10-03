import LoginForm from '@/components/auth/login-form';
import Container from '@/components/ui/Container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession(authOption);
  if (session?.user.userId) redirect('/');
  return (
    <div className='mt-20'>
      <Container>
        <LoginForm />
        <Link
          href={'/register'}
          className='text-gray-700 transition hover:text-blue-600'
        >
          <p className='mt-6 text-center text-xs'>برای عضویت کلیک کنید</p>
        </Link>
      </Container>
    </div>
  );
};

export default LoginPage;
