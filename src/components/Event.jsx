import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiTimeFive, BiLocationPlus } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

function Event(props) {
  return (
    <EventWrapper>
      <Box>
        <Image src={props.image} alt="event" />

        <ContentHeading>
          <div>
            <Heading>{props.title}</Heading>
            <Details>
              <span>
                <BiTimeFive />:{props.time}
              </span>

              <span>
                <MdDateRange />:{props.date}
              </span>

              <span>
                <BiLocationPlus />:{props.location}
              </span>
            </Details>
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
            <ButtonBox> <Button type="submit" value="Sign up" />
            <EventButton to={`/events/${props.id}`}>See Event</EventButton></ButtonBox>
           
          </div>
        </ContentHeading>
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
  margin: 8px;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0px;
`;

const ButtonBox=styled.div`
display:flex;
justify-content:space-between;`;

const Button = styled.input`
  background: #6c61f6;
  border: none;
  color: #fff;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3ms ease-ease-in-out;
  margin-top:.9rem;
`;

const EventButton=styled(Link)`

  border: none;
  
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration:none;
  padding: 5px;
  transition: 0.3ms ease-ease-in-out;
  margin-top:.9rem;  color:#6c61f6;
    background:#fff;
  
  &:hover{color: #fff;
  background: #6c61f6;
  }`;

const ContentHeading = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  font-size: 1rem;
  padding: 0.4rem 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ratings = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  
`;

const RatingContainer=styled.div`
margin-top:1.1rem;`;

const RatingItem = styled.span`
  margin: 0.25rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 60%;
`;

const Review = styled.small`
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 0.5rem;
  opacity: 0.7;
`;