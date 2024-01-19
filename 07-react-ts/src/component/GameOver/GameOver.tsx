import React from "react";

import styles from './GameOver.module.scss';

type Props = {
    winner: string | undefined;
    onRestart: () => void;
}

export const GameOver: React.FC<Props> = ({ winner, onRestart }) => {
    return (
        <div className={styles.gameOver}>
            <h2>Game Over!</h2>
            {winner && <p>{winner} win!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={onRestart}>Rematch !</button>
            </p>
        </div>
    );
};