import React from "react";

import { TPLACES } from '../../data';
import styles from './Places.module.scss';

type Props = {
    title: string;
    places: TPLACES[];
    fallbackText?: string;
    onSelectPlace: (id: string) => void;
}

export const Places: React.FC< Props > = ({ title, places, fallbackText, onSelectPlace }) => {
    return (
        <section className={styles.placesCategory}>
            <h2>{title}</h2>
            {places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
            {places.length > 0 && (
                <ul className={styles.places}>
                {places.map((place) => (
                    <li key={place.id} className={styles.placeItem}>
                    <button onClick={() => onSelectPlace(place.id)}>
                        <img src={place.image.src} alt={place.image.alt} />
                        <h3>{place.title}</h3>
                    </button>
                    </li>
                ))}
                </ul>
            )}
        </section>
    )
}