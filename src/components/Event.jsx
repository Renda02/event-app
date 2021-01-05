import React from "react";
import styled from "styled-components";

function Event(props) {
  return (
    <EventWrapper>
      <Box>
        <img src={props.image} alt="event" />
        <h3><b>{props.title}</b></h3>{" "}
        <li>
          <span>Duration:</span>
          {props.time}
        </li>
        <li>{props.location}</li>
        <li>
          <Button type="submit" value="Sign up" />
        </li>
      </Box>
    </EventWrapper>
  );
}

export default Event;

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: #fff;
  margin: 5px;
`;

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 20px;
`;

const Button = styled.input`
  border: 2px solid #6c61f6;
  padding: 10px 10px;
  font-size: 18px;
  background: #6c61f6;
  color: #fff;
`;
