import React from 'react';

import { Todo } from '../domain/todo'

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((data) => (
                <li key={data.id}>{data.text}</li>
            ))}
        </ul>
    );
}