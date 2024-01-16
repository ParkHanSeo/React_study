import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
    isSelected: boolean;
    onClick: () => void;
}


export const TabButton: React.FC<Props> = ({ children, isSelected, ...props }) => {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>
                {children}
            </button>
        </li>
    );
};