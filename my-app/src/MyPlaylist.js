import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';


const MyPlaylist = ({playlists, onUpdate, onDragOver, onDrop}) => {
  return (
    <React.Fragment>
    <div>
      {playlists.map((playlist, i)=>
        <div
          key={i}
          className="droppable"
          onDragOver={(e)=>onDragOver(e)}
          onDrop={(e)=>onDrop(e, i)}>
          playlist {i}</div>
      )}
    </div>
    <div>
      <button>Click!</button>
    </div>
    </React.Fragment>
  );
}

export default MyPlaylist;
