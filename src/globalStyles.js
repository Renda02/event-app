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
width:max(1300px,100%);
margin-left:auto;
margin-right:auto;
padding-right:40px;
padding-left:40px;


@media screen and (max-width:990px){
    padding-right:40px;
padding-left:40px;  
}
`;



export default GlobalStyle;
