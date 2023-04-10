import { ListTechnologies } from '@/constants';
import { FC } from 'react';

const Technologies: FC = () => {
  return (
    <div
      id='technologies'
      className='px-[120px] pt-[80px] pb-[120px] bg-black box-border'
    >
      <h3 className='text-primary text-[80px] font-bold leading-[80px] text-center mb-[120px] drop-shadow-[0px_0px_5px_1px_rgba(255,255,255,0.8)]'>
        Technologies
      </h3>
      <div className='grid grid-cols-3 gap-[30px]'>
        {ListTechnologies.map((ele, parentIndex) => {
          return (
            <div
              key={ele.title}
              className={`${
                parentIndex === 1 ? 'bg-primary scale-y-[1.1]' : 'bg-secondary'
              } box-border py-[40px] px-[25px] rounded ${
                parentIndex === 1
                  ? 'shadow-[1px_1px_3px_1px_#FFB600]'
                  : 'shadow-[1px_1px_3px_1px_#F4E8D4]'
              }`}
            >
              <div className='w-[100px]'>{ele.logo}</div>
              <h4 className='text-black text-[40px] my-[30px] font-bold leading-[70px]'>
                {ele.title}
              </h4>
              <div>
                {ele.techs.map((ele, index) => {
                  return (
                    <div key={index} className='flex items-center mb-[10px]'>
                      <span
                        className={`inline-block h-[10px] w-[10px] ${
                          parentIndex === 1 ? 'bg-secondary' : 'bg-primary'
                        } clip-path-arrowRight`}
                      />
                      <p className='text-black text-[20px] font-bold ml-[15px]'>
                        {ele}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
