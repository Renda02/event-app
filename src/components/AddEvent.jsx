import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Container,Button } from "../globalStyles";
import "react-datepicker/dist/react-datepicker.css";

import Event from "./Event";

function AddEvent() {
  const [event, setEvent] = useState({
    image: "https://cdn.getyourguide.com/img/tour/5da3a3a9d7294.jpeg/68.jpg",
    title: "",
    time: null,
    location: "",
    id: null,
    date: new Date(),
    name: "",
  });

  console.log(event, "event");

  return (
    <Wrapper>
      <div>
        <h1>Add Event</h1>{" "}
        <Form>
          <div>
            <label htmlFor="">Event title:</label>
            <Input
              type="text"
              className={
                event && event.title.length > 6
                  ? "input-correct"
                  : "input-error"
              }
              onChange={(e) => {
                setEvent({
                  ...event,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Location:</label>
            <Input
              type="text"
              onChange={(e) => {
                setEvent({
                  ...event,
                  location: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Date:</label>{" "}
            <DatePicker
              selected={event.date}
              showTimeSelect
              dateFormat="Pp"
              
              onChange={(date) => {
                console.log(date, "date");
                setEvent({
                  ...event,
                  date: date,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="">Start-Time:</label>
            <Input
              type="text"
              onChange={(e) => {
                setEvent({
                  ...event,
                  startTime: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="">End-Time:</label>
            <Input
              type="text"
              onChange={(e) => {
                setEvent({
                  ...event,
                  endTime: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <Button>Create Event</Button>
          </div>
        </Form>
      </div>
      <Event
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        startTime={event.startTime}
        endTime={event.endTime}
        image={event.image}
      />{" "}
      {/*{...event} */}
    </Wrapper>
  );
}

export default AddEvent;

const Wrapper = styled(Container)`
  display: flex;
padding:32px 0;
  justify-content: space-evenly;
  margin: 0 auto;
  

  @media screen and (max-width: 920px) {
    flex-direction: column;
  }
`;



const Form = styled.form`
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
display:block;
width:550px;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

