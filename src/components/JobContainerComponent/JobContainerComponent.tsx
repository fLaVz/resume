import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import SubtitleJobComponent from './SubtitleJobComponent';
import JobComponent from './JobComponent';

interface JobProps {
  opacity: number;
}

const JobContainerComponent = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const JobContainer = styled.div<JobProps>`
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${props => props.opacity};
  `;

  const scrollHandler = (e: any) => {
    if (window.scrollY > 150 && window.scrollY <= 350) {
      setScrollPos((window.scrollY-160)/200);
    } else if (window.scrollY < 150 && scrollPos !== 0) {
      setScrollPos(0);
    } else if (window.scrollY > 350 && scrollPos < 1) {
      setScrollPos(1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [scrollPos]);

  return (
    <JobContainer opacity={scrollPos}>
      <JobComponent />
      <SubtitleJobComponent />
    </JobContainer>
  );
};

export default JobContainerComponent;
