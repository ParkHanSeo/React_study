import React, { useRef } from "react";
import styles from './TodoItem.module.scss'

import { Todo } from '../domain/todo'

type Props = {
    text: string, 
    onDeleteTodo: () => void
}

export const TodoList: React.FC<Props> = ({
    text,
    onDeleteTodo
}) => {
    return (
        <li className={styles.item} onClick={onDeleteTodo}>{text}</li>
    );
}