import React, { Component } from "react";
import { muteAudio } from '../../actions'


class MuteAudioToggle extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
        //console.log(this.state.isToggleOn)
        muteAudio(this.state.isToggleOn);
      }
  render() {
    return (
        <div className={this.state.isToggleOn ? 'unmute' : 'mute'} onClick={this.handleClick}> 
        </div>
    );
  }
}

export default MuteAudioToggle;