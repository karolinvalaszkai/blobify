import React from 'react'

const AboutPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver}) => {
  // const [homepageAction, homepageMessage] = homepageControl;
  // const [playlistAction, playlistMessage] = playlistControl;
  // const nSongs = songs.length;
  // const dropEvent = onDrop;
  // const dragOverEvent = onDragOver;


  return (
    <div id="aboutMenu" className="aboutMenu debug hidden">

      <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>about</h1>
      <br/>
   
      <div className="navbarContent">
        <span>
        blobify
        <br/>
        <br/>

        A Spotify powered web application for displaying playlist songs through a visual representation of its energy, pitch and valence.


<br/>
<br/>created by 
<br/>Alessandro Iop 
<br/>Daniel Parhizgar 
<br/>Sabina Nordell 
<br/>Karolin Valaszkai        </span>
        <br/>
          
      </div>
    </div>
  )
}

export default AboutPresentational
