import React, { useState } from 'react';

export const UseState: React.FC<{}> = () => {

    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState('hello');

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (e:any) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>
                    카운트를 증가 {count}
                </button>
            </div>
            <div>
                <input value={text} onChange={handleChange} />
                <p>You typed: {text}</p>
                <button onClick={() => setText('hello')}>
                    Reset
                </button>
            </div>
        </div>
    )
}