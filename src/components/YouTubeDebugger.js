// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  state ={

    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  updateBR = () => {
    this.setState({ 
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  updateRes = () => {
    this.setState ({
      settings: {
        ...this.state.settings, 
        video: {
          resolution: '720p'
        } 
      }
    })
  } 


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.updateBR}>Bitrate</button>
        <button className="resolution" onClick={this.updateRes}>Resolution</button>
      </div>
    )
  }
}
