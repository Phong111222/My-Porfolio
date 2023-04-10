import SkillCard, { SkillCardProps } from './generals/SkillCard';

const ListProjects: SkillCardProps[] = [
  {
    title: 'Collumino',
    companyName: 'Saigon Technology',
    dateFrom: 'June 2022',
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
    dateFrom: 'Sep 2022',
    dateTo: 'Feb 2023',
    description: `Implement function in follow client's requirements. <br/> 
       Implement codebase for web and setup docker file. </br>
       Implement router structure. <br/>
       Implement breadcrumbs. <br/>
       Integrate React-query. <br/>
       Integrate OIDC client for authentication and authorization. <br/>
       Config axios. <br/>
       Support new member. <br/>
    `,
  },
  {
    title: 'HelpDesk',
    companyName: 'Saigon Technology',
    dateFrom: 'June 2022',
    dateTo: 'Sep 2022',
    description: `Implement function in follow client's requirements. <br/> 
       Implement codebase for web and setup docker file. </br>
       Manage and tracking members progress. <br/>
       Integrate React-query. <br/>
       Integrate OIDC client for authentication and authorization. <br/>
       Config axios. <br/>
       Support new member. <br/>
    `,
  },
  {
    title: 'TurnItBlue',
    companyName: 'Saigon Technology',
    dateFrom: 'March 2022',
    dateTo: 'Present',
    description: `In charge of Front-end development. <br/>
    Host meeting with client to support PM. <br/> 
    Update UI to fit new third party library. <br/>
    Replace old payment method with new payment method with provided sdk from client. <br/>
    Estimate task. <br/>
    Work with BE to give the best solution. <br/>
    Research external service and find the best way to integrate them into the app. <br/>
    Make Q&A document and release notes when push new features to production. <br/>
    `,
  },
  {
    title: 'Assets',
    companyName: 'Saigon Technology',
    dateFrom: 'Sep 2021',
    dateTo: 'March 2022',
    description: `Working as Front-end developer and Back-end developer. <br/>
    Working with BA to analyze and implement requirement from client to ensure deliver the correct features. <br/>
    Implement new UI for the new feature. <br/>
    Analyze and implement requirements from BA after they worked with client. <br/>
    Design database to use for new feature. <br/>
    Implement cron-job and email service to notify end-user. <br/>
    
    `,
  },
  {
    title: 'Redax',
    companyName: 'Ox Tech',
    dateFrom: 'Sep 2021',
    dateTo: 'Oct 2021',
    description: `In charge of Front-end development. <br/>
    Custom component from Antd to implement UI designed from designer. <br/>
    Estimate tasks. <br/>
    Implement codebase. <br/>
    Working with designer to ensure implement correct UI and communicate with BE developer and PM to implement correct function in the app. <br/>
    `,
  },
  {
    title: 'Shopify - SDK',
    companyName: 'Long Van Solution',
    dateFrom: 'June 2021',
    dateTo: 'Sep 2021',
    description: `Implement observer pattern into project. <br/>
    Mainly working with developers that use the sdk and BE to implement core function in sdk. <br/>
    Implement codebase. <br/>
    Config and public as library on Npmjs. <br/>
    Develop and maintain codebase if BE and FE that use sdk  need  any update. <br/>
    `,
  },
  {
    title: 'Template Engine',
    companyName: 'Long Van Solution',
    dateFrom: 'June 2021',
    dateTo: 'Sep 2021',
    description: `Implement tool to read file liquid of shopify. <br/>
    Make custom server using express  in Nextjs. <br/>
    Communicate with Back-end developers to define  models for the tool to  fit the designed models in shopify like product, cart , … <br/>
    Research information from documentation of shopify for developer and use them in the tool. <br/>
    Make tag, filter, routes for the tool to work with shopify theme. <br/>
    Make routes fit with theme of shopify. <br/>
    Make sdk and service to support calling api from back-end. <br/>
    `,
  },
];

const Projects = () => {
  return (
    <div className='bg-secondary px-[120px] py-[40px]'>
      <div>
        <h3 className='text-primary text-[80px] font-bold leading-[80px] text-center mb-[40px]'>
          Projects And <span className='text-black'>Experiences</span>
        </h3>
      </div>
      <div className='grid grid-cols-3 gap-[30px]'>
        {ListProjects.map((project) => {
          return (
            <SkillCard
              key={project.title}
              className=' shadow-[1px_1px_2px_1px_#2f3745] transition-all duration-300 hover:shadow-[1px_1px_10px_1px_#2f3745]'
              {...project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
