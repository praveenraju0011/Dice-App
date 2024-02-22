import React from "react";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [totalScore, setTotalScore] = useState(0);
  const [randomDice, setRandomDice] = useState(1);
  return (
    <GamePlayDiv>
      <RollDice
        randomDice={randomDice}
        setRandomDice={setRandomDice}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        setSelectedNumber={setSelectedNumber}
        selectedNumber={selectedNumber}
      />
    </GamePlayDiv>
  );
};

const GamePlayDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export default GamePlay;
