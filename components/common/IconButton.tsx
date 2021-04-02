import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

type Props = {
  Icon: ReactNode;
};
const IconButton = ({ Icon }: Props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Wrapper>{Icon}</Wrapper>;
};

export default IconButton;

const Wrapper = styled.button`
  ${tw`inline-flex items-center p-1 text-gray-600 bg-gray-200 hover:bg-gray-500 border border-transparent rounded-full focus:outline-none shadow-sm focus:ring-gray-300 focus:ring-offset-2 focus:ring-2`}
`;
