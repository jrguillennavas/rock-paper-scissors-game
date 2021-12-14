import './WonView.scss'
const WonView = ({ won, playerPoints, cpuPoints, handlePlayAgain, player }) => {
  if (!won) {
    return false;
  } else {
    return (
      <div className="Won">
        <p className="Won__message">
          {playerPoints === 3
            ? `Winner ${player}: ${playerPoints} to ${cpuPoints}`
            : `Winner CPU: ${cpuPoints} to ${playerPoints}`}
        </p>
        <button className="Won__button" onClick={handlePlayAgain}>play again?</button>
      </div>
    );
  }
};
export default WonView;
