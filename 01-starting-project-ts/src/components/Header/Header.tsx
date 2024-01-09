import React from 'react';
import styles from './Header.module.scss';
import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptions: string[] = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
}

export const Header: React.FC<{}> = ({}) => {

    const description = reactDescriptions[genRandomInt(reactDescriptions.length-1)];

    return (
        <header className={styles.pheader}>
            <img src={reactImg} alt="" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
};