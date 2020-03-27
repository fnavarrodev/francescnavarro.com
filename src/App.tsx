import React from 'react';
import fnavarroGif from './img/fnavarro8bit.gif';
import { Container, Icon } from "nes-react";
import styled from 'styled-components/macro';

const Img = styled.img`
  max-width: 100%; 
  display: block; 
  height: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
`;

const HeadingImage = styled.div`
  display: flex;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Column = styled.div`
  flex-basis: 100%;
  padding: 24px;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const App = () => {
  return (
    <div className="App">
      <Container>
        <Wrapper>
          <HeadingImage>
            <Row>
              <Column>
                <Img src={fnavarroGif} alt="Francesc Navarro" />
              </Column>
              <Column>
                <h1>Francesc Navarro</h1>
                <br />
                <h2>Senior FrontEnd Engineer</h2>
              </Column>
            </Row>
          </HeadingImage>
          <SocialLinks>
            <a href={'https://twitter.com/bantidisturbis'}><Icon icon={'twitter'} is-large /></a>
            &nbsp;
            <a href={'https://github.com/fnavarrodev'}><Icon icon={'github'} is-large /></a>
            &nbsp;
            <a href={'https://www.linkedin.com/in/fnavarrodeveloper'}><Icon icon={'linkedin'} is-large /></a>
            &nbsp;
        </SocialLinks>
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
