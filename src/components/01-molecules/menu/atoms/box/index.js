import React from 'react';
import classnames from 'classnames';
import styles from './style.module.css';
import propTypes from 'prop-types';
import Label from '../../../../00-atoms/label/'


const TextBox = ({...props}) => {

    const {onClick, children, className } = props;

    const classStyling = classnames(
        styles.textbox,
        className
    );
    return (
        <div onClick={onClick} className={classStyling}>
            <Label>
            {children}
            </Label>
        </div>
    );
};


TextBox.propTypes = {
    children : propTypes.node,

};


export default TextBox;