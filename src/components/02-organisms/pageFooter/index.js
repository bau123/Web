import React, {Component} from 'react';
import styles from './style.module.css';
import LogoHolder, {LogoSize} from '../../00-atoms/logoHolder/'
import LogoFB from '../../../assets/fblogo.png';
import LogoTwitter from '../../../assets/twitterlogo.png';
import {Link} from 'react-router-dom'

class Footer extends Component {


    handleClickFB = () => (
            <Link to={"www.google.co.uk"}/>
    );


    render(){
    return (
        <div className={styles.footer}>
            <div className={styles.displayText}>
                {this.props.children}
            </div>
            <div className={styles.ImageHolder}>
                <LogoHolder size={LogoSize.SMALL} image={LogoFB} onClick={this.handleClickFB()}/>
            </div>
            <div className={styles.ImageHolder}>
                <LogoHolder size={LogoSize.SMALL} image={LogoTwitter} onClick={this.handleClickFB()}/>
            </div>
        </div>
    )
}
};


export default Footer;
