import React from 'react';
import styled from "styled-components";



function HeaderOption({Icon,title}) {
    return (
        <Header>
            {Icon && <Icon className="header_icon" size={25}  />}
            <Heading>{title}</Heading>
            
            
        </Header>
    )
}

export default HeaderOption

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

const Heading = styled.h3`
font-weight:500;
font-size:1.1rem;
color:#000;`;



