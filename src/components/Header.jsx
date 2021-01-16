import { Link } from "react-router-dom";

import styled from "styled-components";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <HeaderBar>
      <HeaderLeft>
        <Heading to="/"> Evently</Heading>
      </HeaderLeft>

      <HeaderRight>
        <Link to="/add-event">
          {" "}
          <HeaderOption Icon={AiOutlinePlus} title="Add event" />
        </Link>
        <HeaderOption Icon={AiOutlineHeart} title="Cart" />
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
  margin: 0 auto;
  background: #f2f2f2;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const Heading = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1.3rem;
  text-decoration: none;
  margin: 0 auto;
  font-weight: 600;
  color: #6c61f6;
`;

const HeaderRight = styled.div`
  display: flex;
`;
