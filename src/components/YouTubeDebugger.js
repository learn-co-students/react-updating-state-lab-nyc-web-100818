// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

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

  bitRateSweater = event => {
    let newAttr = 12
    this.setState({settings: {...this.state.settings, bitrate: newAttr}})
  }

  resolutionSalmon = event => {
    let newRes = '720p'
    this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: newRes}}})
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitRateSweater}> Bitrate button </button>
        <button className ="resolution" onClick={this.resolutionSalmon}>resolution button </button>
      </div>

    )

  }

}
