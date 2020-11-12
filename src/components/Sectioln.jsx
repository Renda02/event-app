import styled from "styled-components";
import image from "../images/Lydia.jpeg";

function Section() {
  return (
    <Wrapper>
      <div>
        <span>Useful Information</span>
        <h2>Latest Post</h2>
      </div>
      <Slider>
        <Card>
          <Image>
            <Profile src={image} alt="Hallie" />
          </Image>
          <Content>
            {" "}
            <Name>Lydia Hallie</Name>
            <Title>Full Stack Developer</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </Paragraph>
            <Button>
              {" "}
              <button>Read More</button>
            </Button>
          </Content>
        </Card>

        <Card>
          <Image>
            <Profile src={image} alt="Jing" />
          </Image>
          <Content>
            {" "}
            <Name>Jin Chen</Name>
            <Title>React Developer</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </Paragraph>
            <Button>
              {" "}
              <button>Read More</button>
            </Button>
          </Content>
        </Card>
        <Card>
          <Image>
            <Profile src={image} alt="Hallie" />
          </Image>
          <Content>
            {" "}
            <Name>Lee Bryon</Name>
            <Title>Full Stack Developer</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </Paragraph>
            <Button>
              {" "}
              <button>Read More</button>
            </Button>
          </Content>
        </Card>
      </Slider>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  place-items: center;
  text-align: center;

  background: #f2f2f2;
`;

const Slider = styled.div`
  max-width: 1100px;
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
  font-size: 25px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #6c61f6;
  line-height: 20px;
`;

const Paragraph = styled.p`
  text-align: justify;
  margin: 10px 0;
`;

const Button = styled.div`
  display: flex;
  text-align: left;
  margin: 10px 0;
`;
