const GameBoard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  return { board };
})();

function updateBoard() {
  console.log(" ");
  GameBoard.board.forEach((arr) => {
    console.log(arr.toString().replace(/,/g, "|"));
  });
}

updateBoard();
