import React from 'react';
import styled from "styled-components"

function NavBar() {
    return (
        <NavBa>
            <Heading>Eventily</Heading>
         
        </NavBa>
    )
}

export default NavBar
 

const NavBa = styled.div`
width:100%;
height: 70px;
;
`;

const Heading = styled.h1`
font-size:30px;
line-height: 60px;
padding:5px 10px;
font-weight:bold;
`;


