import React from 'react';

import { Todo } from '../domain/todo'
import { TodoList } from './TodoList'
import styles from './Todos.module.scss'

type Props = {
    items: Todo[];
    onDeleteTodo: (id: string) => void;
}

export const Todos: React.FC<Props> = ({
    items,
    onDeleteTodo
}) => {
    return (
        <ul className={styles.todos}>
            {items.map((data) => (
                <TodoList 
                    key={data.id} 
                    text={data.text} 
                    onDeleteTodo={onDeleteTodo.bind(null, data.id)}
                />
            ))}
        </ul>
    );
}