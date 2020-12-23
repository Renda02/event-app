import React from "react";
import styled from "styled-components";
import Body from "./Body";
import image from "../images/team.svg";
import Section from "./Sectioln";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Intro>
          <Heading>
            Connect <small>via</small>
            <br /> online events.
          </Heading>

          <Button type="submit" value="Browse Events" required />
        </Intro>
        <Image src={image} alt="meeting" />
      </Wrapper>
      <Body />
      <Section />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  width: 1080px;
  justify-content: space-between;
  margin: 2em auto;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  color: #6c61f6;
  margin-bottom: 1em;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 5px;
  padding: 1em 0;
`;

const Button = styled.input`
  border: 2px solid #6c61f6;
  padding: 0.7em 0.9em;
  font-size: 1.123rem;

  border-radius: 30px;
  margin-left: -6em;
  background: #fff;
  color: #6c61f6;
  &:hover {
    background: #6c61f6;
    color: #fff;
    outline-width: 10px;
  }
`;
