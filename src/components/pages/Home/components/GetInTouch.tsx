import Image from 'next/image';
const GetInTouch = () => {
  return (
    <div className='px-[120px] py-[80px] bg-primary'>
      <div className='flex'>
        <div id='left-contact flex-1' className=''>
          <h3 className='text-[80px] font-bold mb-[30px]'>Get In Touch</h3>
          <p className='text-[20px] font-medium mb-[30px]'>
            Please feel free to contact me. You can contact me by using Email
            <br />, Skype or LinkedIn and I will try contact as soon as possible
            <br />
            to response you.
          </p>
          <a className='inline-block px-[30px] py-[10px] bg-black text-white mr-[20px] text-[18px] rounded-[3px] font-semibold cursor-pointer '>
            Contact
          </a>
        </div>
        <div
          id='right-contact'
          className='relative flex flex-1 flex-grow-1 justify-center items-center'
        >
          <Image
            className={`absolute translate-x-[-100px] translate-y-[-100px]`}
            src={'/assets/coding1.jpeg'}
            width={400}
            height={400}
            alt='coding1'
          />
          <Image
            className={`absolute translate-x-[200px] translate-y-[-50px]`}
            src={'/assets/coding2.jpeg'}
            width={320}
            height={300}
            alt='coding2'
          />
          <Image
            className={`absolute translate-y-[80px]`}
            src={'/assets/coding3.jpeg'}
            width={350}
            height={350}
            alt='coding3'
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
