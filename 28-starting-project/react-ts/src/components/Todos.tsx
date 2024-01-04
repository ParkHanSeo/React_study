import React from 'react';

import { Todo } from '../domain/todo'
import { TodoList } from './TodoList'
import styles from './Todos.module.scss'

type Props = {
    items: Todo[];
    onDeleteTodo: (id: string) => void;
    onUpdateTodo: (idx:number, text: string) => void;
}

export const Todos: React.FC<Props> = ({
    items,
    onDeleteTodo,
    onUpdateTodo
}) => {
    console.log(items);
    return (
        <ul className={styles.todos}>
            {items.map((data) => (
                <TodoList
                    key={data.idx}
                    idx={data.idx} 
                    text={data.text} 
                    onDeleteTodo={onDeleteTodo.bind(null, data.id)}
                    onUpdateSubmitTodo={onUpdateTodo}
                />
            ))}
        </ul>
    );
}