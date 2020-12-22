import React from 'react';
import styled from "styled-components";



function HeaderOption({Icon,title}) {
    return (
        <Header>
            {Icon && <Icon className="header_icon" />}
            <h3>{title}</h3>
            
            
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



