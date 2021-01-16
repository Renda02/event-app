import styled from "styled-components";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <Paragraph>Welcome to Eventily</Paragraph>
      <Contact to="/aboutus">Contact Us</Contact>
      <About to="/contact">About Us</About>
      <SubFooter>
        <Paragraph> Copyright @Evently 2020 </Paragraph>
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
  color: #ffff;
  margin: 20px;
`;

const SubFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #f4f3f5;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
`;

const Contact=styled(Link)``;

const About =styled(Link)``;
