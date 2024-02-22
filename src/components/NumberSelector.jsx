import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberParent>
      <NumberBox>
        <p className="error">{error}</p>
        {arrayNumber.map((value, index) => (
          <Box
            isSelected={selectedNumber === value}
            key={index}
            onClick={() => {
              setSelectedNumber(value);
              setError("");
            }}
          >
            {value}
          </Box>
        ))}
      </NumberBox>

      <p className="select">Select Number</p>
    </NumberParent>
  );
};
const NumberParent = styled.div`
  max-width: 1280px;
  max-height: 151px;
  position: relative;

  .select {
    text-align: end;
    padding: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const NumberBox = styled.div`
  display: flex;
  gap: 24px;
  .error {
    color: red;
    font-weight: 600;
    margin-top: 25px;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

export default NumberSelector;
