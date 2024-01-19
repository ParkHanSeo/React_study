import React, { useRef, useState } from 'react';

import { Player } from './component/Player/Player';
import { GameBoard } from './component/GameBoard/GameBoard';
import { Log } from './component/Log/Log';

import styles from './App.module.scss';
import { commonTs, Turn } from './Common';

const PLAYERS: ({X: string, O:string}) = {
  X: 'Player_1',
  O: 'Player_2'
}

const App = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const activePlayer = commonTs.deriveActivePlayer(gameTurns);
  const gameBoard = commonTs.deriveGameBoard(gameTurns);

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers(prePlayers => {
      return {
        ...prePlayers, 
        [symbol]: newName
      }
    });
  }

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns: Turn[]) => {
      let currentPlayer = commonTs.deriveActivePlayer(prevTurns);
      const updatedTurns: Turn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ];
      
      return updatedTurns;
    })
  }

  return (
    <main>
      <div className={styles.gameContainer}>
        <ol className={styles.players}>
          <Player 
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}            
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />          
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          board={gameBoard}          
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
