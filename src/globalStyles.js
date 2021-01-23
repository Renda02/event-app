import styled,{ createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
   font-family:'Source Sans Pro',sans-serif
  }

  
`;


export const Container=styled.div`
z-index:1;
max-width:1300px;
width:100%;
margin-left:auto;
margin-right:auto;
padding-right:40px;
padding-left:40px;


@media screen and (max-width:990px){
    padding-right:40px;
padding-left:40px;  
}
`;


export const Button=styled.button`
border-radius:4px;
background:#6c61f6;
white-space:nowrap;
padding:12px 24px;
color:#fff;
font-size:16px;
border:none;
outline:none;
cursor: pointer;

&::hover{
  transition:all 0.3s ease-out;
  background:#fff;
  color:#6c61f6;
}

@media screen and (max-width:960px){
  width:100%;
}
`;



export default GlobalStyle;
