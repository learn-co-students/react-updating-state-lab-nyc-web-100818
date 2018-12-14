// Code DigitalClicker Component Here
import React, { Fragment } from 'react';

class YouTubeDebugger extends React.Component {

  constructor(props) {
    super(props)

    // Define initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
    this.setState({settings: {...this.state.settings, bitrate: 12}}, () => console.log("updated state is", this.state.settings.bitrate))
  }

  setRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' }
      }
    })
  }

  render() {
   return (
    <Fragment>
     <button className="bitrate" onClick={this.handleClick}>Bitrate: {this.state.settings.bitrate}</button>
     <button className="resolution" onClick={this.setRes}>Resolution: {this.state.settings.video.resolution}</button>
    </Fragment>
   )
 }

} // end YouTubeDebugger class

export default YouTubeDebugger;
