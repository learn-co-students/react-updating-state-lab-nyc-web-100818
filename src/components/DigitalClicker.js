// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor(props) {
    super(props);
    // Define initial state:
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    // event.persist()
    // update state:
    this.setState({
      timesClicked: this.state.timesClicked += 1
    }, () => console.log("NUM CLICKS IS:", this.state.timesClicked))
  }



  // renders out a button with a label that shows the `timesClicked` value. This means that, at the start, your button should just say `0`.
  // 4. Whenever the button is clicked, update the state by incrementing the `timesClicked` by 1.
  render() {
   return (
     <button onClick={this.handleClick}>{this.state.timesClicked}</button>
   )
 }

} // end DigitalClicker class


export default DigitalClicker;
