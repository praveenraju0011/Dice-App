import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <div>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin-top: 20px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  div {
    margin-top: 30px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export default Rules;
