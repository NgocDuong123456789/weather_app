import styled from "styled-components";
export const WeatherCity = ({ data }) => {
  // const WeatherCitys = useSelector((state) => {
  //   return state.City;
  // });

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(DataWeather());
  // }, []);

  const date = new Date();

  const dayDate = date.getDate();
  const day =
    date.getDay() === 1
      ? "Monday"
      : date.getDay() === 2
      ? "Tuesday"
      : date.getDay() === 3
      ? "Wednesday"
      : date.getDay() === 4
      ? "Thursday"
      : date.getDay() === 5
      ? "Friday"
      : date.getDay() === 6
      ? "Saturday"
      : "Sunday";

  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <Swapper>
      <City>
        <Citys>{`${data.name} , ${data.country}`}</Citys>
      </City>
      <Dates>
        <GetDate>{day}</GetDate>
        <Get>{`${dayDate}-${month}-${year}`}</Get>
      </Dates>
    </Swapper>
  );
};

const Swapper = styled.div`
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 70px;
  padding: 0 20px;
  color: #fff;
  margin: 20px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const City = styled.div`
  font-size: 1.5rem;
`;

const Dates = styled.div`
  display: flex;
  align-items: center;
`;

const GetDate = styled.h3`
  font-size: 1.4rem;
  margin-right: 15px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Get = styled.p`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Citys = styled.h3`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
