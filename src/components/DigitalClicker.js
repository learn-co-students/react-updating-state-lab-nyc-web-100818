// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  increment = event => {
    let countUp = this.state.timesClicked + 1
    this.setState({timesClicked: countUp})
  }

  render() {
    return <button onClick={this.increment}>{this.state.timesClicked}</button>
  }
}
