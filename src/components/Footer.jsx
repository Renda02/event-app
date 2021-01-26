import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      
      <FooterLinksContainer>
        <FooterLinkWrap>
          <FooterLinksItems>
            <FooterTitle>Support</FooterTitle>
            <FooterLink to="/help">Contact Us</FooterLink>
            <FooterLink to="/help">Help</FooterLink>
            <FooterLink to="/">How it work</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterTitle>Company</FooterTitle>
            <FooterLink to="/about-us">About Us</FooterLink>
            <FooterLink to="/">Events</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterTitle>Work with us</FooterTitle>
            <FooterLink to="/">Admistration</FooterLink>
            <FooterLink to="/">Team</FooterLink>
            <FooterLink to="/">Services</FooterLink>
          </FooterLinksItems>
        </FooterLinkWrap>
      </FooterLinksContainer>
      <SubFooter>
        <Text> Copyright @Evently 2020 </Text>
      </SubFooter>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  background-color: #101522;
  padding: 1.7rem 0 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinkWrap = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #ffff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterTitle = styled.h2`
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #ffe;
    transition: 0.3s ease-out;
  }
`;
