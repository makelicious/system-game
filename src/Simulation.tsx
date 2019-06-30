import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PrimaryButton, { ButtonProps } from "./components/Button";

interface SimulationProps {
  players: number;
  minValue: number;
  maxValue: number;
}
const Wrapper = styled.div`
  height: 800px;
  width: 800px;
  position: absolute;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

interface PlayerButtonProps extends ButtonProps {
  top?: number;
  left?: number;
}

const PlayerButton = styled(PrimaryButton)<PlayerButtonProps>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const Simulation: React.FC<SimulationProps> = props => {
  const { players } = props;
  const playerAmount = _.range(players);
  const playerObjects = playerAmount.map(p => ({
    left: distanceFromLeft(players, p),
    top: distanceFromTop(players, p),
    id: p
  }));

  return (
    <Wrapper>
      {playerObjects.map(player => (
        <PlayerButton
          key={player.id}
          size="large"
          top={player.top}
          left={player.left}
        >
          {player.id}
        </PlayerButton>
      ))}
    </Wrapper>
  );
};

function distanceFromLeft(players: number, order: number) {
  return 800 / 2 + Math.round(200 * Math.cos(theta(players, order)));
}

function distanceFromTop(players: number, order: number) {
  return 800 / 2 - Math.round(200 * Math.sin(theta(players, order)));
}

function theta(n: number, order: number) {
  const frags = 360 / n;
  return (frags / 180) * order * Math.PI;
}

export default Simulation;
