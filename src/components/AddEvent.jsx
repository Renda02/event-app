import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
          <label htmlFor="">Time:</label> <input type="text" />
        </div>
        <div>
          <button>Create Event</button>
        </div>
      </form>
      <Event
        id={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
      ></Event>{" "}
      {/*{...event} */}
    </div>
  );
}

export default AddEvent;
