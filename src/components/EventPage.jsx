import React from "react";
import { useParams } from "react-router-dom";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillHeart, AiOutlineInfoCircle } from "react-icons/ai";

import styled from "styled-components";
import events from "../data/events.json";
import EventPageOp from "./EventPageOp";

function EventPage() {
  let { eventId } = useParams();

  const event = events.find((ev) => {
    return ev.id === eventId;
  });

  return (
    <div>
      <div>
        {" "}
        <Title> {event.title}</Title>
      </div>
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
      <div>
        <Image src={event.image} alt="event" />
      </div>
      <TopSection>
        <Box>
          <AiOutlineInfoCircle />
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
      <EventPageOp
      Icon={AiFillHeart}
      title="Free Cancelation"
      text="Cancel up to 24 hours in advance to receive a full refund"/>
    </div>
  );
}

export default EventPage;

const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.75rem;
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
  @media (min-width: 768px) {
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
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-weight: 500;
  margin: 32px 0 28px;
  font-size: 1.5rem;
  line-height: 2rem;
`;
