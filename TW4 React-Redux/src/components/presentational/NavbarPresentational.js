import React from 'react'

const NavbarPresentational = ({songs, homepageControl, playlistControl}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;

  return (
    <div id="navbar" className="navbar debug">
      <button onClick={() => homepageAction()}>{homepageMessage}</button>
      <button onClick={() => playlistAction()}>{playlistMessage}</button>
      <span>
        Displaying {nSongs} of the hottest songs!<br/>
        Last update: {/*insert time of last update here*/}
      </span>
    </div>
  )
}

export default NavbarPresentational
