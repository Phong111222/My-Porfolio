import HamburgerButton from '@/components/atoms/HamburgerButton';
import ReactLogo from '@/components/atoms/icon/ReactIcon';
import Navigation from '@/components/molecules/navigation';
import MobileNavigation from '@/components/molecules/navigation/MobileNavigation';
import useIsMobile from '@/hooks/useIsMobile';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const Header = () => {
  const { isMobile } = useIsMobile();
  const [openDrawerNavigation, setOpenDrawerNavigation] = useState(false);
  const router = useRouter();
  const onOpenDrawerNavigation = useCallback(() => {
    setOpenDrawerNavigation((prev) => !prev);
  }, []);

  const onClose = (path: string) => {
    router.push(path);
    setOpenDrawerNavigation(false);
  };

  const onDownloadCV = () => {};

  return (
    <div
      id='header'
      className='flex justify-between items-center px-[50px] py-[50px] bg-secondary  box-border animate-fade-in'
    >
      <h1
        className='text-[20px] sm:text-[32px] md:text-[32px] lg:text-[40px] md:text-primary font-semibold cursor-pointer flex items-center'
        onClick={() => router.push('/')}
      >
        <div className='w-[80px] mr-[20px] animate-spin-slow duration-700'>
          <ReactLogo />
        </div>
        Phong Nguyen Tien
      </h1>
      <div className={`${isMobile && 'absolute z-10 right-0 mr-[16px]'}`}>
        {isMobile ? (
          <HamburgerButton
            onClick={onOpenDrawerNavigation}
            isToggle={openDrawerNavigation}
          />
        ) : (
          <Navigation />
        )}
      </div>

      <a
        href={'cv.pdf'}
        download={'NguyenTienPhong-CV'}
        className='inline-block px-[30px] py-[10px] bg-primary text-black text-[18px] rounded-[3px] 
          font-semibold cursor-pointer shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]'
      >
        Download CV
      </a>

      {isMobile && (
        <MobileNavigation open={openDrawerNavigation} onClose={onClose} />
      )}
    </div>
  );
};

export default Header;
