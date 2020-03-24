import React, { Component } from 'react';
import { render } from 'react-dom';

/*
  Wrong, we won't be using this component..
*/

const AddPlaylistButton = ({playlists}) => {
  return (
    <React.Fragment>
    <div style={addPlStyle}>New Playlist</div>
    </React.Fragment>
  );
}

const addPlStyle = {
  borderStyle: "outset",
  backgroundColor : "salmon",
  borderRadius: "2px",
  margin: "20px",
  padding: "50px",
  display: "flex",
};

export default AddPlaylistButton;
