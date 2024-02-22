import React from "react";
import styled from "styled-components";
const TotalScore = ({ totalScore }) => {
  return (
    <Main>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </Main>
  );
};

const Main = styled.div`
  max-width: 200px;
  max-height: 150px;
  text-align: center;
  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
    letter-spacing: 0em;
    text-align: center;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
  }
`;

export default TotalScore;
