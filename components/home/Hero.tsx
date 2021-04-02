import { HiSearch } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';

const Hero = () => {
  return (
    <Wrapper>
      <div className="container">
        <span className="header__box">
          <h1 tw="font-bold">
            Your local source of high quality images and videos directly from
            their creators
          </h1>
        </span>
        <div tw="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Search photos and videos"
            tw="block px-5 py-3 w-full text-black focus:border-accent-500 rounded-full focus:ring-accent-500"
          />
          <div tw="absolute inset-y-0 right-2 flex items-center pr-3 pointer-events-none">
            <HiSearch tw="w-5 h-5 text-black" />
          </div>
        </div>

        <div tw="px-4 space-x-1">
          Recommended:{' '}
          <button
            type="button"
            tw="text-gray-300 focus:outline-none ring-accent-500 focus:ring-1"
          >
            summer,
          </button>
          <button
            type="button"
            tw="text-gray-300 focus:outline-none ring-accent-500 focus:ring-1"
          >
            food,
          </button>
          <button
            type="button"
            tw="text-gray-300 focus:outline-none ring-accent-500 focus:ring-1"
          >
            covid-19,
          </button>
          <button
            type="button"
            tw="text-gray-300 focus:outline-none ring-accent-500 focus:ring-1"
          >
            real-estate,
          </button>
          <button
            type="button"
            tw="text-gray-300 focus:outline-none ring-accent-500 focus:ring-1"
          >
            love,
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  ${tw`relative grid content-center justify-center`}

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/image/bg.jpg');
    background-position: 15% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(100vh - 1rem);
    filter: brightness(70%);
  }
  @media (min-width: 1024px) {
    :before {
      background-position: 50% 50%;
    }
  }

  & .container {
    ${tw`relative flex flex-col justify-center m-auto p-4 w-full max-w-4xl h-full text-white space-y-3`}
    height: calc(100vh - 4rem);
    & .header__box {
      ${tw`px-4`}
      h1 {
        ${tw`text-4xl lg:text-5xl`}
      }
    }
  }
`;
