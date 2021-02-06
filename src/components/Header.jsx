import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

import { Container } from "../globalStyles";
import HeaderOption from "./HeaderOption";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <HeaderBar>
        <Heading to="/"> Evently</Heading>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <HeaderMenu onClick={handleClick} click={click}>
          <HeaderItem>
            <HeaderLink to="/">
              {" "}
              <HeaderOption Icon={AiOutlineHome} title="Home" />
            </HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink to="/add-event">
              {" "}
              <HeaderOption Icon={AiOutlinePlus} title="Add event" />
            </HeaderLink>
          </HeaderItem>
          <HeaderItem><HeaderLink to="/about-us">
            {" "}
            <HeaderOption Icon={AiOutlineHeart} title="About" />
          </HeaderLink>
          </HeaderItem>
          <HeaderItem>
            {" "}
            <HeaderOption Icon={HiOutlineTicket} title="Tickets" />
          </HeaderItem>
          <HeaderItem>
            {" "}
            <HeaderLink to="/help"> <HeaderOption Icon={BiHelpCircle} title="Help" /></HeaderLink>
           
          </HeaderItem>
        </HeaderMenu>
      </HeaderBar>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  position: sticky;
  height: 80px;
  z-index: 999;
  background: #f2f2f2;
  text-decoration: none;
`;

export const HeaderBar = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

const Heading = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  color: #000;
  display: flex;
  justify-self: flex-start;
  align-items: center;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  background: #f2f2f2;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const HeaderItem = styled.div`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  &:hover {
    border: none;
  }
`;
