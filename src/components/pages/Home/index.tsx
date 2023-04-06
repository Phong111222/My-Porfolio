import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef, useRef, useState } from 'react';
import Banner from './components/Banner';
import TechnicalSkills from './components/TechnicalSkill';

const HomePage = () => {
  const [showTechnicalSkills, setShowTechnicalSkills] =
    useState<boolean>(false);

  const { ref } = useIntersectionObserver<HTMLDivElement>(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    },
    (entries) => {
      const [entry] = entries;

      if (!showTechnicalSkills && entry.isIntersecting) {
        setShowTechnicalSkills(true);
      }
    }
  );

  return (
    <div className='bg-secondary'>
      <Banner />
      <div
        ref={ref}
        className={`${showTechnicalSkills ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <TechnicalSkills />
      </div>
    </div>
  );
};

export default HomePage;
