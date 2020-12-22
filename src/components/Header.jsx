import styled from "styled-components";
import "./HeaderOption";

import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineHeart}  from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import HeaderOption from "./HeaderOption";


function Header() {
  return (
    <HeaderBar>
      {" "}
      <HeaderLeft>
        <Heading> Evently</Heading>
      </HeaderLeft>
      <HeaderRight>
        <HeaderOption Icon={AiOutlinePlus} title="Add event" />
         <HeaderOption Icon={ AiOutlineHeart}title="I like" />
        <HeaderOption Icon={HiOutlineTicket} title="Tickets" />
      </HeaderRight>
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 60px;
  padding: 0.2em 0.5em;
  margin: 0 auto;
  font-weight: bold;
`;



const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  border-bottom: 0.2px solid #f4f3f5;
`;