import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import useScrollPostion from '../hooks/useScrollPos';
import useElementOnScreen from '../hooks/useElementOnScreen';
import JobComponent from './JobContainerComponent/JobContainerComponent';
import SubtitleJobComponent from "./JobContainerComponent/SubtitleJobComponent";
import JobContainerComponent from "./JobContainerComponent/JobContainerComponent";

interface maintTitleProps {
  marginTop: any;
  position: string;
  color: string;
  opacity: number;
}

const MainTitleComponent = () => {
  const [maintTitleProps, setMaintTitleProps] = useState<maintTitleProps>({
    marginTop: '20vh',
    position: "static",
    color: "white",
    opacity: 0,
  });

  const BlockHi = styled.div`
    position: ${maintTitleProps.position};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: ${maintTitleProps.marginTop};
  `;

  const H1Fixed = styled.h1`
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    };
    margin: 0;
    opacity: 0;
    animation: 1s ease-out .5s fadein;
    animation-fill-mode: forwards;
    line-height: 1;
    font-size: 10em;
    font-weight: 900;
    color: white;
  `;

  const SubTitle = styled.h2`
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    };
    opacity: 0;
    font-size: 8em;
    font-weight: 900;
    animation: 1s ease-out 1.5s forwards fadeIn 1;
    color: white;
  `;

  const NameColored = styled.span`
    background-image: linear-gradient(45deg, #ff7700, #9546f5);
    background-clip: text;
    color: transparent;
  `;

  return (
    <BlockHi>
      <H1Fixed>Hi</H1Fixed>
      <SubTitle>My name is <NameColored>Julien</NameColored>.</SubTitle>
      <JobContainerComponent />
    </BlockHi>
  )
} 

export default MainTitleComponent;