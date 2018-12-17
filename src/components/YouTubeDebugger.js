import React, { Component, Fragment } from 'react';

export default class YouTubeDebugger extends Component {
    
    state = {
        errors: [], 
        user: null, 
        settings: { 
            bitrate: 8, 
            video: { 
                resolution: '1080p' 
            } 
        }
    }

    handleBitrate = () => {
        this.setState({
           settings: {
               ...this.state.settings,
               bitrate: 12,
           } 
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state.settings.video.resolution))
    }

    render() {
        return (
        <Fragment>
            <button onClick={this.handleBitrate} className='bitrate' >Bitrate</button>
            <button onClick={this.handleResolution} className='resolution' >Resolution</button>
        </Fragment>
        )
    }

}