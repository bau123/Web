import React from 'react';
import styles from './style.module.css';
import classnames from 'classnames'
import propTypes from 'prop-types'



export const TitleSize = {
    SMALL : 'title1',
    MEDIUM : 'title2',
    LARGE : 'title3'
};

const Title = ({children, className, titleSize}) => {
    const classStyling = classnames(
        className,
        styles[titleSize]
    );
    return(
        <label className={classStyling}>{children}</label>);
};



Title.defaultProps = {
    className : '',
};

Title.propTypes = {
    children : propTypes.node,
    className : propTypes.string,
    titleSize : propTypes.string

};
export default Title