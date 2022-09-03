import { useRouter } from 'next/router';

const Index = () => {
  if (typeof window !== 'undefined') {
    const router = useRouter();
    router.push('/');
  }
  return <></>;
};

Index.getInitialProps = async ({ ctx }) => {
  if (ctx && ctx.req) {
    ctx.res.statusCode = 302;
    ctx.res.setHeader('Location', '/');
  }
  return { props: '' };
};

export default Index;
