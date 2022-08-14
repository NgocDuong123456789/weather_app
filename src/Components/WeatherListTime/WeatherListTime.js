import React from "react";
import styled from "styled-components";

export const WeatherListTime = ({ data }) => {
  const getDate = (Time) => {
    let date = new Date(Time * 1000);
    let house = date.getHours();

    let minutes = date.getMinutes();
    if (house < 10) {
      house = `0${house}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${house}:${minutes}`;
  };

  return (
    <Swappers>
      {/* <Container1> */}
      <div>
        <Contexts>min</Contexts>
        <Context>{data.list[0].main.temp_min}</Context>
      </div>
      <div>
        <Contexts>speed</Contexts>
        <Context>{`${data.list[0].wind.speed}m/s`}</Context>
      </div>
      <div>
        <Contexts>clouds</Contexts>
        <Context>{`${data.list[0].clouds.all}%`}</Context>
      </div>
      {/* </Container1> */}
      {/* <Container> */}
      <div>
        <Contexts>max</Contexts>
        <Context>{data.list[0].main.temp_max}</Context>
      </div>
      <div>
        <Contexts>sunrise</Contexts>
        <p>{getDate(data.city.sunrise)}</p>
      </div>
      <div>
        <Contexts>sunset</Contexts>
        <Context>{getDate(data.city.sunset)}</Context>
      </div>
      {/* </Container> */}
    </Swappers>
  );
};

const Swappers = styled.div`
  flex: 1;
  height: 200px;
  border: 1px solid #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
  grid-template-rows: auto;
  padding-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  padding: 0 50px;
`;

const Container1 = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  padding: 40px 50px;
`;

const Contexts = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Context = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
