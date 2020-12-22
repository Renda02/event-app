import React from 'react';
import styled from "styled-components"

function NavBar() {
    return (
        <NavBa>
            <Wrapper>
        <Heading>Eventily</Heading>
        <div className="links">
          <a href="/" alt="">
            <span></span>
            <span>Create event</span>
          </a>
          <a href="/" alt="">
            <span></span>
            <span>I like them</span>
          </a>
          <a href="/" alt="">
            <span></span>
            <span>Tickects</span>
          </a>
          <a href="/" alt="">
            <span>Sign in</span>
          </a>
        </div></Wrapper>
      </NavBa>
    );
}

export default NavBar
 

const NavBa = styled.div`
  
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  
  background: #f4f3f5;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.12);
`;

const Wrapper = styled.a`
  padding: 20px 0;
  background: #f4f3f5;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  z-index: 1;
`;

const Heading = styled.h1`
font-size:2rem;
line-height: 60px;
padding:.2em .5em;
margin: 0 auto;
font-weight:bold;
`;


