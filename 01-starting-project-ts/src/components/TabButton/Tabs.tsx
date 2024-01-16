import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    buttons: any;
}

export const Tabs : React.FC<Props> = ({ children, buttons }) => {

    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}