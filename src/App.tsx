import React from 'react';
import fnavarroGif from './img/fnavarro8bit.gif';
import { Container, Icon } from "nes-react";
import styled from 'styled-components/macro';


const CustomContainer = styled(Container)`
  margin: 24px;
  @media (max-width: 767px) {
    height: 90vh;
    margin: 4px;
  }
`;

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

const Kirby = styled.div`
  position: relative;
`;

const Balloon = styled.div`
  position: absolute;
  left: 70px;
  top: -39px;
`;

const ColumnImage = styled(Column)`
  border: 1px solid #2a2a2a;
  padding: 0;
`;

const ColumnDescription = styled(Column)`
  margin-top: 35px;
  h1,h2{
    margin: 16px 0;
  }
`;

const App = () => {
  return (
    <div className="App">
      <CustomContainer>
        <Wrapper>
          <HeadingImage>
            <Row>
              <ColumnImage>
                <Img src={fnavarroGif} alt="Francesc Navarro" />
              </ColumnImage>
              <ColumnDescription>
                <Kirby>
                  <i className={"nes-kirby is-small"} />
                  <Balloon className={"nes-balloon from-left nes-pointer"}>
                    Hi there!
                  </Balloon>
                </Kirby>
                <h1>Francesc Navarro</h1>
                <h2>Senior FrontEnd Engineer</h2>
                <SocialLinks>
                  <a href={'https://twitter.com/bantidisturbis'}><Icon icon={'twitter'} is-large /></a>
                  &nbsp;
                  <a href={'https://github.com/fnavarrodev'}><Icon icon={'github'} is-large /></a>
                  &nbsp;
                  <a href={'https://www.linkedin.com/in/fnavarrodeveloper'}><Icon icon={'linkedin'} is-large /></a>
                  &nbsp;
                </SocialLinks>
              </ColumnDescription>
            </Row>
          </HeadingImage>
        </Wrapper>
      </CustomContainer>
    </div>
  );
}

export default App;
