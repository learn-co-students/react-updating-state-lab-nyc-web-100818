import React,{Component, Fragment} from 'react';

export default class YouTubeDebugger extends Component{
  constructor(){
    super();
    this.state = {
                  errors: [],
                  user: null,
                  settings: {
                              bitrate: 8,
                              video: {
                                        resolution: '1080p' } } }
                }
  // Create a button with the class 'resolution'.
  // Clicking this button changes the settings.video.resolution state property to '720p'.

  handleBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })

  }



  render(){
    console.log(this.state);
    return(
      <Fragment>
        <h1>YouTube</h1>
        <button className="bitrate" onClick={this.handleBit}>Bit Rate: {this.state.settings.bitrate}</button>
        <span> {this.state.settings.bitrate} </span>
        <button className="resolution" onClick={this.handleRes}>Resolution: {this.state.settings.video.resolution}</button>
        <span>{this.state.settings.video.resolution}</span>
      </Fragment>
    )
  }
}
