import { ReactLogo } from '@/components/atoms/icon';
import Image from 'next/image';

const RightTexts = [
  {
    id: 1,
    content: 'Viet Nam, Ho Chi Minh city',
  },
  {
    id: 2,
    content: 'tienphong111222@gmail.com',
  },
  {
    id: 3,
    content: '+84 365 313 046',
  },
];

const Footer = () => {
  return (
    <div id='footer' className='bg-black px-[180px] py-[100px] mt-auto'>
      <div className='flex items-center'>
        <div id='footer-left-content' className='w-[70%]'>
          <div className='flex items-center mb-[20px]'>
            <div className='w-[40px] animate-spin-slow mr-1'>
              <ReactLogo />
            </div>
            <h5 className='text-secondary text-[40px] font-semibold'>
              Nguyen Tien Phong
            </h5>
          </div>
          <div className='flex'>
            <div className='inline-block bg-secondary py-[10px] px-[10px] rounded-[9999px] mr-[10px]'>
              <Image
                src={'/assets/gmail.svg'}
                width={20}
                height={20}
                alt='gmail'
              />
            </div>
            <div className='inline-block bg-secondary py-[10px] px-[10px] rounded-[9999px] mr-[10px]'>
              <Image
                src={'/assets/linkedin.svg'}
                width={20}
                height={20}
                alt='linkedin'
              />
            </div>
            <div className='inline-block bg-secondary py-[10px] px-[10px] rounded-[9999px]'>
              <Image
                src={'/assets/skype.svg'}
                width={20}
                height={20}
                alt='skype'
              />
            </div>
          </div>
        </div>
        <div id='footer-right-content' className='flex-1'>
          {RightTexts.map((ele, index) => {
            return (
              <div
                key={ele.id}
                className={`flex items-center ${
                  index === RightTexts.length - 1 ? '' : 'mb-[20px]'
                }`}
              >
                <span className='inline-block h-[10px] w-[10px] bg-primary clip-path-arrowRight mr-[10px]' />
                <p className='text-secondary text-[18px]'>{ele.content}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className='text-secondary text-center mt-[50px]'>
        &copy; Implement & Build By Nguyen Tien Phong
      </p>
    </div>
  );
};

export default Footer;
