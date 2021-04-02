import tw, { styled } from 'twin.macro';
import Header from '../components/Header';

export default function Home() {
  return (
    <div tw="min-h-screen bg-accent-500">
      <Header />
    </div>
  );
}
