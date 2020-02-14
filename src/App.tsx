import React from 'react';
import fnavarroGif from './img/fnavarro8bit.gif';
import { Container } from "nes-react";

const App = () => {
  return (
    <div className="App">
      <Container>
        <h1>Francesc Navarro Senior FrontEnd Engineer</h1>
        <img src={fnavarroGif} alt="Francesc Navarro" />
      </Container>
    </div>
  );
}

export default App;
