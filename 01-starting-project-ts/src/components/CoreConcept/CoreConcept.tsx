import React from 'react';

type Props = {
    image: string;
    title: string;
    description: string;
}

export const CoreConcept: React.FC<Props> = ({
    image,
    title,
    description,
}) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};