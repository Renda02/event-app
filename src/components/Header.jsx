import { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTicket } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import events from "../data/events.json";

import HeaderOption from "./HeaderOption";

function Header() {
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const [suggestionList, setSuggestionList] = useState([]);

  const handleChange = () => {
    const searchTerm = searchRef.current.value;
    const matchingEvents = events.filter((e) => {
      if (e.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (searchTerm.length > 2) {
      setSuggestionList(matchingEvents);
    }

    console.log(matchingEvents);
    setSearch(searchTerm);
  };

  return (
    <HeaderBar>
      <HeaderLeft>
        <Heading> Evently</Heading>
      </HeaderLeft>
      <HeaderSearch>
        <BiSearch />
        <Input type="text" onChange={handleChange} ref={searchRef} />
        {suggestionList.length > 0 && (
          <AutoComplete>
            {suggestionList.map((suggestion) => (
              <AutoCompleteResult
                onClick={() => {
                  console.log("text");

                  searchRef.current.value = suggestion.title;
                  setSearch(suggestion.title);
                  setSuggestionList([]);
                }}
              >
                {suggestion.title}
              </AutoCompleteResult>
            ))}
          </AutoComplete>
        )}
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
  background-color: #fff;
  position: relative;
`;

const Input = styled.input`
  outline: none;
  background: none;
  border: none;
  font-size: 1rem;
  color: #000;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const AutoComplete = styled.div`
  padding: 5px 0 5px 0px;
  left: 0px;
  width: 100%;
  background: #fff;
  top: 40px;
  position: absolute;
`;

const AutoCompleteResult = styled.p`
  font-size: 1rem;
  color: #000;
  width: 100%;
  height: 18px;
  padding-left: 20px;

  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;
