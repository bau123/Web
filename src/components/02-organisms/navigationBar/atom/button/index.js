import React from 'react';
import styles from './style.module.css'
import Label from '../../../../00-atoms/label/'
const Button = ({children, onClick}) => (
    <button className={styles.button} onClick={onClick}>
        <Label>
        {children}
        </Label>
    </button>
);

export default Button;