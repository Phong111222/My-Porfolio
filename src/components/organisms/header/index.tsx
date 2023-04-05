import HamburgerButton from '@/components/atoms/HamburgerButton';
import Navigation from '@/components/molecules/navigation';
import MobileNavigation from '@/components/molecules/navigation/MobileNavigation';
import useIsMobile from '@/hooks/useIsMobile';
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

  return (
    <div
      id='header'
      className='flex justify-between items-center px-[16px] py-[10px] bg-secondary shadow h-[5vh] box-border'
    >
      <h1
        className='text-[20px] sm:text-[32px] md:text-[32px] lg:text-[40px] md:text-black font-semibold cursor-pointer'
        onClick={() => router.push('/')}
      >
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
      {isMobile && (
        <MobileNavigation open={openDrawerNavigation} onClose={onClose} />
      )}
    </div>
  );
};

export default Header;
