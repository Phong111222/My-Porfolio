import ReactLogo from '@/components/atoms/ReactIcon';

const descriptionStyle = 'text-black text-[22px] font-medium mb-[20px]';

const Banner = () => {
  return (
    <div className='h-[95vh] box-border bg-secondary'>
      <div className='flex  px-[120px] py-[150px]'>
        <div id='left-info' className='w-1/2'>
          <div className='ml-auto w-[90%]'>
            <div className='flex items-center box-border my-[20px] mb-[20px]'>
              <div className='flex-1 h-[3px] bg-black mr-[10px]' />
              <h2 className='text-black font-semibold text-[28px]'>
                Software Developer / ReactJS Developer
              </h2>
              <div className='flex-1 h-[3px] bg-black ml-[10px]' />
            </div>
            <h2 className='text-black font-bold text-[52px] border-box mb-[20px]'>
              NICE TO MEET YOU,
              <br /> MY NAME IS NGUYEN TIEN{' '}
              <span className='text-primary'>P</span>HONG
            </h2>
            <p className={`${descriptionStyle}`}>
              I have been learning and working as a React Developer since 2020
            </p>
            <p className={`${descriptionStyle}`}>
              I have advance knowledge in ReactJS and have my own React codebase
              that is applied for 3 projects and two of them are now running on
              production
            </p>
            <p className={`${descriptionStyle}`}>
              I also have experiences in mobile development with React Native
            </p>
            <div className='flex justify-center items-center mt-[80px]'>
              <a className='inline-block px-[30px] py-[10px] bg-primary text-black mr-[20px] text-[18px] rounded-[3px] font-semibold cursor-pointer shadow-[-10px_10px_5px_0px_rgba(0,0,0,1)]'>
                Contact Me
              </a>
              <a className='inline-block px-[30px] py-[10px] bg-black text-white text-[18px] rounded-[3px] font-semibold cursor-pointer shadow-[0px_0px_10px_1px_rgba(0,0,0,0.3)]'>
                Know More
              </a>
            </div>
          </div>
        </div>
        <div
          id='right-info'
          className='flex-1 flex justify-center items-center'
        >
          <div className='w-[600px]'>
            <ReactLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;