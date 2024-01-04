import React, { useState, useRef } from "react";
import styles from './TodoItem.module.scss'

import { Todo } from '../domain/todo'

type Props = {
    idx: number;
    text: string,
    onDeleteTodo: () => void
    onUpdateSubmitTodo: (idx: number, text:string) => void;
}

export const TodoList: React.FC<Props> = ({
    idx,
    text,
    onDeleteTodo,
    onUpdateSubmitTodo
}) => {

    const [input, setInput] = useState(false);

    const todoTextUpdateRef = useRef<HTMLInputElement>(null);
    const todoHiddenKey = useRef<HTMLInputElement>(null);

    const onUpdateTodo = (flag:string) => {
        if(flag === 'update') {
            setInput(true);
        } else if(flag === 'cancel') {
            setInput(false);
        }
    }

    const submitHandler = (event: React.FormEvent) => {
        
        event.preventDefault();
        
        const enteredText = todoTextUpdateRef.current!.value;
        const enteredKey:number = parseInt(todoHiddenKey.current!.value);

        if(enteredText.trim().length === 0) {
            alert("text 값을 입력해주세요")
            return;
        }
        
        onUpdateSubmitTodo(enteredKey, enteredText);
        setInput(false);
    }

    return (
        // <li className={styles.item} onClick={onDeleteTodo}>{text}</li>
        <li className={styles.item}>
            {!input ? (
                <>
                    <div>{idx} {text}</div>
                    <div className={styles.itemUD}>
                        <button onClick={() => onUpdateTodo('update')}>수정</button>
                        <button onClick={onDeleteTodo}>삭제</button>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <form onSubmit={submitHandler}>
                            <input type="text" placeholder={text} ref={todoTextUpdateRef} />
                            <input type="hidden" value={idx} ref={todoHiddenKey} />
                            <button>완료</button>
                        </form>
                    </div>
                    <div className={styles.itemUD}>
                        <button onClick={() => onUpdateTodo('cancel')}>취소</button>
                    </div>
                </>
            )}
        </li>
    );
}