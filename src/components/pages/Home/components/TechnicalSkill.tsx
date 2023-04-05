import SkillCard, { SkillCardProps } from './generals/SkillCard';

const SkillDescriptions = [
  {
    id: 1,
    content:
      'Meeting & discuss with client to come up with the best appropriate solution',
  },
  {
    id: 2,
    content: 'Implement codebase for web and apps',
  },
  {
    id: 3,
    content: `Implement features to fit the client's requirement`,
  },
  {
    id: 4,
    content: `Deliver, transfer project information for team members`,
  },
  {
    id: 5,
    content: 'Tracking members progress and management agile board',
  },
  {
    id: 6,
    content: 'Develop and deploy code as npm package to use in other project',
  },
  {
    id: 7,
    content:
      'Integrate third party library provided by client into existing web and app',
  },
];

const ExperienceDescriptions: SkillCardProps[] = [
  {
    title: 'Collumino',
    companyName: 'Saigon Technology',
    dateFrom: '01/06/2022',
    dateTo: 'Present',
    description: `Implement function in follow client's requirements. <br/> 
         Make function in both web and mobile app. </br>
         Implement mobile app codebase by using React Native. <br/>
         Implement biometric function to login in app. <br/>
         Implement QR code scan. <br/>
         Enhance and integrate new apis into both web and app.
      `,
  },
  {
    title: 'InterGram',
    companyName: 'Saigon Technology',
    dateFrom: '01/09/2022',
    dateTo: '01/02/2023',
    description: `Implement function in follow client's requirements. <br/> 
         Implement codebase for web and setup docker file. </br>
         Implement router structure. <br/>
         Implement breadcrumbs. <br/>
         Integrate React-query. <br/>
         Integrate OIDC client for authentication and authorization. <br/>
         Config axios. <br/>
         Support new member <br/>
      `,
  },
];

const TechnicalSkills = () => {
  return (
    <div id='technical-skills' className='bg-black h-[100vh] border-box'>
      <div className='v-[100%] flex px-[120px] py-[40px]'>
        <div className='flex-1'>
          <div className='w-[80%] mr-auto'>
            <h3 className='text-primary text-[80px] font-bold leading-[80px] tracking-[5px] '>
              Skills and <br />
              Experience
            </h3>
            <p className='text-white text-[22px] leading-[50px] my-[30px]'>
              ReactJS Developer | React Native Developer | <br />
              Html, Css, Javascript, ReactJs, React Native & NodeJS | <br />
              Implement feature, enhance and performance of websites <br /> and
              apps
            </p>
            <div>
              {SkillDescriptions.map((description, index, arr) => {
                return (
                  <div
                    key={description.id}
                    className={`${
                      index === arr.length - 1 ? '' : 'mb-[10px]'
                    } flex items-center `}
                  >
                    <span className='inline-block h-[10px] w-[10px] bg-primary clip-path-arrowRight' />
                    <p className='text-white text-[20px] font-medium ml-[15px]'>
                      {description.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='mb-[30px]'>
            <h4 className='text-primary font-bold text-[60px]'>
              Typical Projects
            </h4>
          </div>
          <div>
            {ExperienceDescriptions.map((ele) => {
              return (
                <div className='mb-[50px]'>
                  <SkillCard {...ele} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
