import styled from "styled-components";

function Help() {
  return (
    <Main>
      <IntroContainer>
        <Container>
          <Heading>Hello, how can we help you today?</Heading>
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
  margin-right: auto;
  margin-left: auto;
  min-width: 320px;
  width: 100%;

  &::after {
    clear: both;
    content: "";
    display: table;
}

  @media (min-width: 736px) {
    padding-right: 32px;
    padding-left: 32px;
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
  padding-right: 16px;
  padding-left: 16px;
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
