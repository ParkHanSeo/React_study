import React, { useState } from 'react';
import styles from './UseState.module.scss';

export const UseState: React.FC<{}> = () => {

    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState('hello');
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (e:any) => {
        setText(e.target.value);
    }

    return (
        <div>
            <ul className={styles.useStateUl}>
                <li>
                    <h3>useState_1</h3>
                    <button onClick={handleClick}>
                        카운트를 증가 {count}
                    </button>
                </li>
                <li>
                    <h3>useState_1</h3>
                    <button onClick={handleClick}>
                        2번째 카운트를 증가 {count}
                    </button>
                </li>
                <li>
                    <h3>useState_2</h3>
                    <input value={text} onChange={handleChange} />
                    <p>You typed: {text}</p>
                    <button onClick={() => setText('hello')}>
                        Reset
                    </button>
                </li>
                <li>
                    <div className={styles.formDiv}>
                        <label>
                            First name:
                            <input
                            value={form.firstName}
                            onChange={e => {
                                setForm({
                                ...form,
                                firstName: e.target.value
                                });
                            }}
                            />
                        </label>
                        <label>
                            Last name:
                            <input
                            value={form.lastName}
                            onChange={e => {
                                setForm({
                                ...form,
                                lastName: e.target.value
                                });
                            }}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                            value={form.email}
                            onChange={e => {
                                setForm({
                                ...form,
                                email: e.target.value
                                });
                            }}
                            />
                        </label>
                        <div className={styles.pDiv}>
                            <p>
                                {form.firstName}{' '}
                                {form.lastName}{' '}
                            </p>
                            <p>
                                ({form.email})
                            </p>
                        </div> 
                    </div>
                </li>
            </ul>
        </div>
    )
}