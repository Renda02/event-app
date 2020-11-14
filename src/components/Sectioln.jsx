import styled from "styled-components";
import { ExternalLink } from "react-external-link";

import image from "../images/Lydia.jpeg";
import photo from "../images/Emma.jpeg";
import lee from "../images/Lee.jpeg";
import eve from "../images/Eve.jpeg";



function Section() {
  return (
    <Wrapper>
      <Heading>
        <span>Useful Information</span>
        <h2>Latest Post</h2>
      </Heading>
      <CardWrapper>
        <Slider>
          <Card>
            <Image>
              <Profile src={image} alt="Hallie" />
            </Image>
            <Content>
              {" "}
              <Name>Lee Bryon</Name>
              <Title>Full Stack Developer</Title>
              <Paragraph>
                Lydia Hallie is a full stack developer who works with
                JavaScript, React,Node,GraphQL,and basically any other modern
                web technology daily!
              </Paragraph>
              <Button>
                {" "}
                <ExternalLink href="https://www.theavocoder.com/">
                  <Submit>Read More</Submit>
                </ExternalLink>
              </Button>
            </Content>
          </Card>
          <Card>
            <Image>
              <Profile src={photo} alt="Emma" />
            </Image>
            <Content>
              {" "}
              <Name>Emma Bostian</Name>
              <Title>Software Engineer</Title>
              <Paragraph>
                Emma is software engineer living and working in Stockholm. She
                love creating courses, writing blogs, and speaking at
                conferences.
              </Paragraph>
              <Button>
                {" "}
                <ExternalLink href="https://compiled.blog/">
                  <Submit>Read More</Submit>
                </ExternalLink>
              </Button>
            </Content>
          </Card>

          <Card>
            <Image>
              <Profile src={lee} alt="Lee" />
            </Image>
            <Content>
              {" "}
              <Name>Lee Byron</Name>
              <Title>Engineering Manager</Title>
              <Paragraph>
                Lee is the co-creator of GraphQL and Executive Director of the
                GraphQL Foundation and has had a hand in open source libraries
                used by millions of developers worldwide.
              </Paragraph>{" "}
              <Button>
                {" "}
                <ExternalLink href="https://leebyron.com/">
                  <Submit>Read More</Submit>
                </ExternalLink>
              </Button>
            </Content>
          </Card>
          <Card>
            <Image>
              <Profile src={eve} alt="Hallie" />
            </Image>
            <Content>
              {" "}
              <Name>Eve Porcello</Name>
              <Title>Software Engineer</Title>
              <Paragraph>
                Eve Porcello is a software engineer, instructor, author, and
                co-founder of Moon Highway. Her career started writing technical
                specifications and creating UX designs for web projects.
              </Paragraph>
              <Button>
                {" "}
                <ExternalLink href="https://moonhighway.com/about/">
                  <Submit>Read More</Submit>
                </ExternalLink>
              </Button>
            </Content>
          </Card>
        </Slider>
      </CardWrapper>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const CardWrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  text-align: center;
`;

const Heading = styled.div`
  padding: 10px 20px;
`;

const Slider = styled.div`
  max-width: 1000px;
  display: flex;
`;

const Card = styled.div`
  background: #ffffff;
  flex: 1;
  margin: 0 10px;
`;

const Image = styled.div`
  height: 200px;
  width: 100%;
`;

const Profile = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 10px 20px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #6c61f6;
  line-height: 20px;
  margin: 4px;
`;

const Paragraph = styled.p`
 text-align:start;
  margin: 10px 0;
  padding: 5px;
`;

const Button = styled.div`
  display: flex;
  text-align: left;
  margin: 10px 0;
`;

const Submit = styled.button`
  background: #6c61f6;
  border: none;
  color: #fff;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3ms ease-ease-in-out;
`;
