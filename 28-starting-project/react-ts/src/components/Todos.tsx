import React from 'react';

import { Todo } from '../domain/todo'
import { TodoList } from './TodoList'
import styles from './Todos.module.scss'

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.items.map((data) => (
                <TodoList key={data.id} text={data.text}/>
            ))}
        </ul>
    );
}