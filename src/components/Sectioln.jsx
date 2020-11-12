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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </p>
            <div>
              {" "}
              <button>Read More</button>
            </div>
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </p>
            <div>
              {" "}
              <button>Read More</button>
            </div>
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              error tempora consequuntur dicta distinctio praesentium corporis
              quo ipsa eius, autem officia laborum dignissimos, optio nesciunt
              sunt mollitia libero totam itaque!
            </p>
            <div>
              {" "}
              <button>Read More</button>
            </div>
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
  place-items:center;
  text-align:center;
  
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
padding:10px 20px;`;

const Name = styled.div`
font-size:25px;
font-weight:600;`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #6c61f6;
  line-height:20px;
`;
