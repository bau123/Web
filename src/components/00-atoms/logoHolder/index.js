import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const LogoSize = {
    SMALL : 'small',
    MEDIUM : 'medium',
    LARGE : 'large'
};

const LogoHolder = ({size, image, onClick}) => {
    let classStyle = classnames(
        styles[size]
    );
    return (
            <img src={image} onClick={onClick} className={classStyle} alt={""}/>
    )
};

LogoHolder.propTypes ={
    size : PropTypes.string,
    image : PropTypes.node
};

LogoHolder.defaultProps = {
    size : LogoSize.SMALL
};

export default LogoHolder;