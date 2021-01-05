import styled from "styled-components";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import {BiHelpCircle} from "react-icons/bi";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <HeaderBar>
      <HeaderLeft>
        <Heading> Evently</Heading>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={AiOutlinePlus} title="Add event" />
        <HeaderOption Icon={AiOutlineHeart} title="I like" />
        <HeaderOption Icon={HiOutlineTicket} title="Tickets" />
        <HeaderOption Icon={BiHelpCircle} title="Help" />
      </HeaderRight>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.2px solid #f4f3f5;
  top: 0;
  position: sticky;
margin:0 auto;
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

const HeaderRight = styled.div`
  display: flex;
`;
