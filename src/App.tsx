import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import MainTitleComponent from './components/MainTitleComponent';

interface maintTitleProps {
  marginTop: string;
  position: string;
  color: string;
  opacity: number;
}

const App = () => {

  // const handleScroll = (event: any) => {
  //   if (window.scrollY < 2000) {
  //     setMaintTitleProps({
  //       marginTop: "0px",
  //       position: "fixed",
  //       color: "white",
  //       opacity: 1,
  //     });
  //   } 
  //   else {
  //     setMaintTitleProps({
  //       marginTop: "2000px",
  //       position: "static",
  //       color: "blue",
  //       opacity: 0,
  //     });
  //   }
  // };
  // window.addEventListener('scroll', handleScroll);

  const [maintTitleProps, setMaintTitleProps] = useState<maintTitleProps>({
    marginTop: "0px",
    position: "fixed",
    color: "white",
    opacity: 0,
  });


  const AppContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: flex-start; */
    align-items: center;
    background-color: #14161c;
    height: 600vh;
  `;

  const BlockHi = styled.div`
    position: ${maintTitleProps.position};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 80%;
    margin-top: ${maintTitleProps.marginTop};
  `;

  const H1Fixed = styled.h1`
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    };
    animation: 4s linear 1s fadein;
    animation-fill-mode: forwards;
    opacity: 0;
    justify-content: center;
    line-height: 1;
    font-size: 10em;
    transition: color 2s ease-in;
    background-image: linear-gradient(45deg, #294fd6, #46c6f5);
    background-clip: text;
    color: transparent;
  `;

  return (
    <AppContainer className="App">
      <MainTitleComponent/>
      {/* <BlockHi>
        <H1Fixed>Hi!</H1Fixed>
      </BlockHi> */}
    </AppContainer>
  )
}

export default App
