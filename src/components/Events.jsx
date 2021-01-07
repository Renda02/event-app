import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsArrowDown } from "react-icons/bs";
import { BiTimeFive, BiLocationPlus } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

export default function Events(props) {
  return (
    <EventContainer>
      <Item>
        <div className="img-container">
          <Image src={props.image} alt="food pic" />
        </div>
        <ContentWrapper>
          <ContentHead>
            <div>
              <Title>{props.title}</Title>
              <div>
                <Detail>
                  <li>
                    <span>
                      <MdDateRange />:
                    </span>
                    {props.date}
                  </li>
                  <li>
                    <span>
                      <BiTimeFive />:{props.time}
                    </span>
                  </li>
                  <li>
                    <span>
                      <BiLocationPlus />:{props.location}
                    </span>
                  </li>
                </Detail>
              </div>
              <Rating>
                <RatingList>
                  <BsStarFill />
                </RatingList>
                <RatingList>
                  <BsStarFill />
                </RatingList>
                <RatingList>
                  <BsStarFill />
                </RatingList>
                <RatingList>
                  <BsStarFill />
                </RatingList>
                <RatingList>
                  <BsStarHalf />
                </RatingList>
              </Rating>
              <Review>4.5 (122)</Review>
            </div>
            <Button>
              <BsArrowDown size={40} />
            </Button>
          </ContentHead>
        </ContentWrapper>
      </Item>
    </EventContainer>
  );
}

const EventContainer = styled.div`
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-rows: repeat (3, auto);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Item = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
`;

const ContentWrapper = styled.div`
  padding: 1rem 1.2rem;
`;

const ContentHead = styled.div`
  display: grid;
 
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 1.6rem;

  padding: 0.4rem 0;
`;

const Detail = styled.ul`
  list-style: none;
`;

const Rating = styled.ul`
  display: inline-flex;
  color: yellow;
  margin-top: 1.9rem;
`;

const RatingList = styled.li`
  font-size: 0.75rem;
  margin-right: 0.25rem;
`;

const Review = styled.small`
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 0.5rem;
  opacity: 0.7;
`;

const Button = styled.button`
  padding: 1rem;
  background: purple;
  opacity: 0.9;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
margin-right:15px;
  width: 45px;
  height: 25px;
  border-radius: 50px;
  cursor: pointer;
  outline: 0;
  border: none;
`;
