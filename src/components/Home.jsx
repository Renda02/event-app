import React from "react";
import styled from "styled-components";
import Body from "./Body";
import image from "../images/team.svg";
import Section from "./Sectioln";
import Footer from "./Footer";

function Home() {
  return (
    <React.Fragment>
    <Wrapper>
      <Intro>
        <Heading>
          Connect <small>via</small>
          <br /> online events.
        </Heading>
        <br />
        <Button type="submit" value="Browse Events" required />
      </Intro>
      <Image src={image} alt="meeting" />
      
    </Wrapper>
    <Body />
    <Section />
    <Footer/>
    </React.Fragment>
   
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-bottom:40px;
  padding-top:40px;
`;

const Intro = styled.div`
  text-align: center;
  line-height: 24px;
  padding-top: 200px;
  padding-bottom: 175px;
  display: flex-start;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
  color: #6c61f6;
`;

const Image = styled.img`
  width: 50%;
  border-radius: 5px;
`;

const Button = styled.input`
  border: 2px solid #6c61f6;
  padding: 10px 20px;
  font-size: 18px;
  background: #6c61f6;
  color:#fff;
`;