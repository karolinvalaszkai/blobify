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
          <h4 id="content-title">Switch playlist to <span className="tooltip">blobify songs
          <span className="tooltiptext">What you see here is not random colors and shapes. <br/><br/>
                                    Songs contain data. <br/> <br/>
                                    A blob is a visual representation of a songs data, more so its energy and key. <br/><br/>
                                    The level of energy determines its shape, key its color and the dots... - we call it blobify. </span>
          </span></h4>
     
          <div className="playlist"></div>
          <h5 id="content-title">Fetched from Spotify</h5>

        </div>

        <div className="navbarContent-save droppable drophere"
          onDragOver={dragOverEvent}
          onDrop={dropEvent}>
          <h2 id="content-title">Save songs</h2>
          <h4 id="content-title">Drag and drop blob here to add or remove song</h4>

          {/* <div className="playlist"></div> */}
          <div className="collection">
            <div id="miniPreview" className="miniPreviewScroll"></div>

            {/*<div className="drophere playlistCss droppable"
                    onDragOver={dragOverEvent}
                    onDrop={dropEvent}><br/></div>*/}

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
