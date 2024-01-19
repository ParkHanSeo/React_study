export const commonTs = {
  deriveActivePlayer: (gameTurns: { player: 'X' | 'O' }[]) => {
    let currentPlayer: 'X' | 'O' = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
  
    return currentPlayer;
  },
  deriveGameBoard: (gameTurns: Turn[]) => {
    let gameBoard: Board = [...INITIAL_GAME_BOARD.map(arr => [...arr])];
  
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
    }
  
    return gameBoard;
  }
};

export type Turn = {
  square: {
    row: number;
    col: number;
  };
  player: 'X' | 'O';
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export type Board = (null | string)[][];