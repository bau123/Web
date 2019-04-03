import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';


export const ButtonSize = {
    SMALL : 'small',
    MEDIUM : 'medium',
    LARGE : 'large'
};

export const ButtonShape = {
    ROUND : 'round',
    DEFAULT : 'default'
};



const Button = ({...props}) => {
    console.log(styles);
    const {onClick, children, shape, size, className } = props;
    const classStyling =  classnames(
            styles.button,
            styles[shape],
            styles[size],
            className
    );
    return (
        <button onClick={onClick} className={classStyling}>
            {children}
        </button>)
};

Button.defaultProps = {
    size : ButtonSize.SMALL,
    shape : ButtonShape.DEFAULT,
    className : ''

};

Button.propTypes = {
    size : PropTypes.string,
    shape : PropTypes.string,
    className : PropTypes.string,
    children : PropTypes.node,
};

export default Button;

