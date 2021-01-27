import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { Container } from "../globalStyles";
import Service from "./Service";
import Body from "./Body";
import Button from "./Button";
import image from "../images/event.jpeg";

function Home() {
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const [suggestionList, setSuggestionList] = useState([]);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(
        "https://murmuring-reaches-66235.herokuapp.com/event-list"
      );
      // 2. prepare the data
      const data = await response.json();

      // 3. update the value of the state
      setEventList(data);
    }
    
    fetchData();

    // fetch data
    // set the events
  }, []);

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
    const matchingEvents = eventList.filter((e) => {
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
              <Input
                type="text"
                onChange={handleChange}
                ref={searchRef}
                placeholder="Conference..."
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

const Wrapper = styled(Container)`
  display: flex;

  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 920px) {
    display: none;
  }
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
