import React, { Component } from 'react';
import { render } from 'react-dom';



class AddPlaylistForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Default'};
    //this.state.addPlaylist = props.addPlaylist;
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <label> Name:
          <input
            type="text"
            value={this.state.value}
            onChange={(event)=>{this.setState({value: event.target.value})}}
          />
        </label>
        <button onClick={()=>this.props.addPlaylist(this.state.value)}>
          Add Playlist!
        </button>
      </div>
      </React.Fragment>
    );
  }
}

const addPlStyle = {
  borderStyle: "outset",
  backgroundColor : "salmon",
  borderRadius: "2px",
  margin: "20px",
  padding: "50px",
  display: "flex",
};

export default AddPlaylistForm;
