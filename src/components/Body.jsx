import styled from "styled-components";
import Event from "./Event";
import Events from "./Events"

function Body(props) {
  return (
    <Wrapper>
      <Heading>Upcoming Events</Heading>
      <EventContainer>
        {props.eventList.map((event) => {
          return (
            <Event
            image={event.image}
              time={event.time}
              title={event.title}
              location={event.location}
              date={event.date}
            />
          );
        })}
      </EventContainer>
      <EventContainer>
      {props.eventList.map((events) => {
          return (
            <Events
            image={events.image}
              time={events.time}
              title={events.title}
              location={events.location}
              date={events.date}
              price={events.price}
            />
          );
        })}
      </EventContainer>
    </Wrapper>
  );
}

export default Body;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
 
`;

const Heading = styled.h2`
  padding: 10px 20px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
