import React from 'react';
import styles from './TodoItem.module.scss'

import { Todo } from '../domain/todo'

export const TodoList: React.FC<{ text: string }> = (props) => {
    return (
        <li className={styles.item}>{props.text}</li>
    );
}