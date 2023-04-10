import { FC, ReactNode } from 'react';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='h-[100vh] flex flex-col overflow-auto'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
