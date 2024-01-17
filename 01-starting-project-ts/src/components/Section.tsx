import React, { ReactNode } from "react";
import styles from './Examples/Examples.module.scss';

type Props = {
    title: string;
    children: ReactNode;
}

export const Section: React.FC<Props> = ({ title, children, ...props }) => {
    return (
        <section className={styles.examples} {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}