import React, { useState } from "react";
import styled from "@emotion/styled";

interface maintTitleProps {
  marginTop: string;
  position: string;
  color: string;
  opacity: number;
}

const MainTitleComponent = () => {
  const [maintTitleProps, setMaintTitleProps] = useState<maintTitleProps>({
    marginTop: "100px",
    position: "fixed",
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
    margin-top: ${maintTitleProps.marginTop};
  `;

  const H1Fixed = styled.h1`
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    };
    margin: 0;
    opacity: 0;
    animation: 2s ease-out 1s fadein;
    animation-fill-mode: forwards;
    line-height: 1;
    font-size: 10em;
    background-image: linear-gradient(45deg, #294fd6, #46c6f5);
    background-clip: text;
    color: transparent;
  `;
  
  const UnderLine = styled.div`
    @keyframes growRight {
      from { width: 0px; }
      to   { width: 300px; }
    };
    animation: 1s ease-out 2s forwards growRight;
    height: 20px;
    background-color: #5672d7;
  `;

  return (
    <BlockHi>
      <H1Fixed>Hi!</H1Fixed>
      <UnderLine></UnderLine>
    </BlockHi>
  )
} 

export default MainTitleComponent;