import styled from "styled-components";

function EventPageOp({title, text, Icon}) {
  return (
    <div>
      <List>
        <div>
          <ListItem>
            {Icon && <Icon className="header_icon" />}
            <Title>{title}</Title>
          </ListItem>
          <Text>{text}</Text>
        </div>
      </List>
    </div>
  );
}

export default EventPageOp;

const List = styled.dl`
  display: flex;
`;

const ListItem = styled.dt`
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  margin: 8px 0 4px;
  font-weight: 500px;
`;

const Title = styled.span`
display:flex;
flex-direction:flex-start;
margin-left: 38px;

  
`;

const Text = styled.dd`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6d7688;
  margin-left: 38px;
  margin-bottom: 24px;
`;
