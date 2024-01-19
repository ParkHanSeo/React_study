import { WINNING_COMBINATIONS } from './winning-combinations';

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
  },
  deriveWinner: (gameBoard: Board, players: Players) => {
    let winner;
  
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol === 'X' ? players.X : players.O;
      }
    }
  
    return winner;
  }
};

export type Players = {
  X: string;
  O: string;
}

export type Turn = {
  square: {
    row: number;
    col: number;
  };
  player: 'X' | 'O';
};

export type Board = (null | string)[][];

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];