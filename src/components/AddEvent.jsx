import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Container, Button } from "../globalStyles";
import "react-datepicker/dist/react-datepicker.css";

import Event from "./Event";

const emptyEvent = {
  image: "https://cdn.getyourguide.com/img/tour/5da3a3a9d7294.jpeg/68.jpg",
  title: "",
  time: null,
  location: "",
  date: new Date(),
  name: "",
};

function AddEvent() {
  // when user land on page
  const [event, setEvent] = useState(emptyEvent);
  const [notification, setNotification] = useState(null);

  console.log(event, "event");

  const createEvent = async (e) => {
    // prevent default behaivour of the form submission
    e.preventDefault();
    // 1. get the data
    const response = await fetch(
      `https://murmuring-reaches-66235.herokuapp.com/event`,
      {
        method: "POST", // push something to the backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );
    // 2. prepare the data
    const data = await response.json();
    setNotification("Event has been created.");

    // 3. cleanup so the user can add a new event
    setEvent(emptyEvent);
  };

  return (
    <Wrapper>
      <div>
        <h1>Add Event</h1>{" "}
        {notification ? (
          <p>{notification}</p>
        ) : (
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
              <Button onClick={createEvent}>Create Event</Button>
            </div>
          </Form>
        )}
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
  padding: 32px 0;
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
  display: block;
  width: 550px;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
