// Code YouTubeDebugger Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super()
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

  onClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate:12
      })
    })
  }

  onClickResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

//or
      // this.setState({
      //   settings: {
      //     ...this.state.settings,
      //     video: {
      //       ...this.state.settings.video,
      //       resolution: '720p'
      //     }
      //   },
      // });

  render(){
    return (
      <div>
      <button
        className='bitrate'
        onClick={this.onClick}
        >
        Change Bitrate
      </button>
      <button
        className='resolution'
        onClick={this.onClickResolution}
        >
        Change Resolution
      </button>
      </div>
    )
  }


}//end of class
