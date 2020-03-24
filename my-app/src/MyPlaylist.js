import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';


const MyPlaylist = ({playlists, onUpdate, onDragOver, onDrop}) => {
  return (
    <React.Fragment>
    <div>
      <button>Click!</button>
    </div>
    <div style = {mainPlaylistStyle}>
      {playlists.map((playlist, i)=>
        <div
          style={playlistStyle}
          key={i}
          className="droppable"
          onDragOver={(e)=>onDragOver(e)}
          onDrop={(e)=>onDrop(e, i)}>
          playlist {i}</div>
      )}
    </div>
    </React.Fragment>
  );
}

const playlistStyle = {
  borderStyle: "outset",
  backgroundColor : "salmon",
  borderRadius: "2px",
  margin: "20px",
  padding: "50px",
  display: "flex",
};

const mainPlaylistStyle = {
  flex:"1",
  display: "flex",
  //color: "white",
  backgroundColor: "DodgerBlue",
  //padding: "10px",
  //fontFamily: "Arial",
  flexDirection: "row",
};

export default MyPlaylist;
