import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';


const MyPlaylist = ({playlists, onUpdate}) => {

  return (
    <React.Fragment>
    <div>
      {playlists.map((playlist, i)=>
        <div>playlist {i}</div>
      )}
    </div>
    </React.Fragment>
  );

}

export default MyPlaylist;
