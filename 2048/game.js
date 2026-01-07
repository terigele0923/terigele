const boardSize = 4;
let board = [];

function initBoard() {
  board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
  addRandomTile();
  addRandomTile();
  updateBoard();
}

function addRandomTile() {
  const emptyCells = [];
  for (let r = 0; r < boardSize; r++) {
    for (let c = 0; c < boardSize; c++) {
      if (board[r][c] === 0) emptyCells.push({ r, c });
    }
  }
  if (emptyCells.length > 0) {
    const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[r][c] = Math.random() < 0.9 ? 2 : 4;
  }
}

function updateBoard() {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";
  board.forEach(row => {
    row.forEach(cell => {
      const tile = document.createElement("div");
      tile.className = `tile tile-${cell}`;
      tile.textContent = cell !== 0 ? cell : "";
      gameBoard.appendChild(tile);
    });
  });
}

function slide(row) {
  row = row.filter(num => num !== 0);
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  row = row.filter(num => num !== 0);
  while (row.length < boardSize) row.push(0);
  return row;
}

function moveLeft() {
  let moved = false;
  for (let r = 0; r < boardSize; r++) {
    const newRow = slide(board[r]);
    if (board[r].toString() !== newRow.toString()) moved = true;
    board[r] = newRow;
  }
  if (moved) {
    addRandomTile();
    updateBoard();
  }
}

function moveRight() {
  let moved = false;
  for (let r = 0; r < boardSize; r++) {
    let row = [...board[r]].reverse();
    row = slide(row).reverse();
    if (board[r].toString() !== row.toString()) moved = true;
    board[r] = row;
  }
  if (moved) {
    addRandomTile();
    updateBoard();
  }
}

function moveUp() {
  let moved = false;
  for (let c = 0; c < boardSize; c++) {
    let col = [];
    for (let r = 0; r < boardSize; r++) col.push(board[r][c]);
    const newCol = slide(col);
    for (let r = 0; r < boardSize; r++) {
      if (board[r][c] !== newCol[r]) moved = true;
      board[r][c] = newCol[r];
    }
  }
  if (moved) {
    addRandomTile();
    updateBoard();
  }
}

function moveDown() {
  let moved = false;
  for (let c = 0; c < boardSize; c++) {
    let col = [];
    for (let r = 0; r < boardSize; r++) col.push(board[r][c]);
    col.reverse();
    const newCol = slide(col).reverse();
    for (let r = 0; r < boardSize; r++) {
      if (board[r][c] !== newCol[r]) moved = true;
      board[r][c] = newCol[r];
    }
  }
  if (moved) {
    addRandomTile();
    updateBoard();
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") moveLeft();
  if (e.key === "ArrowRight") moveRight();
  if (e.key === "ArrowUp") moveUp();
  if (e.key === "ArrowDown") moveDown();
});

initBoard();
