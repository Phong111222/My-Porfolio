import { BackEndIcon, FrontEndIcon, MobileIcon } from '@/components/atoms/icon';
import { NavigationItem } from '@/interfaces/NavigationItem';

export const navigationItems: NavigationItem[] = [
  {
    title: 'About',
    path: '/',
  },
  {
    title: 'Skills',
    path: '/skill',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const ListTechnologies = [
  {
    logo: <BackEndIcon />,
    title: 'Back-End',
    techs: ['NodeJs', 'ExpressJs / NestJs', 'MongoDB / SQL'],
  },
  {
    logo: <FrontEndIcon />,
    title: 'Front-End',
    techs: [
      'ReactJS / NextJs',
      'Javascript / Typescript',
      'CSS / SCSS / SASS',
      'Redux / ReactQuery',
      'Antd / MUI / TailwindCss / ChakraUI',
      'React Hook Form / Formik',
    ],
  },
  {
    logo: <MobileIcon />,
    title: 'Mobile',
    techs: [
      'React Native',
      'React Native Reanimated',
      'React Native Navigation',
    ],
  },
];
