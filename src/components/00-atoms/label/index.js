import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames'
import propTypes from 'prop-types'


const Label = ({children, className}) => {
    const classStyling = classnames(
        className,
        styles.label
    );
    return(
    <label className={classStyling}>{children}</label>);
};



Label.defaultProps = {
    className : '',
};

Label.propTypes = {
    children : propTypes.node,
    className : propTypes.string
};
export default Label;