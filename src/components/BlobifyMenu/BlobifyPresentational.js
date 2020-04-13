import React from 'react'

const BlobifyPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;


  return (
    <div id="blobifyMenu" className="blobifyMenu debug hidden">

      <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>blobify</h1>
      <br/>
   
      <div className="navbarContent">
        <span>
            Displaying {nSongs} of the hottest songs!<br/>
            Last update: insert time of last update here
        </span>
        <br/>
          <input id="search-input" type="text" name="search" />
          <button id="blobify-button" onClick={() => console.log("Search playlist")}>Search</button><br/>
      </div>
    </div>
  )
}

export default BlobifyPresentational
