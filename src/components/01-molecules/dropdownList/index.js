import React, {Component} from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextBox from '../../00-atoms/dropdown-textbox/';
import styles from './style.module.css';
import Label from '../../00-atoms/label/'


class DropdownList extends Component {


    constructor(){
        super();
        this.state = {
            isOpen : false
        }
    }


    render(){
        const list = this.props.list;
        let options = list.map((item) => {
            return (
                <div className={styles.box}>
                    <TextBox>{item}</TextBox>
                </div>);
        });

        return(
            <div>
                <div>
                <Label>{this.props.children}</Label>
                </div>
                {this.state.isOpen ?
                    <div className={styles.menu}>
                        {options}
                    </div> : null
                }
            </div>
        )
    }

}


DropdownList.propTypes = {
    children : PropTypes.node,
    list : PropTypes.array,
    onClick : PropTypes.func
};

DropdownList.defaultProps = {

};


export default DropdownList;