import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver, selectPlaylist, openTooltip}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;



  return (
    <div id="navbar" className="navbar debug nothidden">
      {/* <h1 id="menu-title" onClick={() => openNav(nav.navbarHidden)}>blobify</h1> */}
      <div className="navbarContent">
      <h1 id="menu-title">
        <span href="/explore">blobify.</span>
       </h1>

        <div className="navbarContent-playlist">
          {/* <button onClick={() => homepageAction()}>{homepageMessage}</button> */}
          <h2 id="content-title">Pick playlist</h2>
            <h4 id="content-title">Switch playlist to blobify songs <span className="tooltip" onClick={(e)=>openTooltip(e, 'info')} onContextMenu={(e)=>openTooltip(e, 'info')}> <img className='question' src="info.svg"  alt="info" height='18' width='18'/>  

                <div id={"tooltip-"+'info'} className="tooltiptext hidden">

                {/* <div className="cross close-summary" onClick={(e)=>openTooltip(e, 'info')}></div> */}

                <h3>What you see here is not random colors and shapes.</h3><br/>

                <h4>A blob is a visual representation of a songs <a className="link" href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/" target="_blank">audio features</a> - data on its energy, tempo and key.<br/>
                </h4>

                <h6>
                {/* The <span className="h4_white">energy</span> of the track is mapped to the number of dots in the blobs which determines its <span className="h4_white">shape</span>.<br/><br/>  */}

                The energy of the song is mapped to the number of dots in the blobs which determines its shape.<br/><br/> 
                {/* <h4>The higher the energy, the more aggressive blob.</h4><br/> */}

                The tempo of the song is mapped to the speed of the blob.<br/><br/>

                                                    
                The key of the song is mapped to the color of the blob based on <a className="grey_link" href="http://www.harmonics.com/lucy/lsd/colors.html" target="_blank">Charles Fourier's theory.</a><br/>
                </h6>                
                {/* - We call it to blobify songs. <br/><br/> */}

                </div>
              </span>
            </h4>
     
          <div className="playlist">
 
        
          <button className='playlistButton selected-playlist' id='playlist37i9dQZF1DXcBWIGoYBM5M' onClick={() => selectPlaylist('37i9dQZF1DXcBWIGoYBM5M')}>Top Hits</button>

            {/* <button id='playlist37i9dQZEVXbMDoHDwVN2tF' className="selected-playlist" onClick={() => selectPlaylist('37i9dQZEVXbMDoHDwVN2tF')}>Global Top 50</button> */}
            {/* <button id='playlist37i9dQZEVXbeATsTOiMcX0' onClick={() => selectPlaylist('37i9dQZEVXbeATsTOiMcX0')}>Release Radar</button> */}
            {/* <button id='playlist37i9dQZF1DWWBHeXOYZf74' onClick={() => selectPlaylist('37i9dQZF1DWWBHeXOYZf74')}>Pollen</button> */}

          {/* <button value="2" className='playlistButton' id='playlist37i9dQZEVXbLiRSasKsNU9' onClick={() => selectPlaylist('37i9dQZEVXbLiRSasKsNU9')}>Global Viral 50</button> */}
          <button className='playlistButton' id='playlist37i9dQZF1DX4JAvHpjipBk' onClick={() => selectPlaylist('37i9dQZF1DX4JAvHpjipBk')}>New Music</button>
          <button className='playlistButton' id='playlist37i9dQZF1DX4WYpdgoIcn6' onClick={() => selectPlaylist('37i9dQZF1DX4WYpdgoIcn6')}>Chill Hits</button>
          <button className='playlistButton' id='playlist65hCGG0JopRfj06rs1ilmJ' onClick={() => selectPlaylist('65hCGG0JopRfj06rs1ilmJ')}>Musicguide</button>
          {/* <iframe src="https://open.spotify.com/embed/playlist/65hCGG0JopRfj06rs1ilmJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}

        
          {/* <select>

            <option value="1" className='playlistButton selected-playlist' id='playlist37i9dQZF1DXcBWIGoYBM5M' onClick={() => selectPlaylist('37i9dQZF1DXcBWIGoYBM5M')}>Today's Top Hits</option>
              {/* <option value="2" className='playlistButton' id='playlist37i9dQZEVXbLiRSasKsNU9' onClick={() => selectPlaylist('37i9dQZEVXbLiRSasKsNU9')}>Global Viral 50</option>
              <option value="3" className='playlistButton' id='playlist37i9dQZF1DX4JAvHpjipBk' onClick={() => selectPlaylist('37i9dQZF1DX4JAvHpjipBk')}>New Music Friday</option>
              <option value="4" className='playlistButton' id='playlist37i9dQZF1DX2Wvd8VINtcF' onClick={() => selectPlaylist('37i9dQZF1DX2Wvd8VINtcF')}>Oyster</option>
              <option value="5" className='playlistButton' id='playlist65hCGG0JopRfj06rs1ilmJ' onClick={() => selectPlaylist('65hCGG0JopRfj06rs1ilmJ')}>Musikguiden i P3: Bäst just nu</option> */}

            {/* </select> */}

            </div>

            <h5 id="fetched">Fetched from Spotify</h5>

        </div>

        <div className="navbarContent-save droppable drophere"
          onDragOver={dragOverEvent}
          onDrop={dropEvent}>
          <h2 id="content-title">Save songs</h2>
          <h4 id="content-title">Drag and drop blobs here to add songs to your personal collection.</h4>

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
