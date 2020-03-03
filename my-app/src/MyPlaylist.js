import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';


const MyPlaylist = ({playlists, onUpdate}) => {
  return (
    <React.Fragment>
    <div>
      {playlists.map((playlist, i)=>
        <div key={i}>playlist {i}</div>
      )}
    </div>
    <div>
      <button>Click!</button>
    </div>
    </React.Fragment>
  );
}

export default MyPlaylist;
