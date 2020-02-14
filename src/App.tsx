import React from 'react';
import fnavarroGif from './img/fnavarro8bit.gif';
import { Container } from "nes-react";
import styled from 'styled-components/macro';

const Img = styled.img`
  max-width: 100%; 
  display: block; 
  height: auto;
`;

const App = () => {
  return (
    <div className="App">
      <Container>
        <h1>Francesc Navarro</h1>
        <h2>Senior FrontEnd Engineer</h2>
        <Img src={fnavarroGif} alt="Francesc Navarro" />
      </Container>
    </div>
  );
}

export default App;
