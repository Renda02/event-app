import React from 'react';
import styled from "styled-components";

import avatar from "../images/event.svg"

function Home() {
    return (
        <Wrapper>
            <div>
                <span>
                    Connect via online
                </span>
                <br/>
                <input type="text" required/>
            </div>
<div> <img src={avatar} alt="meeting" width={ 300}/></div>
           
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:flex-start;
justify-content:space-between;
align-items:center;
padding: 70px ;
`; 