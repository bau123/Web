import React from 'react';
import classnames from 'classnames';
import Label from '../../00-atoms/label';
import PropTypes from 'prop-types';
import styles from './style.module.css'

const TextField = ({children, height, width}) => (
    <div className={styles.textField}>
        <Label>{children}</Label>
        <textarea rows={height} cols={width} className={styles.textArea} />
        <div>
        </div>
    </div>
);


TextField.propTypes = {
    children : PropTypes.string,
    width : PropTypes.string,
    height : PropTypes.string
};

TextField.defaultProps = {
    height : '1',
    width : '30'
};

export default TextField;