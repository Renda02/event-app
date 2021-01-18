import styled from "styled-components";
import Event from "./Event";

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
                id={event.id}
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
  background: #dbe0f5;
`;



const Heading = styled.h2`
  padding: 10px 20px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
