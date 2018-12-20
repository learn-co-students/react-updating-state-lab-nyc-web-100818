// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     timesClicked: 0
  //   }
  // }

  state = {
    timesClicked: 0
  }

  updateClicker = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1  })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateClicker}>{this.state.timesClicked}</button>
      </div>
    )
  }
}


export default DigitalClicker;