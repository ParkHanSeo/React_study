import React from 'react';

import { Todo } from '../domain/todo'

export const TodoList: React.FC<{ text: string }> = (props) => {
    return (
        <li>{props.text}</li>
    );
}