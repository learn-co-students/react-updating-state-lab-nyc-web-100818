// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{



  state = {
    timesClicked: 0
  }

  incrementValue = () => {
    console.log(this);
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.incrementValue}>{this.state.timesClicked}</button>
      </div>
    )
  }


}

export default DigitalClicker;
