import { useState } from "react";
import PlayGame from "./components/PlayGame";
import HandlePoints from "./scripts/HandlePoints";
import Container from "./components/Content";
import PointBar from "./components/PointBar";
import Image from "./components/Image";
import WonView from "./views/WonView";
import SelectView from "./views/SelectView";
import CombatView from "./views/CombatView";
import "./App.scss";

const options = ["rock", "paper", "scissors"];
const handlePoints = new HandlePoints(0, 0);
function App() {
  const [isSelect, setIsSelect] = useState(false);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [cpuPoints, setCpuPoints] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState("");
  const [selectCpu, setSelectCpu] = useState("");
  const [won, setWon] = useState(false);
  const [round, setRound] = useState(0);
  const [userName, setUserName] = useState("");
  const [play, setPlay] = useState(false);

  const handleUserPlay = () => {
    if (userName.length > 3) {
      setPlay(true);
    }
  };
  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handleSelectPlayer = async (eve) => {
    const numRandom = Math.round(Math.random() * 2);
    setIsSelect(true);
    setSelectPlayer(eve.target.id);
    setSelectCpu(options[numRandom]);
    const { pointsPlayer, pointsCpu } = handlePoints.point(
      eve.target.id,
      options[numRandom]
    );
    let { select, isSelectPlayer, winner } = await handlePoints.resetView();
    setRound(round + 1);
    setPlayerPoints(pointsPlayer);
    setCpuPoints(pointsCpu);
    setWon(winner);
    setIsSelect(select);
    setSelectPlayer(isSelectPlayer);
  };

  const handlePlayAgain = () => {
    const { pointsCpu, pointsPlayer, winner, isSelects } = handlePoints.reset();
    setPlay(false)
    setPlayerPoints(pointsPlayer);
    setCpuPoints(pointsCpu);
    setIsSelect(isSelects);
    setWon(winner);
    setSelectPlayer("");
    setSelectCpu("");
    setRound(0);
  };

  return (
    <main className="App">
      <PlayGame
        Style__play="Play"
        handleUserPlay={handleUserPlay}
        handleUser={handleUser}
        status={play}
      />
      <div className="Container">
      <PointBar points={round} name="Round" className="Round" />
        <div className="PointBar">
          <PointBar points={playerPoints} name={userName} className="Player" />
          <PointBar points={cpuPoints} name="CPU" className="Cpu" />
        </div>
        <Container className="Content">
          <WonView
            won={won}
            player={userName}
            playerPoints={playerPoints}
            cpuPoints={cpuPoints}
            handlePlayAgain={handlePlayAgain}
          />
          <SelectView isSelect={isSelect}>
            <Image
              className="fas fa-hand-rock Hand"
              id="rock"
              click={handleSelectPlayer}
            />
            <Image
              className="fas fa-hand-paper Hand"
              id="paper"
              click={handleSelectPlayer}
            />
            <Image
              className="fas fa-hand-scissors Hand"
              id="scissors"
              click={handleSelectPlayer}
            />
          </SelectView>
          <CombatView selectPlayer={selectPlayer}>
            <Image className={`fas fa-hand-${selectPlayer} Hand`} />
            <Image className={`fas fa-hand-${selectCpu} Hand`} />
          </CombatView>
        </Container>
      </div>
    </main>
  );
}

export default App;
