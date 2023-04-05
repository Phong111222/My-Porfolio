import { navigationItems } from '@/constants';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface Props {
  open: boolean;
  onClose?: <T extends string>(params: T) => void;
}

const MobileNavigation: FC<Props> = ({ open, onClose }) => {
  const pathName = usePathname();
  return (
    <div
      className={`fixed w-[100vw] h-[100vh] bg-secondary left-0 top-0 flex items-center justify-between flex-col py-[300px]
        duration-[400ms] 
      ${open ? 'translate-x-[0%]' : 'translate-x-[100%]'}
      `}
    >
      <div className='' onClick={() => onClose?.('/')}>
        <p className='font-[500] text-black text-[20px]'>Home</p>
      </div>
      {navigationItems.map((ele) => {
        const isSelected = ele.path === pathName;

        return (
          <div
            key={ele.title}
            className=''
            onClick={() => onClose?.(ele?.path as string)}
          >
            <p
              className={`font-[500] ${
                isSelected ? 'text-primary' : 'text-black'
              } text-[20px]`}
            >
              {ele.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNavigation;
