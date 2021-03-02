import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

import { Data ,ContactData} from "./HelpData";
import { IconContext } from "react-icons/lib";

function Help() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is alredy active/press,then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Main>
      <IntroContainer>
        <Container>
          <Heading>Hello, how can we be of good help today?</Heading>
        </Container>
      </IntroContainer>
      <SectionHeader>
        <SectionAlert>
          <SectionWrap>
            <SectionContent>
              <Text>
                "We understand your travel concerns and we're here to help. If
                you'd like to cancel a booking",{" "}
                <strong>
                  please click on "Cancellation" in the options below
                </strong>
                ". This is the fastest way to process your request. If you have
                questions or need further assistance, our customer service team
                is available 24/7 in multiple languages. "
              </Text>
            </SectionContent>
          </SectionWrap>
        </SectionAlert>
      </SectionHeader>
      <IconContext.Provider value={{ color: "#81beff", size: "25px" }}>
        <HelpSection>
          <Title>How can we help?</Title>
          <HelpContainer>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    {" "}
                    <HelpHeading>{item.question}</HelpHeading>
                    <span>
                      {clicked === index ? (
                        <FiMinus />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </HelpContainer>
          <SectionContact>
            {" "}
            <Title>
              <strong>Still need some assitance?</strong>
            </Title>
            <ContactContainer>
            {ContactData.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    {" "}
                    <HelpHeading>{item.question}</HelpHeading>
                    <span>
                      {clicked === index ? (
                        <FiMinus />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}

            </ContactContainer>
          </SectionContact>
        </HelpSection>
      </IconContext.Provider>
    </Main>
  );
}

export default Help;

const Main = styled.div`
  flex-grow: 1;
`;

const IntroContainer = styled.div`
  background-color: #ffe5ee;
  height: 20vw;
  max-height: 180px;
  min-height: 130px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and(max-width:540px) {
    margin-bottom: 24px;
  }
`;

const Container = styled.div`
  text-align: center;
  margin:0 auto;
  min-width: 320px;
  width: 100%;

  &::after {
    clear: both;
    content: "";
    display: table;
  }

  @media (min-width: 736px) {
   padding:0 32px;
  }
`;

const Heading = styled.h1`
  color: #1a2b49;
  margin: 0;
  align-items: center;

  @media (min-width: 736px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-size: 28px;
  }
`;

const SectionHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 560px;
  padding : 0 16px;
  margin-bottom: 24px;
`;

const SectionAlert = styled.div`
  margin: 0 24px;
  background-color: #e5f5ff;
  border-top: solid 4px #81beff;
`;

const SectionWrap = styled.div`
  padding: 16px;
`;

const SectionContent = styled.div`
  position: relative;
`;

const Text = styled.p`
  text-align: center;
`;

const HelpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  max-width: 560px;
  padding: 32px;
  margin-bottom: 34px;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;
  font-size: 1.1rem;
  line-height: 2rem;

  &::before {
    margin-right: 8px;
    font-size: 18px;
  }
`;

const HelpContainer = styled.div`
  margin-bottom: 38px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const HelpHeading = styled.h2`
  font-size: 1.1rem;
  padding: 1rem 0;
`;

const Dropdown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SectionContact = styled.div`margin-top:25px;`;

const ContactContainer=styled.div``;
