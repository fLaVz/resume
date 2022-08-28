import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import MainTitleComponent from './components/MainTitleComponent';

interface maintTitleProps {
  marginTop: string;
  position: string;
  color: string;
  opacity: number;
}

const App = () => {
  const AppContainer = styled.div`
    align-items: center;
    background-color: #000;
    height: 600vh;
  `;

  return (
    <AppContainer className="App">
      <MainTitleComponent />
      {/* <BlockHi>
        <H1Fixed>Hi!</H1Fixed>
      </BlockHi> */}
    </AppContainer>
  )
}

export default App
