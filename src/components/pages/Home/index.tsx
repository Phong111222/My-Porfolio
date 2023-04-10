import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef, useRef, useState } from 'react';
import Banner from './components/Banner';
import SkillsAndExperiences from './components/SkillsAndExperiences';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';

const Infos = [
  {
    id: 1,
    component: <SkillsAndExperiences />,
  },
  {
    id: 2,
    component: <Projects />,
  },
  {
    id: 3,
    component: <Technologies />,
  },
  {
    id: 4,
    component: <Education />,
  },
  {
    id: 5,
    component: <GetInTouch />,
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showedList, setShowedList] = useState(
    Infos.map((ele) => ({ ...ele, show: false }))
  );

  const { ref } = useIntersectionObserver<HTMLDivElement>(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    },
    (entries) => {
      const [entry] = entries;

      if (currentIndex === Infos.length) {
        return;
      }

      if (entry.isIntersecting) {
        const newShowedList = [...showedList];
        newShowedList[currentIndex].show = true;
        setShowedList(newShowedList);
        setCurrentIndex(currentIndex + 1);
      }
    }
  );

  return (
    <div className='bg-secondary'>
      <Banner />
      {showedList.map((ele, index) => {
        return (
          <div
            key={ele.id}
            {...(currentIndex === index && { ref })}
            className={`${ele.show ? 'animate-fade-in' : 'opacity-0'}`}
          >
            {ele.component}
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
