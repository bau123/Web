import React from 'react';
import Label from '../../../../../00-atoms/label/';
import styles from './style.module.css';


const dummyText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
    "                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
    "                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
    "                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";


const Summary = ({children}) => (
    <div className={styles.summary}>
    <Label>
        {children}
    </Label>
    </div>
);

const Bottom = () => (
    <div className={styles.block}>
        <div>
            <Summary>
                {dummyText}
            </Summary>
        </div>
    </div>
);


export default Bottom;