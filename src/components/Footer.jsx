import styled from "styled-components";

function Footer() {
    return (
        <Wrapper>
            <Paragraph>Welcome to Eventily</Paragraph>
        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.div`
  width: 100%;
  height:100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background:#000;
`;

const Paragraph = styled.h4`
padding-left:10px;
color:#ffff;
margin: 20px ;
`;