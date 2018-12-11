// Code YouTubeDebugger Component Here
import React, {
  Component
} from 'react';

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
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

  handleResolutionState = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  handleBitrateState = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {
    return ( <
      React.Fragment >
      <
      button className = "bitrate"
      onClick = {
        this.handleBitrateState
      } >
      {
        this.state.settings.bitrate
      } < /button> <
      button className = "resolution"
      onClick = {
        this.handleResolutionState
      } >
      {
        this.state.settings.video.resolution
      } < /button> <
      /React.Fragment>
    )
  }

}
