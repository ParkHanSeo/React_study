import React, { useRef, useState } from 'react';

import styles from './App.module.scss';

function App() {

  return (
    <main>
      <div className={styles.gameContainer}>
        <ol className={styles.players}>

        </ol>
      </div>
    </main>
  );
}

export default App;
