import styled from "@emotion/styled";
import { useEffect, useState } from "react";

interface SubtitleProps {
  expanded: boolean;
}

const JobSubTitle = styled.p<SubtitleProps>`
  margin: 0;
  font-weight: 400;
  font-size: 1rem;
  transition: .5s opacity .5s ease-in-out;
  opacity: ${props => props.expanded ? 1 : 0};
`;

const SubtitleJobComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollHandler = (e: any) => {
    if (window.scrollY < 500) {
      setExpanded(false);
    } else if (window.scrollY > 500 && !expanded) {
      setExpanded(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <JobSubTitle expanded={expanded}>Mostly computer stuff but u know</JobSubTitle>
  )
}

export default SubtitleJobComponent;