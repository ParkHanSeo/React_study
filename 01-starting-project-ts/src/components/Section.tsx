import React from "react";



export const Section: React.FC<{}> = ({ title, children, ...props }) => {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}