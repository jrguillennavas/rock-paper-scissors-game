import "./PlayGame.scss";
const PlayGame = ({ Style__play, handleUserPlay, handleUser, status }) => {
  if (!status) {
    return (
      <section className={Style__play}>
        <div className="Box">
          <p>Do we play now!</p>
          <div>
            <label> Into your name:</label>
            <input type="text" name="user" id="user" onChange={handleUser} />
          </div>
          <button onClick={handleUserPlay}>Play</button>
        </div>
      </section>
    );
  } else {
    return false;
  }
};
export default PlayGame;
