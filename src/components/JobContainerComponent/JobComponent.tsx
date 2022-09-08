import styled from "@emotion/styled";
import { useEffect, useState } from "react";


interface JobSpanProps {
  spanVisible: boolean;
}

const Job = styled.h2`
  font-weight: 900;
  font-size: 8rem;
  color: white;
  margin: 10vh;
`;

const JobSpan = styled.span<JobSpanProps>`
  transition: background-position .8s ease-in-out;
  background-image: linear-gradient(45deg, #ff7700, #9546f5, #ffffff, #ffffff);
  background-clip: text;
  background-size: 400%;
  color: transparent;
  background-position: ${props => props.spanVisible ? '0%' : '100%' };
`;

const JobComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const gradientHandler = (e: any) => {
    if (window.scrollY < 500) {
      setExpanded(false);
    } else if (window.scrollY > 500 && !expanded) {
      setExpanded(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', gradientHandler);
    return () => {
      window.removeEventListener('scroll', gradientHandler);
    }
  }, []);

  return (
    <>
      <Job>And I do <JobSpan spanVisible={expanded}>stuff</JobSpan></Job>
    </>
  )
}

export default JobComponent;