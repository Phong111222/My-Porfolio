import { navigationItems } from '@/constants/index';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Navigation: FC = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleNavigatePath = (path: string) => {
    router.push(path);
  };

  return (
    <div id='navigation-container' className='flex container'>
      {navigationItems.map((item) => {
        const isSelected = item.path === pathName;

        const afterStyle = `after:duration-500
          after:content-[''] 
          after:block 
          ${isSelected ? 'after:w-[100%]' : 'after:w-[0]'} 
          after:h-[3px] 
          after:bg-primary`;

        return (
          <div
            key={item.title}
            onClick={() => handleNavigatePath(String(item.path))}
            className={`mx-[30px] last:mr-[0] duration-300  ${
              isSelected ? 'text-primary' : 'text-black'
            }  cursor-pointer font-semibold ${afterStyle}`}
          >
            <p className='text-[24px]'>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
