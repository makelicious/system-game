import styled from "styled-components";

type Size = "large" | "medium" | "small";
export interface ButtonProps {
  size: Size;
}

export const PrimaryButton = styled.button<ButtonProps>`
  color: #fff;
  background-color: #247ba0;
  min-width: 80px;
  padding: 0 2rem;
  height: ${props => getSize(props.size)};
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #1b5a75;
  }
`;

export const SecondaryButton = styled.button<ButtonProps>``;

function getSize(size: Size) {
  switch (size) {
    case "large": {
      return "40px";
    }
    case "medium":
      return "32px";
    case "small":
    default:
      return "24px";
  }
}
/** @component */
export default PrimaryButton;
