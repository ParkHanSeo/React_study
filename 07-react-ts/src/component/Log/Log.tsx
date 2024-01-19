import React from "react";

import styles from './Log.module.scss';
import { Turn } from '../../Common';

type Props = {
    turns: Turn[];
}

export const Log: React.FC<Props> = ({ turns }) => {

    return (
        <ol className={styles.log}>
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    );
}