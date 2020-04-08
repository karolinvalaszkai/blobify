import React from 'react'

const NavbarPresentational = ({songs, muted, homepageControl, playlistControl, handleClick}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;

  return (
    <div id="navbar" className="navbar debug">
      <button onClick={() => homepageAction()}>{homepageMessage}</button>
      <button className='playlistCss' onClick={() => playlistAction()} onDragOver={this.onDragOver} onDrop={this.onDrop}>{playlistMessage}</button><br/>
      <span>
        Displaying {nSongs} of the hottest songs!<br/>
        Last update: {/*insert time of last update here*/}
      </span>
      <div className='muteButton mute' onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
