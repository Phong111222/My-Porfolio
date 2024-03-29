import { ListTechnologies } from '@/constants/index';

const SkillPage = () => {
  return (
    <div
      id='skill'
      className='px-[120px] pt-[80px] pb-[120px] bg-secondary box-border  animate-fade-in'
    >
      <h3 className='text-black text-[80px] font-bold leading-[80px] text-center mb-[120px] drop-shadow-[0px_0px_5px_1px_rgba(255,255,255,1)]'>
        Skills And Technologies
      </h3>
      <div className='grid grid-cols-3 gap-[30px]'>
        {ListTechnologies.map((ele, parentIndex) => {
          return (
            <div
              key={ele.title}
              className={`${
                parentIndex === 1 ? 'bg-primary scale-y-[1.1]' : 'bg-black'
              } box-border py-[40px] px-[25px] rounded shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]`}
            >
              <div className='w-[100px]'>{ele.logo}</div>
              <h4
                className={`${
                  parentIndex === 1 ? 'text-black' : 'text-secondary'
                } text-[40px] my-[30px] font-bold leading-[70px] `}
              >
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
                      <p className='text-secondary text-[20px] font-bold ml-[15px]'>
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

export default SkillPage;
