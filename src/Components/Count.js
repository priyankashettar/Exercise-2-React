import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
 
const OfferExpired = () => <span>Offer Expired!!!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
    return <OfferExpired />;
  } else {
    return <span>{days}d:{hours}h:{minutes}m:{seconds}s</span>;
  }
};
 
const Count = () => (
  <div>
    <Countdown
    date={Date.now() + 100000000}
    renderer={renderer}
  />
  </div>
)
 
ReactDOM.render(<Count />, document.getElementById('root'))

export default Count;