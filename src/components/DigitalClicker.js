import React, {Component, Fragment} from 'react';


export default class DigitalClicker extends Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }



  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return (
      <Fragment>
        <label>Approximately {this.state.timesClicked} clicks right now</label>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </Fragment>
    )
  }
}
