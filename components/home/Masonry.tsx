import Image from 'next/image';
import { HiHeart, HiPlus } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';
import { Base } from '../../Base';
import IconButton from '../common/IconButton';
import Dropdown from './Dropdown';

type Props = {
  portrait?: boolean;
  data: [Base];
};

const Masonry = ({ portrait, data }: Props) => {
  return (
    <div
      tw="container mt-24 mx-auto p-4 space-y-3"
      className={portrait === true ? 'col__2x' : undefined}
    >
      <Dropdown />
      <Wrapper>
        {data.map((value) => {
          return (
            <ImageBox>
              <div className="image__wrapper">
                <div
                  className="btn__group"
                  tw="absolute z-10 right-0 top-0 p-2 space-x-2"
                >
                  <IconButton tw="p-4" Icon={<HiHeart tw="w-5 h-5" />} />
                  <IconButton tw="" Icon={<HiPlus tw="w-5 h-5" />} />
                </div>
                <Image src={value.urls.regular} layout="fill" />
              </div>
            </ImageBox>
          );
        })}
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

const ImageBox = styled.div`
  & .image__wrapper {
    ${tw`relative w-full h-full`}
  }
  & .btn__group {
    display: none;
  }
  :hover {
    & .image__wrapper {
      & .btn__group {
        display: block;
      }
    }
  }
`;
