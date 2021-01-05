import React from "react";
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
                <div>
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
                </div>
                <div>
                  <p>from</p>
                  <br />
                  <p>{props.price}</p>
                  <br />
                  <p> per person</p>
                </div>
              </Ratings>
            </div>
          </ContentHeading>
        
        
          <Button type="submit" value="Sign up" />
        
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
  margin:8px;

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

const Button = styled.input`
  border: 2px solid #6c61f6;
  padding: 10px 10px;
  font-size: 18px;
  background: #6c61f6;
  color: #fff;
`;


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
  margin-top: auto;
`;

const RatingItem = styled.span`
  margin-right: 0.25rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 50%;
`;
