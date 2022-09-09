//fill array with Black and White
function ChessDesk() {
  let Row = [];
  let Column = [];
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      if ((i + j) % 2 == 0) {
        Row[i] = "Black";
      } else {
        Row[i] = "White";
      }
    }
    Column[j] = Row;
    Row = [];
  }
  console.log(Column);
}
ChessDesk();

// draw chess board
function showChess() {
  let chess = document.querySelector(".chessboard");
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
      if ((i + j) % 2 == 0) {
        chess.innerHTML += '<div class="chessbox"></div>';
      } else {
        chess.innerHTML += '<div class="chessbox black"></div>';
      }
    }
  }
}
showChess();
