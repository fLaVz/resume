import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import useElementOnScreen from '../hooks/useElementOnScreen';

interface JobProps {
  opacity: number;
}

const JobComponent = () => {
  const [jobOpacity, setJobOpacity] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const JobContainer = styled.div<JobProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: ${(props) => props.opacity};
  `;

  const Job = styled.h2`
    font-weight: 900;
    font-size: 8rem;
    color: white;
    margin: 10vh;
  `;

  const JobSubTitle = styled.p`
    margin: 0;
    font-weight: 400;
  `;

  const JobSpan = styled.span`
    background: linear-gradient(45deg, #ff7700, #9546f5);
    background-clip: text;
    color: transparent;
  `;

  const scrollHandler = (e: any) => {
    if (window.scrollY > 100 && window.scrollY <= 300) {
      setScrollPos((window.scrollY-150)/100);
    }

    console.log('pos:' + scrollPos);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, false);
    return () => {
      window.removeEventListener('scroll', scrollHandler, false);
    }
  }, [scrollPos]);

  return (
    <JobContainer opacity={scrollPos}>
      <Job>And I do <JobSpan>stuff</JobSpan></Job>
      <JobSubTitle>Mostly computer stuff but u know</JobSubTitle>
    </JobContainer>
  );
};

export default JobComponent;
