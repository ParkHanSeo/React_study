import React from 'react';

import { Todo } from '../domain/todo'
import { TodoList } from './TodoList'

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((data) => (
                <TodoList key={data.id} text={data.text}/>
            ))}
        </ul>
    );
}