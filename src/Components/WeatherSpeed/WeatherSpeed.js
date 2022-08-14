import React from "react";
import styled from "styled-components";

import {
  BsFillCloudDrizzleFill,
  BsFillCloudSnowFill,
  BsFillCloudyFill,
  BsFillCloudsFill,
  BsCloudSunFill,
} from "react-icons/bs";
import { FiCloudDrizzle } from "react-icons/fi";
export const WeatherSpeed = ({ data }) => {
  const NewData = data.map((item) => {
    return {
      time: item.dt_txt.substring(11, 16),
      weather: item.weather[0].main,
      weathers: item.weather[0].description,
    };
  });

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
      {NewData.map((item, index) => {
        return (
          <Container key={index}>
            <Time>{item.time}</Time>
            <p>{item.weather}</p>
            <Cloud>{Clouds(item.weathers)}</Cloud>
          </Container>
        );
      })}
    </Swappers>
  );
};

const Swappers = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: 180px;
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  height: 120px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  margin: 5px;
  padding: 0 20px;
`;
const Time = styled.p`
  margin: 15px 0;
  font-size: 1.2rem;
`;
const Cloud = styled.div`
  font-size: 2rem;
  margin-top: 10px;
`;
