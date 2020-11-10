import React from 'react';
import styled from "styled-components";



function Home() {
    return (
        <Wrapper>
            <Intro>
                <Heading>
                    Connect via
                    <br/>online
                </Heading>
                <br/>
                <input type="text" required/>
            </Intro>
 <Image src="" alt="meeting" />
           
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  width: 1080px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
 
`;

const Intro = styled.div`
  text-align: center;
  line-height: 24px;
  padding-top: 200px;
  padding-bottom: 175px;
  display: flex-start;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 40px;
`;

const Image = styled.img`
background:grey;
width:50%;
width:50%;
border-radius:5px;`;

