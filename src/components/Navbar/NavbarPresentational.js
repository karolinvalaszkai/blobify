import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;


  return (
    <div id="navbar" className="navbar debug nothidden">

      {/* <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>blobify</h1> */}
      <h1 id="menu-title">blobify.</h1>

      <div className="navbarContent">

        <div className="navbarContent-playlist">
          {/* <button onClick={() => homepageAction()}>{homepageMessage}</button> */}
          <br/>
          <h2 id="content-title">Pick playlist</h2>
          <h3 id="content-title">Switch playlist to blobify songs</h3>
          <div className="playlist"></div>
          <h4 id="content-title">Fetched from Spotify</h4>

        </div>

        <div className="navbarContent-save">
          <h2 id="content-title">Save songs</h2>
          <h3 id="content-title">Drag and drop blob here to add or remove song</h3>

          {/* <div className="playlist"></div> */}
          <div className="collection">
            <button className="drophere playlistCss droppable"
                    onClick={() => playlistAction()}
                    onDragOver={dragOverEvent}
                    onDrop={dropEvent}><br/> </button>

            {
              /* <button className="playlistCss droppable"
                    onClick={() => playlistAction()}
                    onDragOver={dragOverEvent}
                    onDrop={dropEvent}>
                    {playlistMessage}
            </button><br/> */}

            <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button>
          </div>
        </div>
      </div>

      <div className='muteButton mute' onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
