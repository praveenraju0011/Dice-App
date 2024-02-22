import { useState } from "react";
import styled from "styled-components";
import ButtonElement from "./ButtonElement";
import Rules from "./Rules";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
const RollDice = ({
  randomDice,
  setRandomDice,
  totalScore,
  setTotalScore,
  setSelectedNumber,
  selectedNumber,
}) => {
  const [showRules, setShowRules] = useState(false);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (selectedNumber == -1) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNum = generateRandomNumber(1, 7);
    setRandomDice(randomNum);
    console.log(selectedNumber);
    if (selectedNumber == randomNum) {
      setTotalScore((prev) => prev + randomNum);
    } else {
      setTotalScore((prev) => prev - 2);
    }
  };

  return (
    <MainDiceConainer>
      <ScoreBoard>
        <TotalScore totalScore={totalScore} setTotalScore={setTotalScore} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </ScoreBoard>

      <DiceContainer>
        <div onClick={rollDice}>
          <img src={`/images/dice/dice_${randomDice}.jpeg`} alt="dice-img" />
        </div>
        <div>
          <p>Click on Dice to roll</p>
        </div>

        <div className="buttonClass">
          <div onClick={() => setTotalScore(0)}>
            <ButtonElement
              buttonText="Reset Score"
              bgColor="white"
              textColor="black"
              hoverEffect="black"
              hoverColor="white"
            />
          </div>
          <div onClick={() => setShowRules((prev) => !prev)}>
            <ButtonElement
              buttonText="Show Rules"
              hoverEffect="white"
              hoverColor="red"
            ></ButtonElement>
          </div>
        </div>
      </DiceContainer>
      <div className="rulesClass">{showRules && <Rules />}</div>
    </MainDiceConainer>
  );
};

const MainDiceConainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .rulesClass {
    display: flex;
    justify-content: center;
  }
`;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    width: 229px;
    height: 36px;
  }
  .buttonClass {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
  padding: 50px 64px;
`;
export default RollDice;
