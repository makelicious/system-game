import React from "react";
import styled from "styled-components";
import "./App.css";
import PrimaryButton from "./components/Button";
import Input from "./components/Input";
import { ModalForButtons } from "./components/Modal";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const InputSpacing = styled(Input)`
  margin: 1rem 0;
`;

const Label = styled.label``;

const Button = styled(PrimaryButton)`
  width: 25%;
  align-self: flex-end;
`;

const H1 = styled.h1``;
const App: React.FC = () => {
  return (
    <>
      <H1>MORO</H1>
      <Wrapper>
        <ModalForButtons>
          <Label>Amount of players</Label>
          <InputSpacing />
          <Label>Min value</Label>
          <InputSpacing />
          <Label>Max value</Label>
          <InputSpacing />
          <Button onClick={() => console.log("terve")} size={"large"}>
            Go
          </Button>
        </ModalForButtons>
      </Wrapper>
    </>
  );
};

const Form = styled.form``;

export default App;
