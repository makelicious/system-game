import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import "./App.css";
import PrimaryButton from "./components/Button";
import Input from "./components/Input";
import { ModalForButtons } from "./components/Modal";
import Simulation from "./Simulation";

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
  const [players, setPlayers] = React.useState(4);
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(6);
  const [showSimulation, setShowSimulation] = React.useState(true);

  return (
    <>
      {showSimulation ? (
        <Simulation minValue={minValue} maxValue={maxValue} players={players} />
      ) : (
        <Wrapper>
          <ModalForButtons>
            <Label>Amount of players</Label>
            <InputSpacing
              onChange={event => setPlayers(parseInt(event.target.value))}
            />
            <Label>Min value</Label>
            <InputSpacing
              onChange={event => setMinValue(parseInt(event.target.value))}
            />
            <Label>Max value</Label>
            <InputSpacing
              onChange={event => setMaxValue(parseInt(event.target.value))}
            />
            <Button onClick={() => setShowSimulation(true)} size={"large"}>
              Go
            </Button>
          </ModalForButtons>
        </Wrapper>
      )}
    </>
  );
};

export default App;
