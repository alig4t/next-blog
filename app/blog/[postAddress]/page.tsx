import Container from '@/components/ui/Container';
import prismadb from '@/libs/prismadb';
import Image from 'next/image';

type postAddressType = {
  postAddress: string;
};

type IProps = {
  params: postAddressType;
};

const SinglePost = async ({ params }: IProps) => {
  const postAddress = decodeURI(params.postAddress);
  console.log(postAddress);

  const post = await prismadb.post.findUnique({
    where: {
      address: postAddress,
    },
  });
  if (!post) return null;

  return (
    <div>
      <Container className='mt-6'>
        <div className='flex flex-col gap-y-10'>
          <div className='relative h-60 w-full overflow-hidden rounded-b-md shadow-lg md:h-96'>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes='100vw'
              className='object-cover object-top'
              quality={100}
            />
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-justify text-lg'>{post.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePost;
