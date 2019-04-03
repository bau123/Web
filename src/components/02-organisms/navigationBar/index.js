import React from 'react';
import Button from './atom/button'
import styles from './style.module.css';
import Logo from '../../../assets/logo.svg';


const NavigationBar = ({children}) => {

    return (
        <div className={styles.navigationBar}>
            <div className={styles.leftSection}>
                <img src={Logo} height={50} width={50}  alt={""}/>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.menus}>
                {children}
                </div>
            </div>
        </div>
    )
};


const Option = ({children, onClick}) => (
    <div className={styles.menu}>
        <Button onClick={onClick}>
            {children}
        </Button>
    </div>
);

NavigationBar.Menu = Option;

export default NavigationBar;