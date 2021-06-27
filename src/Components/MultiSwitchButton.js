import React from 'react';
import './MultiSwitchButton.css';

export default class MultiSwitchButton extends React.Component {
    render() {
        let cssClass = "SimBox"
        if (this.props.simProp === this.props.selecteditem) {
            cssClass = "SimBox active";
        }
        return <span onClick={this.props.click} className={cssClass}>{this.props.simProp}</span>        
    }
}
