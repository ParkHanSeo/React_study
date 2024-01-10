import React from 'react';
import styles from './CoreConcept.module.scss';
import { CoreConcept } from './CoreConcept';
import { CORE_CONCEPTS } from '../../data';

export const CoreConcepts: React.FC<{}> = () => {
    return (
        <section className={styles.coreConcepts}>
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((data) => 
                    <CoreConcept key={data.title} {...data}/>
                )}
            </ul>
        </section>
    );
}