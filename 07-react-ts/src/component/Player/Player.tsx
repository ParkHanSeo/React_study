import React, { useState, ChangeEvent } from "react";

import styles from './Player.module.scss';

type Props = {
    initialName: string;
    symbol: string;
    isActive: boolean;
    onChangeName: (symbol: string, newName: string) =>  void;
}

export const Player: React.FC<Props> = ({ initialName, symbol, isActive, onChangeName }) => {

    const [ playerName, setPlayerName ] = useState<string>(initialName);
    const [ isEditing, setIsEditing ] = useState<boolean>(false);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className={styles.playerName}>{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span>
                {editablePlayerName}
                <span>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};