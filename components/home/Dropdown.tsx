import Link from 'next/link';
import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useTransition, config, animated } from 'react-spring';
import tw, { styled } from 'twin.macro';

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuTransition = useTransition(showMenu, null, {
    from: {
      opacity: 0,
      scale: 95,
      transform: `translate3d(0px,-10px,0px)`,
    },
    enter: {
      opacity: 1,
      scale: 100,
      transform: `translate3d(0,0,0)`,
    },
    leave: {
      opacity: 0,
      scale: 95,
      transform: `translate3d(0px,-10px,0px)`,
    },
    config: config.stiff,
  });

  return (
    <div tw="flex items-center justify-between">
      <div>
        <button
          type="button"
          tw="inline-flex items-center px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2"
        >
          All
        </button>
        <button
          type="button"
          tw="inline-flex items-center px-3 py-1.5 text-sm font-semibold hover:bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2"
        >
          Photos
        </button>
      </div>
      <div tw="relative">
        <button
          type="button"
          tw="relative inline-flex justify-center px-4 py-2 w-full text-gray-700 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 rounded-md focus:outline-none shadow-sm focus:ring-accent-500 focus:ring-offset-gray-100 focus:ring-offset-2 focus:ring-2"
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowMenu((show) => !show)}
        >
          Recommended
          <HiChevronDown tw="-mr-1 ml-2 w-5 h-5" />
        </button>

        {showMenuTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                tw="absolute right-0 mt-2 w-48 bg-white focus:outline-none shadow-lg origin-top-right ring-black ring-opacity-5 ring-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                key={key}
                style={props}
              >
                <div tw="py-1" role="none">
                  <button
                    type="button"
                    tw="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Most Recent
                  </button>

                  <button
                    type="button"
                    tw="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Most Viewed
                  </button>

                  <button
                    type="button"
                    tw="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Most Downloaded
                  </button>

                  <button
                    type="button"
                    tw="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Most Appreciated
                  </button>
                </div>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  ${tw`relative inline-block text-left`}
`;
