import styled from "styled-components";

function Body() {
  return (
    <Wrapper>
      <Heading>Upcoming Events</Heading>
      <EventWrapper>
        <Box>
          <li>23h00-22h00</li>
          <li>Tech Fair</li>
          <li>
            <Button type="submit" value="Sign up" />
          </li>
        </Box>
      </EventWrapper>
      <EventWrapper>
        <Box>
          <li>23h00-22h00</li>
          <li>Tech Fair</li>
          <li>
            <Button type="submit" value="Sign up" />
          </li>
        </Box>
      </EventWrapper>
      <EventWrapper>
        <Box>
          <li>23h00-22h00</li>
          <li>Tech Fair</li>
          <li>
            <Button type="submit" value="Sign up" />
          </li>
        </Box>
      </EventWrapper>
      <EventWrapper>
        <Box>
          <li>23h00-22h00</li>
          <li>Tech Fair</li>
          <li>
            <Button type="submit" value="Sign up" />
          </li>
        </Box>
      </EventWrapper>
      <EventWrapper>
        <Box>
          <li>23h00-22h00</li>
          <li>Tech Fair</li>
          <li>
            <Button type="submit" value="Sign up" />
          </li>
        </Box>
      </EventWrapper>
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
  background: #f2f2f2;
`;

const EventWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.ul`
  width: 880px;
  display: flex;
  display: flex-start;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 20px;
  background: #fff;
`;

const Heading = styled.h2`
  padding: 10px 20px;
`;

const Button = styled.input`
  border: 2px solid #6c61f6;
  padding: 10px 10px;
  font-size: 18px;
  background: #6c61f6;
  color: #fff;
`;
