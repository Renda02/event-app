import styled from "styled-components";
import { Container } from "../globalStyles";

function About() {
  return (
    <Main>
      <Intro>
        <IntroContainer>
          <Heading>Love where you’re going</Heading>
        </IntroContainer>{" "}
      </Intro>
      <Section>
        <Wrapper>
          <Title>Changing your experince</Title>
          <Context>
           Evently  is a platform for finding and building local communities. Use Evntly to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.
          </Context>
          <Title>What can you do?</Title>
          <Context>
           Missing people in 2021?Evently go you covered with virtual events that you and people close to can enjoy from your comfort of your home and re-connect.Organize a new event today and have an unforgettable experience.
          </Context>
        </Wrapper>
      </Section>
    </Main>
  );
}

export default About;

const Main = styled(Container)`
  flex-grow: 1;
`;

const Intro = styled.section`
  position: relative;
  width: 100%;
  background-color: #1a2b49;
  background-size: cover;
  background-repeat: no-repeat;
  margin:1rem auto;

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
  margin-bottom:1rem;
  
`;

const Wrapper = styled.div`
  flex-direction: column;

  margin-left: 0;
  margin-right: 0;
 display: flex;
 align-items:center;
  
`;

const Title = styled.h2`
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: center;
  padding: 1rem 0;
  
`;
