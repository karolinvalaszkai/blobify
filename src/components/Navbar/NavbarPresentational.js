import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;


  return (
    <div id="navbar" className="navbar debug hidden">

      <h1 id="collection-title" onClick={() => openNav(nav.navbarHidden)}>collection</h1>
   
      <div id="navbarContent">
      <button onClick={() => homepageAction()}>{homepageMessage}</button>
      
      <span>
        Displaying {nSongs} of the hottest songs!<br/>
        Last update: {/*insert time of last update here*/}
      </span>
      <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button><br/>
      </div>
      <div className='muteButton mute' onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
