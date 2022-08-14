import { memo } from "react";
import styled from "styled-components";
const NotFound = () => {
  return (
    <Swappers>
      <div>
        <Title>Not Found</Title>
        <Context>try to add or delete space between the word</Context>
      </div>
    </Swappers>
  );
};

const Swappers = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  color: black;
`;
const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Context = styled.p`
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default memo(NotFound);
