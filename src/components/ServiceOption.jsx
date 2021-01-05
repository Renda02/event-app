import React from "react";
import styled from "styled-components";

function ServiceOption({ Icon, title, text }) {
  return (
    <Header>
      {Icon && <Icon className="service_icon" size={25} fill="#6c61f6" />}
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </Header>
  );
}

export default ServiceOption;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: #5d5b6f;
  cursor: pointer;

  &:hover {
    color: #6c61f6;
  }
`;

const Heading = styled.span`
  line-height: 1.5rem;
  font-size: 1.1rem;
  color: #000;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 0.875rem;
  
  text-align:center;
  line-height: 1.25rem;
  color: #6d7688;
`;
