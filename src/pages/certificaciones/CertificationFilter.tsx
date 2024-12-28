import React from 'react';
import styles from './certificaciones.module.css';

interface CertificationFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export const CertificationFilter: React.FC<CertificationFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
}) => {
    return (
        <div className={styles.buttonContainer}>
            <button
                onClick={() => onCategoryChange('all')}
                className={`${styles.button} ${selectedCategory === 'all' ? styles.buttonActive : styles.buttonDefault}`}
            >
                Todas
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`${styles.button} ${selectedCategory === category ? styles.buttonActive : styles.buttonDefault}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};