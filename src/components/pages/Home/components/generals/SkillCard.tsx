import { FC } from 'react';

interface Props {
  title?: string;
  companyName?: string;
  dateFrom?: string;
  dateTo?: string;
  description?: string;
}

const SkillCard: FC<Props> = ({
  title,
  companyName,
  dateFrom,
  dateTo,
  description,
}) => {
  return (
    <div className='text-white border-box bg-gray-700 px-[40px] py-[20px] rounded-[5px] box shadow-[0px_0px_5px_1px_rgba(255,255,255,0.4)]'>
      <h4 className='text-[36px] mb-[5px] font-semibold text-secondary '>
        {title}
      </h4>

      <h5 className='text-[18px] mb-[5px] font-semibold text-secondary'>
        {companyName}
      </h5>

      <div className='mb-[5px]'>
        <span className='text-[14px] text-secondary'>
          {dateFrom} - {dateTo}
        </span>
      </div>
      <div>
        <p
          className='text-[18px]'
          dangerouslySetInnerHTML={{
            __html: String(description),
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;

export type { Props as SkillCardProps };
