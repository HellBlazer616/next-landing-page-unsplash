import tw, { styled } from 'twin.macro';
import Dropdown from './Dropdown';

const Masonry = () => {
  return (
    <div tw="container mt-24 mx-auto p-4 space-y-3">
      <Dropdown />
      <Wrapper>
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" className="col__2x" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" className="col__2x" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
        <div tw="bg-gray-200" />
      </Wrapper>
    </div>
  );
};

export default Masonry;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 250px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  .col__2x {
    grid-row-end: span 2;
  }
  .col__3x {
    grid-row-end: span 3;
  }
`;
