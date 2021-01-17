import styled from "styled-components";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <Paragraph>Welcome to Eventily</Paragraph>
      <About to="/about-us">About Us</About>
      <Contact to="/contact">Contact Us</Contact>
      <SubFooter>
        <Text> Copyright @Evently 2020 </Text>
      </SubFooter>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #000;
`;

const Paragraph = styled.h4`
  padding-left: 10px;
  color:#fff;
  margin: 20px;
`;

const SubFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #f4f3f5;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  padding-bottom: 10px;
`;

const Text= styled.h6` padding-left: 10px;
color:#000;
margin-left:0 auto;`;

const Contact=styled(Link)``;

const About =styled(Link)``;
