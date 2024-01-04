import React, { useRef } from "react";
import styles from './NewTodo.module.scss'

type Props = {
    onAddTodo: (text:string) => void;
}

export const NewTodo: React.FC<Props> = ({
    onAddTodo
}) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText?.trim().length === 0) {
            return;
        }

        onAddTodo(enteredText);
    };


    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
};