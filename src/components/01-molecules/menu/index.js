import React, {Component} from 'react'
import PropTypes from 'prop-types';
import TextBox from './atoms/box/';
import styles from './style.module.css';
import Label from '../../00-atoms/label/'

class Menu extends Component {


    constructor(){
        super();
        this.state = {
            isOpen : false,
            isItemHover : false
        }
    }


    handleMouseEnter = () => {
        this.setState({
                isOpen: true
            }
        );
    };

    handleMouseLeave = () => {
        this.setState({
            isOpen : false
        })
    };

    handleItemEnter = () => {
        this.setState({
            isItemHover : !this.state.isItemHover
        })
    };
    handleItemLeave = () => {
        this.setState({
            isItemHover : !this.state.isItemHover
        })
    };


    render(){

        const list = this.props.list;
        const header = this.props.children;
        let options = list.map((item) => {
            return (
                <div className={styles.box} onMouseLeave={this.handleItemLeave} onMouseEnter={this.handleItemEnter}>
                    <TextBox>{item}</TextBox>
                </div>);
        });

        return(
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={styles.menu}>
                <div>
                    {header}
                </div>
                {this.state.isOpen ?
                    <div className={styles.options}>
                        {options}
                    </div> : null
                }
            </div>
        )
    }

}


Menu.propTypes = {
    children : PropTypes.node,
    list : PropTypes.array,
    onClick : PropTypes.func
};

Menu.defaultProps = {

};

Menu.Header = Label;

export default Menu;