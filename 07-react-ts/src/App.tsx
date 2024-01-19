import React, { useRef, useState } from 'react';

import { Player } from './component/Player/Player';

import styles from './App.module.scss';
import { commonTs } from './Common';

const PLAYERS: ({X: string, O:string}) = {
  X: 'Player_1',
  O: 'Player_2'
}

const App = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState<[]>([]);
  const activePlayer = commonTs.deriveActivePlayer(gameTurns);

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers(prePlayers => {
      return {
        ...prePlayers,
        [symbol]: newName
      }
    });
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
      </div>
    </main>
  );
}

export default App;
