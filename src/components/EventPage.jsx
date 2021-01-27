import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";

import { Container } from "../globalStyles";

import EventPageOp from "./EventPageOp";

function EventPage() {
  const [event, setEvent] = useState({});

  let { eventId } = useParams();

  console.log(event, "event");
  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(
        `https://murmuring-reaches-66235.herokuapp.com/event/${eventId}`
      );
      // 2. prepare the data
      const data = await response.json();

      // 3. update the value of the state
      setEvent(data);
    }

    fetchData();

    // fetch data
    // set the events
  }, []);

  return (
    <Main>
      <div>
        {" "}
        <Title> {event.title}</Title>
        <Ratings>
          <RatingContainer>
            {" "}
            <RatingItem>
              <BsStarFill fill="#FCD94B" />
            </RatingItem>
            <RatingItem>
              <BsStarFill fill="#FCD94B" />
            </RatingItem>
            <RatingItem>
              <BsStarFill fill="#FCD94B" />
            </RatingItem>
            <RatingItem>
              <BsStarFill fill="#FCD94B" />
            </RatingItem>
            <RatingItem>
              <BsStarHalf fill="#FCD94B" />
            </RatingItem>
            <Review>4.5 (122)</Review>
          </RatingContainer>
        </Ratings>{" "}
      </div>
      <div>
        <Image src={event.image} alt="event" />
      </div>
      <TopSection>
        <Box>
          <Icon>
            <AiOutlineInfoCircle />
          </Icon>
          <Context>
            Due to the COVID-19 outbreak, tours, attractions, and venues in this
            location may be temporarily closed. Check out our travel update page
            for the latest information. <a href="/">Learn more</a>
          </Context>
        </Box>
      </TopSection>
      <BottomSection>
        <Heading>About this event</Heading>
      </BottomSection>
      <div>
        {" "}
        <EventPageOp
          title="Free Cancelation"
          text="Cancel up to 24 hours in advance to receive a full refund"
        />
      </div>
      <div>
        {" "}
        <EventPageOp
          title="COVID-19 precautions"
          text="Special health and safety measures apply. "
        />
      </div>
      <div>
        {" "}
        <EventPageOp
          title="Mobile tickecting"
          text="Use your phone or print your voucher"
        />
      </div>
      <div>
        {" "}
        <EventPageOp title="Instant confirmation" />
      </div>
    </Main>
  );
}

export default EventPage;

const Main = styled(Container)`
  margin-top: 0;
  padding-top: 24px;
`;
const Icon = styled.span`
  height: 1em;
  width: 1em;
  margin-right: 0.8rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media screen and (max-width: 960px) {
    font-size: 2rem;
    line-height: 1.8rem;
  }
`;

const Ratings = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
`;

const RatingContainer = styled.div`
  margin-top: 1.1rem;
`;

const RatingItem = styled.span`
  margin: 0.25rem;
`;

const Review = styled.small`
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 0.5rem;
  opacity: 0.7;
  color: #033c79;
`;

const Image = styled.img`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  margin: 32px 0 0;
`;

const TopSection = styled.section`
  font-size: 1rem;
  line-height: 1.5rem;
  background: #ccecff;
  border-top: 5px solid #81beff;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 16px 0;
  line-height: 1.2rem;
  margin-bottom: 32px;

  @media (min-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }
  @media (min-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

const Context = styled.p`
  display: block;
`;

const BottomSection = styled.section`
  display: flex;
  align-items: center;
`;

const Heading = styled.h2`
  font-weight: 600;
  margin: 32px 0 28px 0;
  font-size: 1.5rem;
  line-height: 2rem;
`;
