import React from "react";
import styled from "styled-components";

function Button() {
  return (
    <Main>
      <Container>
        <SectionContainer>
          <div>
            <Img src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg" alt="newsletter" />
          </div>
          <FormWrapper>
            <Header>
              <Heading>Wish you were here</Heading>
              <Context>
                Sign up for our newsletter and discover travel experiences
                you’ll really want to try.
              </Context>
            </Header>
            <Form>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value=""
              />
              <div>
                <Buttonn>Sign Up</Buttonn>
              </div>
            </Form>
          </FormWrapper>
        </SectionContainer>{" "}
        <SectionButton>
            <Span>By signing up, you agree to receive promotional emails. You can unsubscribe at any time. For more information, read our</Span>
        <a href="/" target="_blank">Privacy Policy</a>
        </SectionButton>
      </Container>
    </Main>
  );
}

export default Button;

const Main=styled.div`
width:100%;
margin:0 auto;
padding:1.6rem 0;`;

const Container = styled.div`
  display: block;
  min-width: 320px;
  padding:  16px;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const SectionContainer = styled.div`
  background-color: #d7ffdc;

  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 576px) {
    display: flex;
  }
`;

const Img=styled.img`width:75%;`;

const FormWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin:0 auto;

  @media (min-width: 576px) {
    display: block;
    flex: 1 1 50%;
  }
`;

const Header = styled.header`
  display: block;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 500;
  margin-bottom: 8px;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

const Context = styled.p`
  margin: 0;
  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const Form = styled.form`
  margin-top: 1.4rem;
`;

const Input = styled.label`
  outline: none;
  background: none;
  padding: 18px;
  width:100%;
  border: none;
  font-size: 1rem;
  color: #000;
  border-radius: 8px 0 0 8px;
  height: 22px;
  color: gray;
  background-color: #f2f2f2;
`;

const Buttonn = styled.button`
  border: 2px solid #6c61f6;
  padding: 5px 5px;
  font-size: 18px;
  background: #6c61f6;
  color: #fff;
  cursor: pointer;
  margin:0 0 1rem 0;
border-radius:0 8px 8px 0 ;
  &:hover {
    color: #6c61f6;
    background: #fff;
  }
`;

const SectionButton = styled.section`
  display: block;
`;

const Span=styled.span`line-height: 1.25rem;`;
