import { FC, ReactNode } from 'react';

const PaddingContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='px-[16px]'>{children}</div>;
};

export default PaddingContainer;
