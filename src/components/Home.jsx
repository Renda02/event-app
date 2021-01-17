import { useState, useRef } from "react";


import Service from "./Service";
import Body from "./Body";
import Button from "./Button";

import events from "../data/events.json";

import image from "../images/event.jpeg";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

function Home() {
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const [suggestionList, setSuggestionList] = useState([]);
  const [eventList, setEventList] = useState(events);

  const handleSearch = () => {
    const filteredEvent = eventList.filter((e) => {
      if (e.title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    setEventList(filteredEvent);
  };

  const handleChange = () => {
    const searchTerm = searchRef.current.value;
    const matchingEvents = events.filter((e) => {
      if (e.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    });
    if (searchTerm.length > 0) {
      setSuggestionList(matchingEvents);
    } else {
      // clean up
      setSuggestionList([]);
    }

    setSearch(searchTerm);
  };

  return (
    <>
     

      <Wrapper>
        <Intro>
          <Heading>Connect via</Heading>
          <Headin>online events.</Headin>
          <HeaderSearch>
            <div>
              <BiSearch />
              <Input
                type="text"
                onChange={handleChange}
                ref={searchRef}
                value="search events"
              />
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
            </div>
            <Btn onClick={handleSearch}>Search</Btn>
          </HeaderSearch>
        </Intro>
        <Image src={image} alt="meeting" />
      </Wrapper>
      <Body eventList={eventList} />
      <Service />

      <Button />
     
     
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  justify-content: space-between;
  margin: 0 auto;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 1.8rem;
  font-weight: 600;

  color: #6c61f6;
`;

const Headin = styled.div`
  font-size: 1.8rem;
  font-weight: 600;

  margin-bottom: 1em;
`;

const Image = styled.img`
  width: 45%;
  border-radius: 5px;
  padding: 1em 0;
`;

const HeaderSearch = styled.div`
  display: flex;
  padding: 18px;
  align-items: space-between;
  position: relative;
`;

const Input = styled.input`
  outline: none;
  background: none;
  padding: 18px;
  border: none;
  font-size: 1rem;
  color: #000;
  border-radius: 8px 0 0 8px;
  height: 22px;
  color: gray;
  background-color: #f2f2f2;
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

const Btn = styled.button`
  border: 2px solid #6c61f6;
  padding: 5px 5px;
  font-size: 18px;
  background: #6c61f6;
  color: #fff;
  cursor: pointer;
  margin: 0 0 1rem 0;
  border-radius: 0 8px 8px 0;
  &:hover {
    color: #6c61f6;
    background: #fff;
  }
`;
