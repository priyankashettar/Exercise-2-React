import React from 'react';
import Countdown from './Count';


import "./Card.css"

export default class Card extends React.Component {

    render() {
        let savingAmt =  parseInt(this.props.choosedWasCost) - parseInt(this.props.choosedCost) ;  
        let cssClasses = 'Card';
        if (parseInt(this.props.selectedData) >= 40) {
            cssClasses = 'Card Card-extra-plus';
        } else if (parseInt(this.props.selectedData) >= 6) {
            cssClasses = 'Card Card-extra';
        }
        return (
        <div className={cssClasses}>
            <div className="Card-40gb-details">
                <p>price has never been lower</p>
                <p>
                    <Countdown></Countdown>
                </p>
            </div>
            <div className="Card-40gb">
                <div className="row">
                    <div className="sim-bg">
                        <span>{this.props.selectedSIm}</span>
                        <span>SIMS</span>
                    </div>
                    <div className="data-speed">
                        <span>{this.props.selectedData}</span>
                        <span>data allowance each</span>
                    </div>
                </div>
                <div className="row plan-benefits">
                    <ul>
                        <li>4G and 5G enabled</li>
                        <li>Unlimited minutes and texts</li>
                        <li>Access to 5 million BT wifi hotspots</li>
                        <li>30-day money-back guarantee</li>
                    </ul>
                </div>
                <div className="row price-6gb">
                    <p>{this.props.stripText}</p>
                </div>
                <div className="row plan-details">
                    {
                        (this.props.wasCheaperFlag) ? 
                        <p className="price-txt"><span>Was </span><span className="line-through">£{this.props.choosedWasCost}</span>  £{this.props.choosedCost} <span>a month</span></p>
                        :
                        <p className="price-txt">£ {this.props.choosedCost} <span>a month</span></p>                        
                    }
                    {
                     ( savingAmt > 0 ) ?  <p className="price-desc">£{savingAmt} a month family sim saving</p> : null 
                    }
                    <p className="price-subtxt">12 month contract</p>
                    <button>Choose plan</button>
                </div>
            </div>
        </div>
        )
    }
}
 