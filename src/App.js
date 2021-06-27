import React from 'react';
import './App.css';
import axios from 'axios';


import MultiSwitch from './Components/MultiSwitch';
import Card from './Components/Card';


export default class App extends React.Component {
  state = {
      error: null,
      isLoaded: false,
      jsonItems: [1,2,3],
      sims: [2,3,4,5],
      data: ['1GB','6GB','15GB','40GB','60GB', '100GB'],
      selectedSIm: 2,
      selectedData: '1GB',
      monthlyCost:'700',
      wasMonthlyCost:'700',
      merchStripText: 'test',
      
  };
  

  componentDidMount() {
    axios.get('products.json')
    .then(Response => {
      let dataJson = Response.data;
      this.setState({jsonItems: dataJson});
    });
  }

  
  simHandler =(event, id)=> {
    console.log("simHandler",event.target.innerHTML);
    this.setState({ selectedSIm: event.target.innerHTML})
  }

  dataHandler =(event, id)=> {
    console.log("dataHandler", event.target.innerHTML);
    this.setState({ selectedData: event.target.innerHTML})
  }

  render() {

    let inc,incc = 0;
    let currData, currSimCount;
    let tmpMonthlyCost = this.state.monthlyCost;
    let tmpWasMonthlyCost = this.state.wasMonthlyCost;
    let tmpStripText = this.state.stripText;
    let wasCheaperPrice = false;
    

    for (inc in this.state.jsonItems) {
      currData = inc.substring(4);
      for (incc in this.state.jsonItems[inc]) {
        currSimCount = this.state.jsonItems[inc][incc]['sim_count'];
        if(currData === this.state.selectedData && currSimCount === this.state.selectedSIm ) {
           tmpMonthlyCost = this.state.jsonItems[inc][incc]['monthly_cost'];  
           tmpWasMonthlyCost = this.state.jsonItems[inc][incc]['was_monthly_cost'];
           tmpStripText = this.state.jsonItems[inc][incc]['merch_strip_text'];       
           if (parseInt(tmpMonthlyCost) < parseInt(tmpWasMonthlyCost)) {
              wasCheaperPrice = true;
           }
        }
      }      
    }
    
    tmpMonthlyCost = tmpMonthlyCost.toString().substring(0, 2);
    tmpWasMonthlyCost = tmpWasMonthlyCost.toString().substring(0, 2);
    return (
      <div className="App"> 
        <MultiSwitch 
        simsArr={this.state.sims} 
        dataArr={this.state.data} 
        simClicked={this.simHandler} 
        dataClicked={this.dataHandler}
        selectedSIm = {this.state.selectedSIm}
        selectedData = {this.state.selectedData}
        />
        <Card 
          selectedSIm = {this.state.selectedSIm}
          selectedData = {this.state.selectedData}
          choosedCost = {tmpMonthlyCost}
          choosedWasCost = {tmpWasMonthlyCost}
          stripText = {tmpStripText}
          wasCheaperFlag = {wasCheaperPrice}
        />
      </div>
    )
  }
}
