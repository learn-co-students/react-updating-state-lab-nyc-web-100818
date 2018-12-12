import React, { Component, Fragment } from 'react'

export default class YouTubeDebugger extends Component {
  state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }

  updateBitrate=() => {
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})
  }

  updateResolution=()=> {
    this.setState({settings: {...this.state.settings, video: { resolution: '720p' } } })
  }

  render(){
    return(
      <Fragment>
      <button className='bitrate' onClick={this.updateBitrate}>Bitrate {this.state.settings.bitrate}</button>
      <button className='resolution'onClick={this.updateResolution}>Resolution {this.state.settings.video.resolution}</button>
      </Fragment>
    )
  }
}
