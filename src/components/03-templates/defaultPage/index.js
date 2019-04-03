import React from 'react';
import styles from './style.module.css'
import NavigationBar from "../../02-organisms/navigationBar"
import PageFooterWithLogo from "../..//02-organisms/pageFooter/";
import Label from "../../00-atoms/label";
import {Link} from 'react-router-dom';

const Header = ({children}) => {
    return (
    <header className={styles.header}>
        {children}
    </header>
    )
};

const Body = ({children}) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
};

const Footer = ({children}) => {
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    )
};


const DefaultPage = ({children}) => {
    return (
        <div>
            <Header>
                <NavigationBar>
                    <NavigationBar.Menu>
                        <Link to={'/contact'}>Contact Us</Link>
                    </NavigationBar.Menu>
                </NavigationBar>
            </Header>

            <Body>
            {children}
            </Body>
            <Footer>
                <div className={styles.footerHold}>
                <PageFooterWithLogo>
                    <Label> Follow us on </Label>
                </PageFooterWithLogo>
                </div>
            </Footer>

        </div>
    )
};



export default DefaultPage;