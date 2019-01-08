// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

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

  handleClickBit = () => {
    console.log(this.state.settings)
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    }, () => console.log(this.state.settings))
  }

  handleClickRes = () => {
    console.log(this.state.settings.video)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video))
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBit} >
          Up my bitrate!
        </button>
        <br />
        <button className="resolution" onClick={this.handleClickRes}>
          Fix my res!
        </button>
      </div>
    )

  }
}

export default YouTubeDebugger;
