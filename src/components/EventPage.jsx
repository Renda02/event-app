import React from "react";
import { useParams } from "react-router-dom";

import events from "../data/events.json";

function EventPage() {
  let { eventId } = useParams();

  const event = events.find((ev) => {
    return ev.id == eventId;
  });

  return (
    <div>
      <h1> {event.title}</h1>
    </div>
  );
}

export default EventPage;
