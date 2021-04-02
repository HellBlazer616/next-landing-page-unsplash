/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import { HiDotsHorizontal, HiMenu, HiOutlineX } from 'react-icons/hi';
import { useTransition, config, animated } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Logo from '../public/svg/logo.svg';
import VisuallyHidden from './common/VisuallyHidden';
import '@reach/dialog/styles.css';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const openMobileMenu = () => setShowMobileMenu(true);
  const closeMobileMenu = () => setShowMobileMenu(false);

  const [showClickMenu, setShowClickMenu] = useState(false);

  const AnimatedDialogOverlay = animated(DialogOverlay);
  const AnimatedDialogContent = animated(DialogContent);

  const showMobileMenuTransition = useTransition(showMobileMenu, null, {
    from: { opacity: 0, transform: `translate3d(0px,-10px,3px)` },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0px,10px,3px)` },
    config: config.stiff,
  });

  const showProductMenuTransition = useTransition(showClickMenu, null, {
    from: {
      opacity: 0,
      scale: 95,
      transform: `translate3d(3px,0px,10px)`,
    },
    enter: {
      opacity: 1,
      scale: 100,
      transform: `translate3d(0,0,0)`,
    },
    leave: {
      opacity: 0,
      scale: 95,
      transform: `translate3d(3px,0px,10px)`,
    },
    config: config.stiff,
  });

  return (
    <nav tw="px-2 h-16 bg-white shadow">
      <div id="menu" tw="flex items-center justify-between h-full">
        <div id="logo">
          <Link href="/" passHref>
            <StyledLink>
              <VisuallyHidden>Home</VisuallyHidden>
              <Logo tw="w-40 h-12" />
            </StyledLink>
          </Link>
        </div>
        <DesktopMenu id="desktop-menu">
          <div tw="flex items-center h-full space-x-3">
            <Link href="/" passHref>
              <StyledLink>Explore</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>Discover</StyledLink>
            </Link>
            <Link href="/" passHref>
              <StyledLink>For Professionals</StyledLink>
            </Link>
            <button
              type="button"
              tw="relative hover:text-gray-500 focus:outline-none ring-accent-500 focus:ring-1"
              onClick={() => setShowClickMenu((show) => !show)}
            >
              <VisuallyHidden>Open Second menu</VisuallyHidden>
              <HiDotsHorizontal tw="w-6 h-6" />
            </button>
            {showProductMenuTransition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    tw="absolute z-40 right-1 top-12 mt-2 w-56 text-gray-100 bg-gray-800 focus:outline-none shadow-lg origin-top-right ring-black ring-opacity-5 ring-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="second-menu"
                    key={key}
                    style={props}
                  >
                    <div tw="py-1" role="none">
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          About Click Motto
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          Pricing
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          License
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          Partnership
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          Blog
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          Help
                        </a>
                      </Link>
                      <Link passHref href="/">
                        <a
                          tw="block px-4 py-2 text-sm hover:bg-gray-600"
                          role="menuitem"
                        >
                          Join The Team
                        </a>
                      </Link>
                    </div>
                  </animated.div>
                )
            )}
          </div>
          <div tw="width[2px] h-8 bg-gray-300" />
          <div tw="space-x-3">
            <button
              type="button"
              tw="inline-flex items-center px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 border border-transparent rounded focus:outline-none shadow-sm focus:ring-accent-500 focus:ring-offset-2 focus:ring-2"
            >
              Login
            </button>
            <button
              type="button"
              tw="inline-flex items-center px-3 py-1.5 text-white text-sm font-semibold bg-accent-600 hover:bg-accent-700 border border-transparent rounded focus:outline-none shadow-sm focus:ring-accent-500 focus:ring-offset-2 focus:ring-2"
            >
              Join Free
            </button>
          </div>
        </DesktopMenu>
        <div id="mobile-menu" tw="md:hidden">
          <button
            type="button"
            tw="inline-flex items-center px-3 py-1.5 hover:text-accent-500 text-sm font-semibold border border-transparent rounded focus:outline-none shadow-sm focus:ring-accent-500 focus:ring-offset-2 focus:ring-2"
            onClick={() => setShowMobileMenu((show) => !show)}
          >
            <VisuallyHidden>Open Mobile Menu</VisuallyHidden>
            <HiMenu tw="w-8 h-8" />
          </button>
          {showMobileMenuTransition.map(
            ({ item, key, props }) =>
              item && (
                <AnimatedDialogOverlay
                  as="div"
                  isOpen={showMobileMenu}
                  key={key}
                  style={{ opacity: props.opacity }}
                  tw="bg-white"
                >
                  <AnimatedDialogContent
                    as="div"
                    tw="relative z-40 m-0 mx-auto p-0 w-full text-white bg-transparent sm:w-11/12 xl:w-2/4"
                    style={props}
                    aria-label="compose micro message"
                  >
                    <button
                      type="button"
                      tw="absolute right-1 top-4 text-gray-400 hover:text-gray-500 rounded-md focus:outline-none focus:ring-accent-500 focus:ring-2"
                      onClick={closeMobileMenu}
                    >
                      <span tw="sr-only">Close</span>
                      <HiOutlineX tw="w-6 h-6" />
                    </button>
                    <div tw="z-40 flex flex-col justify-center px-4 py-16 w-full text-black space-y-5">
                      <Link href="/" passHref>
                        <MobileStyledLink>Explore</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Discover</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>For Professionals</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>About Click Motto</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Pricing</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>License</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Partnerships</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Blog</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Help</MobileStyledLink>
                      </Link>
                      <Link href="/" passHref>
                        <MobileStyledLink>Join The Team</MobileStyledLink>
                      </Link>
                      <span tw="height[2px] w-full bg-gray-300" />
                      <MobileStyledLink as="button" tw="hover:text-accent-500">
                        Login
                      </MobileStyledLink>
                      <MobileStyledLink as="button" tw="hover:text-accent-500">
                        Join Free
                      </MobileStyledLink>
                    </div>
                  </AnimatedDialogContent>
                </AnimatedDialogOverlay>
              )
          )}
        </div>
      </div>
    </nav>
  );
};

const StyledLink = tw.a`inline-flex place-content-center hover:text-gray-500 font-semibold transform-gpu transition`;
const DesktopMenu = tw.div`hidden md:flex items-center h-full space-x-3`;
export default Header;
const MobileStyledLink = styled.a`
  ${tw`inline-flex place-content-center hover:text-gray-500 text-xl font-semibold transform-gpu transition`}
`;
