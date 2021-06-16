import Button from 'components/Button';
import { useRouter } from 'next/router';
import Title from 'components/Title';
import Layout from 'Layout';

export default function Home() {
  const router = useRouter();

  console.log(router);
  return <Layout></Layout>;
}
