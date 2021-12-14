class HandlePoints {
  constructor(countPlayer, countCpu) {
    this.countPlayer = countPlayer;
    this.countCpu = countCpu;
    this.winner = false;
  }
  reset = () => {
    this.countPlayer = 0;
    this.countCpu = 0;
    this.winner = false;
    return {
      pointsPlayer: this.countPlayer,
      pointsCpu: this.countCpu,
      winner: this.winner,
      isSelects: false
    };
  };
  resetView = async () => {
    const results = await new Promise((result, reject) => {
      setTimeout(
        () =>
          this.countPlayer === 3 || this.countCpu === 3
            ? result({
                select: true,
                isSelectPlayer: "",
                winner: true
              })
              : result({
                select: false,
                isSelectPlayer: "",
                winner: this.winner
              }),
        1000
      );
    });
    return results;
  };
  point = (player, cpu) => {
    if (player === cpu) {
    } else if (player === "rock" && cpu === "scissors") {
      this.countPlayer++;
    } else if (player === "paper" && cpu === "rock") {
      this.countPlayer++;
    } else if (player === "scissors" && cpu === "paper") {
      this.countPlayer++;
    } else {
      this.countCpu += 1;
    }


    return {
      pointsPlayer: this.countPlayer,
      pointsCpu: this.countCpu,
    };
  };
}

export default HandlePoints;