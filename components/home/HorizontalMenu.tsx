/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import VisuallyHidden from '../common/VisuallyHidden';

const LIST = [
  { name: 'Workspace', image: '/image/workspace.jpg' },
  { name: 'Summer', image: '/image/summer.jpg' },
  { name: 'City', image: '/image/city.jpg' },
  { name: 'Food', image: '/image/food.jpg' },
  { name: 'Gravity', image: '/image/gravity.jpg' },
  { name: 'Love', image: '/image/love.jpg' },
];

const HorizontalMenu = () => {
  const overflowRef = useRef<null | HTMLDivElement>(null);
  return (
    <div tw="container relative -mt-20 mx-auto p-4 bg-white">
      <div tw="container mx-auto">
        <h2 tw="text-black text-xl">Top Categories</h2>
      </div>
      <HorizontalMenuWrapper id="horizontal">
        <button
          onClick={() =>
            overflowRef.current?.scrollBy(-overflowRef.current.clientWidth, 0)
          }
          className="scroll__control scroll__control--left"
          type="button"
          aria-label="scroll-left"
        >
          <VisuallyHidden>Scroll Left</VisuallyHidden>
          <span>
            <HiChevronLeft />
          </span>
        </button>
        <HorizontalMenuComponent
          ref={overflowRef}
          className="horizontal__menu"
          id="scroll__container"
        >
          {LIST.map((value, index) => (
            <Link
              passHref
              href={`?search=${value.name}`}
              scroll={false}
              key={value.name}
            >
              <a>
                <div className="category__card">
                  <div className="category__image" tw="relative">
                    <Image
                      src={value.image}
                      alt={value.name}
                      priority
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="category__name">
                    <p>{value.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </HorizontalMenuComponent>
        <button
          onClick={() =>
            overflowRef.current?.scrollBy(overflowRef.current.clientWidth, 0)
          }
          className="scroll__control scroll__control--right"
          type="button"
          aria-label="scroll-right"
        >
          <VisuallyHidden>Scroll Right</VisuallyHidden>
          <span>
            <HiChevronRight />
          </span>
        </button>
      </HorizontalMenuWrapper>
    </div>
  );
};

export default HorizontalMenu;

const HorizontalMenuWrapper = styled.section`
  ${tw`container relative mx-auto h-28 bg-white`}
  -webkit-overflow-scrolling: touch;

  :hover {
    & .scroll__control {
      background: #fff;
      span {
        visibility: visible;
      }
    }
  }

  & .scroll__control {
    ${tw`absolute z-10 bottom-0 top-3/4 hidden w-12 h-12 text-black bg-transparent border border-transparent rounded-full focus:outline-none cursor-pointer focus:ring-accent-500 focus:ring-offset-gray-50 focus:ring-2 lg:block`}

    span {
      ${tw`flex items-center justify-center text-4xl invisible hover:visible`}
    }
  }

  & .scroll__control--left {
    ${tw`left-0`}
  }
  & .scroll__control--right {
    ${tw`right-0`}
  }
`;

const HorizontalMenuComponent = styled.div`
  ${tw`flex py-2 overflow-x-scroll`}

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    visibility: hidden;
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--thumbBG);
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25);
  }

  & .category__card {
    ${tw`relative flex flex-col flex-shrink-0 items-center justify-center mx-4 hover:no-underline`}

    & .category__image {
      ${tw`flex items-center justify-center w-48 h-24 lg:w-96 lg:h-48`}
      img {
        ${tw`w-full h-auto object-contain`}
        filter: brightness(80%);
      }
    }

    & .category__name {
      ${tw`absolute mt-2 text-center text-white text-sm font-semibold lg:text-xl`}
    }
  }
`;
