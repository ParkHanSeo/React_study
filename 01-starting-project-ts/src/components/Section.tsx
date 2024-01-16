import React, { ReactNode } from "react";

type Props = {
    title: string;
    id: string;
    children: ReactNode;
}

export const Section: React.FC<Props> = ({ title, children, ...props }) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}