import React from 'react';
import styles from './style.css';
import classnames from 'classnames/bind';
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
    const {onClick, children, shape, size, className } = props;
    let cx = classnames.bind(styles);
    const classProps =  cx(
            'button',
            size,
            shape,
            className
    );
    return (
        <button onClick={onClick} className={classProps}>
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

}

export default Button;

