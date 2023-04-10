import { GmailIcon, ReactLogo } from '@/components/atoms/icon';

const formItems = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
];

const ContactPage = () => {
  return (
    <div
      id='contact'
      className='px-[250px] pt-[30px] pb-[50px] h-[calc(100vh - 300px)] box-border'
    >
      <div className='rounded-[50px] shadow-[28px_28px_56px_#cfc5b4,-28px_-28px_56px_#fffff4]   flex'>
        <div
          id='contact-left '
          className='flex-1 px-[50px] py-[50px] box-border'
        >
          <h4 className='text-center font-bold text-black text-[36px]'>
            Feel Free To Contact Me
          </h4>
          <div className='my-[50px]'>
            <form>
              {formItems.map((ele) => {
                return (
                  <div className='flex flex-col mb-[15px]' key={ele.name}>
                    <label
                      htmlFor={ele.name}
                      className='text-20px font-semibold mb-[10px]'
                    >
                      {ele.label}
                    </label>
                    <input
                      id={ele.name}
                      name={ele.name}
                      type={ele.type}
                      className=' h-[40px] outline-none px-[5px] rounded-[5px] focus:outline-primary transition-all duration-300 '
                    />
                  </div>
                );
              })}
              <div className='flex flex-col mb-[15px]'>
                <label
                  htmlFor={'content'}
                  className='text-20px font-semibold mb-[10px]'
                >
                  Message
                </label>
                <textarea
                  placeholder='Message...'
                  id={'message'}
                  name={'message'}
                  className=' h-[300px] outline-none px-[5px] rounded-[5px] focus:outline-primary transition-all duration-300 resize-none'
                />
              </div>
            </form>
          </div>
        </div>
        <div
          id='contact-right'
          className='flex flex-col flex-1 items-center justify-center   py-[50px]'
        >
          <div className='w-[300px]  animate-spin-slow'>
            <ReactLogo />
          </div>

          <div className=''>
            <div className='flex justify-center items-center'>
              <div className='box-content w-[20px] px-[10px] py-[10px] rounded-[9999px]'>
                <GmailIcon />
              </div>
              <p>tienphong111222@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
