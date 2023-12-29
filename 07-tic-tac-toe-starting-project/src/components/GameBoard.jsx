const initialGameBoard = Array(3).fill([null, null, null]);

export const GameBoard = () => {
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIdx) => <li key={rowIdx}>
                <ol>
                    {row.map((playerSymbol, colIdx) => (
                        <li key={colIdx}>
                            <button>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    );
}