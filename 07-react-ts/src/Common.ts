export const commonTs = {
  deriveActivePlayer: (gameTurns: { player: 'X' | 'O' }[]) => {
    let currentPlayer: 'X' | 'O' = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
  
    return currentPlayer;
  }
};