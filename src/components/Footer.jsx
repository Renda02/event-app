import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterContact>
        <FooterSubHeading>Welcome to Eventily</FooterSubHeading>
      </FooterContact>
      <FooterText to="/about-us">About Us</FooterText>

      <FooterText to="/contact">Contact Us</FooterText>
      <SubFooter>
        <Text> Copyright @Evently 2020 </Text>
      </SubFooter>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #101522;
  padding: 2.7rem 0 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FooterContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 24px;
  align-items: center;
  padding: 24px;
  color: #fff;
`;

const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, Helvetica, sans-serif, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterText = styled(Link)`
  margin-bottom: 24px;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
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

const Text = styled.h6`
  padding-left: 10px;
  color: #000;
  margin-left: 0 auto;
`;
