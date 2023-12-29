import { useState } from 'react';

// const initialGameBoard = Array(3).fill([null, null, null]);
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = "X";
            console.log(updatedBoard);
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}