import React from 'react';
import './MultiSwitch.css';
import MultiSwitchButton from './MultiSwitchButton';

export default class MultiSwitch extends React.Component {

    render() {
        console.log(this.props.simsArr);
        return (
        <div className="MultiSwitch">
            <div className="SimSwitch">
                <h2>How many SIMs do you need?</h2>
                <p>Each extra SIM has a 20% discount</p>
                <div>
                {
                    this.props.simsArr.map((sim, index) => {
                        return <MultiSwitchButton 
                            click={(event) => this.props.simClicked(event, index)}
                            key={index} 
                            selecteditem = {this.props.selectedSIm}
                            simProp={sim} />
                    })
                }
                </div>         
            </div>
            <div className = "DataSwitch">
                <h2>How much data would you like per SIM</h2>
                {
                    this.props.dataArr.map((sim, index) => {
                        return <MultiSwitchButton 
                            click={(event) => this.props.dataClicked(event, index)}
                            key={index} 
                            selecteditem = {this.props.selectedData}
                            simProp={sim} />
                    })
                }
            </div>
        </div>
        )
    }
}


