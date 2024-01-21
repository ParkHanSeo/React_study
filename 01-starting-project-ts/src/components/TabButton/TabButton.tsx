import React, { ReactNode } from "react";
import styles from '../Examples/Examples.module.scss';

type Props = {
    children: ReactNode
    isSelected: boolean;
    onClick: () => void;
}


export const TabButton: React.FC<Props> = ({ children, isSelected, ...props }) => {
    
    return (
        <li>
            <button className={isSelected ? styles.active : ''} {...props}>
                {children}
            </button>
        </li>
    );
};