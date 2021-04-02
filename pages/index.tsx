import tw, { styled } from 'twin.macro';
import { useQuery } from 'react-query';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import HorizontalMenu from '../components/home/HorizontalMenu';
import Masonry from '../components/home/Masonry';
import { Base } from '../Base';

export default function Home() {
  const { data, status } = useQuery<[Base]>('images', async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
      {
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
        },
      }
    );
    return res.data;
  });
  return (
    <div tw="min-h-screen">
      <Header />
      <Hero />
      <HorizontalMenu />
      {data != null ? <Masonry data={data} /> : null}
      {data == null && status === 'loading' && (
        <ClipLoader color="#1f1f1f" loading={status === 'loading'} size={150} />
      )}
    </div>
  );
}
