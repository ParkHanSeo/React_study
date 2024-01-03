import React, { useRef } from "react";
import styles from './TodoItem.module.scss'

import { Todo } from '../domain/todo'

export const TodoList: React.FC<{ text: string, onDeleteTodo: (event: React.MouseEvent) => void }> = (props) => {
    
    return (
        <li className={styles.item} onClick={props.onDeleteTodo}>{props.text}</li>
    );
}