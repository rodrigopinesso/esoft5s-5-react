import React from 'react';
import styles from './card-section.module.css';


const CardSection = ({ titulo, children }) => {
    return (
        <section>
            <h2>{titulo}</h2>
            {children}
        </section>
    );
};

export default CardSection;