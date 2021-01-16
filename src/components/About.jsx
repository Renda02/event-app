import styled from "styled-components";

function About() {
  return (
    <Main>
      <Intro>
        <IntroContainer>
          <Heading>Love where you’re going</Heading>
        </IntroContainer>{" "}
      </Intro>
      <Section>
        <Container>
          <Title>Changing your travels</Title>
          <Context>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio
            tempora magnam officiis maxime voluptates odit, quos quaerat facilis
            aliquid expedita quisquam dicta maiores a beatae earum eum harum
            rerum?
          </Context>
        </Container>
      </Section>
    </Main>
  );
}

export default About;

const Main = styled.div`
  flex-grow: 1;
`;

const Intro = styled.section`
  position: relative;
  width: 100%;
  background-color: #1a2b49;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 736px) {
    height: 540px;
    background-image: url("https://cdn.getyourguide.com/tf/assets/static/branding/intro_variety_medium.jpg");
    background-position: 65%;
  }
`;

const IntroContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Heading = styled.h1`
  font-weight: 700;
  text-align: center;
  display: block;
  color: #fff;
  @media (min-width: 736px) {
    color: #fff;
    margin: 0;
    text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
    line-height: 4.75rem;
    color: #fff;
  }
`;

const Section = styled.div`
  margin-top: 56px;
`;

const Context = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex-direction: column;
  max-width: 688px;
  margin-left:0;
  margin-right:0;
`;


const Title=styled.h2`    font-size: 1.5rem;
line-height: 2rem;
text-align:center;`;