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

  const [currentPlayer, setCurrentPlayer] = React.useState(0);
  const [currentRound, setCurrentRound] = React.useState(1);
  const [results, setResults] = React.useState([]);

  const playerAmount = _.range(players);
  const playerObjects = playerAmount.map(p => ({
    left: distanceFromLeft(players, p),
    top: distanceFromTop(players, p),
    id: p
  }));

  return (
    <>
      <p>{`Current round: ${currentRound}`}</p>
      <p>{`Current round: ${currentPlayer}`}</p>
      <Leaderboard results={results} />
      <Wrapper>
        {playerObjects.map(player => (
          <PlayerButton
            disabled={player.id !== currentPlayer}
            key={player.id}
            size="large"
            top={player.top}
            left={player.left}
          >
            {player.id}
          </PlayerButton>
        ))}
      </Wrapper>
    </>
  );
};

interface Results {
  id: number;
  points: number;
}

interface LeaderboardProps {
  results: Results[];
}

const Leaderboard: React.FC<LeaderboardProps> = props => {
  return <div>moro</div>;
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
