import React from "react";

import styled from "styled-components";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import { BiTimeFive, BiLocationPlus } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

function Events(props) {
  return (
    <EventContainer>
      <div className="item-list">
        <Item>
          <div className="img">
            <img src={props.image} alt="images" />
          </div>
          <Content>
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

                <Ratings><div> <RatingItem>
                    <FaRegStar />
                  </RatingItem>
                  <RatingItem>
                    <FaRegStar />
                  </RatingItem>
                  <RatingItem>
                    <FaRegStar />
                  </RatingItem>
                  <RatingItem>
                    <FaRegStar />
                  </RatingItem>
                  <RatingItem>
                    <FaRegStarHalf />
                  </RatingItem></div>
                  <div>
                    <p>from
                      <br/>
                      {props.price}
                      <br/>
                      per person
                    </p>
                  </div>
                 

                </Ratings>
              </div>
            </ContentHeading>
          </Content>
        </Item>
      </div>
    </EventContainer>
  );
}

export default Events;

const EventContainer = styled.div`
  max-width: 1380px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 3rem;
`;

const Item = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 2rem;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.35);
`;

const Content = styled.div`
  padding: 1rem 1.6rem;
  line-height: 1.2rem;
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
  font-size: 1.75rem;
  margin-right: 0.25rem;
`;
