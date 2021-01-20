import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import Event from "./Event";

function AddEvent() {
  const [event, setEvent] = useState({
    image: "",
    title: "",
    time: null,
    location: "",
    id: null,
    date: new Date(),
    name: "",
  });

  console.log(event, "event");

  return (
   <div>
      <h1>Add Event</h1>
      <Main> 
        <div>
        {" "}
        <form>
          <div>
            <label htmlFor="">Event title:</label>
            <input
              type="text"
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
            <input
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
            <label htmlFor="">Time:</label>
            <TimePicker
              value={event.time}
              onChange={(time) => {
                console.log(time, "time");
                setEvent({
                  ...event,
                  time: time,
                });
              }}
            />
          </div>
          <div>
            <button>Create Event</button>
          </div>
        </form>
      </div>
      <Event
      
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
      />{" "}
      {/*{...event} */}
    </Main>
    </div>
  );
}

export default AddEvent;


const Main = styled.div`display: flex;
width: 100%;
max-width: 1080px;
justify-content: space-between;
margin: 0 auto;`;