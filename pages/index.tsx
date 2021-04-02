import { HiSearch } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import HorizontalMenu from '../components/home/HorizontalMenu';
import Masonry from '../components/home/Masonry';

export default function Home() {
  return (
    <div tw="min-h-screen">
      <Header />
      <Hero />
      <HorizontalMenu />
      <Masonry />
    </div>
  );
}
