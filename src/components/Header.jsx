import styled from "styled-components";
import "./HeaderOption";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <HeaderBar>
      {" "}
      <HeaderLeft>
        <Heading> Evently</Heading>
      </HeaderLeft>
      <HeaderSearch>
        <BiSearch />
        <Input type="text" />
      </HeaderSearch>
      <HeaderRight>
        <HeaderOption Icon={AiOutlinePlus} title="Add event" />
        <HeaderOption Icon={AiOutlineHeart} title="I like" />
        <HeaderOption Icon={HiOutlineTicket} title="Tickets" />
      </HeaderRight>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
  border-bottom: 0.2px solid #f4f3f5;
  top: 0;
  position: sticky;
  z-index: 999;
  background: #f2f2f2;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  font-size: 2rem;

  margin: 0 auto;
  font-weight: 600;
  color: #6c61f6;
`;

const HeaderSearch = styled.div`
  display: flex;
  padding: 18px;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color:#fff;
`;

const Input = styled.input`
  outline: none;
  background: none;
  border: none;
`;

const HeaderRight = styled.div`
  display: flex;
`;
