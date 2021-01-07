import React from "react";
import ServiceOption from "./ServiceOption";
import styled from "styled-components";
import { FiThumbsUp } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { MdAccessibility } from "react-icons/md";

function Service() {
  return (
    <Container>
      <Content>
        <TextWrapper>
          <ServiceOption Icon={FiThumbsUp} title="Free Cancellation"
          text="Don't stress if your plans change. Cancel up to 24 hours before your activity starts for a full refund." />
          <ServiceOption Icon={AiFillHeart} title="Friendly Help"
          text="Skip the long ticket lines and get straight to the good stuff in the places everyone wants to visit." />
          <ServiceOption Icon={MdAccessibility} title="Easy Access" 
          text="We're standing by 24/7 to make your experience incredible. Reach us by phone, email, or WhatsApp."/>
        </TextWrapper>
      </Content>
    </Container>
  );
}

export default Service;

const Container = styled.div`
  display: block;
  min-width: 320px;
  padding:  1.6rem 1rem;

    margin:0 auto;
   
    width: 100%;
  
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Content = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
 
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
