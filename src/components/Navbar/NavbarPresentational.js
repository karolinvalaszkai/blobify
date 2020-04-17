import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;


  return (
    <div id="navbar" className="navbar debug hidden">

      <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>blobify</h1>
   
      <div className="navbarContent">
        {/* <button onClick={() => homepageAction()}>{homepageMessage}</button> */}
        <br/>
        <span>
            {/* Displaying {nSongs} of the hottest songs!<br/>
            Last update: insert time of last update here */}
        </span>
        
        <br/>
        
          <button className="drophere playlistCss droppable"
                  onClick={() => playlistAction()}
                  onDragOver={dragOverEvent}
                  onDrop={dropEvent}>Drag and drop <br/>blobs here <br/> to add them to your collection </button>

          {/* <button className="playlistCss droppable"
                  onClick={() => playlistAction()}
                  onDragOver={dragOverEvent}
                  onDrop={dropEvent}>
                  {playlistMessage}
          </button><br/> */}
          {/* <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button><br/> */}
          <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button><br/>

      </div>

      <div className='muteButton mute' onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
