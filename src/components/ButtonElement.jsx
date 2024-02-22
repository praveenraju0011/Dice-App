import styled from "styled-components";

const ButtonElement = ({
  buttonText,
  bgColor,
  textColor,
  hoverEffect,
  hoverColor,
}) => {
  return (
    <Button
      customColor={bgColor}
      customTextColor={textColor}
      hoverEffect={hoverEffect}
      hoverColor={hoverColor}
    >
      {buttonText}
    </Button>
  );
};

const Button = styled.button`
  background-color: ${(props) =>
    props.customColor ? `${props.customColor}` : "black"};
  color: ${(props) =>
    props.customTextColor ? `${props.customTextColor}` : "white"};
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  transition: 0.4s background ease-in;
  font-weight: 600;
  cursor: pointer;
  /* &:hover: {
    background-color: ${(props) =>
    props.hoverEffect ? `${props.hoverEffect}` : "black"};
  } */

  &:hover {
    background-color: ${(props) =>
      props.hoverEffect ? `${props.hoverEffect}` : "white"};
    border: 1px solid black;
    color: ${(props) => (props.hoverColor ? `${props.hoverColor}` : "black")};
    transition: 0.3s background ease-in;
  }
`;
export default ButtonElement;
