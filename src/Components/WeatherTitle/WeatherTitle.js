import {
  BsFillCloudDrizzleFill,
  BsFillCloudSnowFill,
  BsFillCloudyFill,
  BsFillCloudsFill,
  BsCloudSunFill,
} from "react-icons/bs";
import { FiCloudDrizzle } from "react-icons/fi";
import styled from "styled-components";

export const WeatherTitle = ({ data }) => {
  const Clouds = (Cloud) => {
    switch (Cloud) {
      case "moderate rain":
        return <BsFillCloudDrizzleFill />;
      case "light rain":
        return <BsFillCloudSnowFill />;
      case "overcast clouds":
        return <BsFillCloudyFill />;
      case "few clouds":
        return <BsFillCloudsFill />;
      case "clear sky":
        return <BsCloudSunFill />;
      case "broken clouds":
        return <FiCloudDrizzle />;
      default:
        return;
    }
  };

  return (
    <Swappers>
      <CloudsList>
        <Cloud>{Clouds(data.weather[0].description)}</Cloud>
        <Title>{data.main.humidity}</Title>
      </CloudsList>
      <Context>
        <GetCloud>{data.weather[0].description}</GetCloud>
      </Context>
      <div>
        <Yen>{data.weather[0].main}</Yen>
      </div>
    </Swappers>
  );
};

const GetCloud = styled.p`
  font-size: 1.2rem;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;
const Swappers = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #fff;
  color: #fff;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const CloudsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  @media (max-width: 768px) {
    width: 100px;
    padding-top: 30px;
  }
`;

const Context = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Cloud = styled.div`
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Yen = styled.p`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 10px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
