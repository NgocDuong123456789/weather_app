import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { WeatherCity } from "./Components/WeatherCity/WeatherCity";
import { WeatherListTime } from "./Components/WeatherListTime/WeatherListTime";
import { WeatherTitle } from "./Components/WeatherTitle/WeatherTitle";
import { WeatherSpeed } from "./Components/WeatherSpeed/WeatherSpeed";
import NotFound from "./Components/NotFound/NotFound";
import { DataDefault } from "./Datadefault/DataDefault";
function App() {
  const [city, setCity] = useState("Vietnam");
  const [data, setData] = useState(DataDefault);
  const [cityInput, setCityInput] = useState("");
  const RefInput = useRef();
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setCityInput("");
    RefInput.current.focus();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&appid=32ba0bfed592484379e51106cef3f204`
      )
      .then((res) => {
        setData(Object.keys(res.data).length === 0 ? DataDefault : res.data);
        setNotFound(false);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [city]);

  return (
    <Swapper>
      <SearchInput>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter City"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            ref={RefInput}
          />
          <Search>Search</Search>
        </form>
      </SearchInput>
      {notFound ? (
        <NotFound />
      ) : (
        <Swappers>
          <Container>
            <Sum>
              <WeatherTitle data={data.list[0]} />
              <WeatherListTime data={data} />
            </Sum>
            <WeatherCity data={data.city} />
            <WeatherSpeed data={data.list} />
          </Container>
        </Swappers>
      )}
    </Swapper>
  );
}

const Swappers = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 100%;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 30px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
const Sum = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.div`
  position: absolute;
  /* position: fixed; */
  /* top: 100px; */
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    top: 10px;
  }
`;

const Input = styled.input`
  width: 350px;
  height: 45px;
  border-radius: 5px;
  background-color: #fff;
  padding: 0 10px;
  font-size: 1.1rem;
  @media (max-width: 768px) {
    width: 250px;
    font-size: 1rem;
  }
`;

const Search = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #090979;
  height: 100%;
  width: 100px;
  font-size: 1.2rem;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 768px) {
    width: 70px;
    font-size: 1rem;
  }
  color: #fff;
  &:hover {
    opacity: 0.5;
  }
`;

const Swapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default App;
