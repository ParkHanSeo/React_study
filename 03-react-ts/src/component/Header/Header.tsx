import React from "react";

import styles from './Header.module.scss';
import logoImg from '../../assets/logo.png';

export const Header: React.FC<{}> = ({}) => {

    return (
        <>
            <header className={styles.header}>
                <img src={logoImg} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                Create your personal collection of places you would like to visit or
                you have visited.
                </p>        
            </header>        
        </>
    );
};