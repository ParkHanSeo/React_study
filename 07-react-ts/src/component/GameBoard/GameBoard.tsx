import React from "react";

import { Board } from '../../Common';
import styles from './GameBoard.module.scss';

type Props = {
    onSelectSquare: (rowIndex: number, colIndex: number) => void;
    board: Board;
}

export const GameBoard: React.FC<Props> = ({ onSelectSquare, board }) => {
    return (
        <ol className={styles.gameBoard}>
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
};
    