import React from 'react'

const NavbarPresentational = ({songs, muted, nav,  homepageControl, playlistControl, handleClick, openNav, onDrop, onDragOver, selectPlaylist, openTooltip}) => {
  const [homepageAction, homepageMessage] = homepageControl;
  const [playlistAction, playlistMessage] = playlistControl;
  const nSongs = songs.length;
  const dropEvent = onDrop;
  const dragOverEvent = onDragOver;

  let mutedStatus;
  if (muted.audioMuted === undefined || !muted.audioMuted) mutedStatus = 'muteButton mute';
  else if (muted.audioMuted) mutedStatus = 'muteButton unmute'

  return (
    <div id="navbar" className="navbar debug nothidden">
    
    <div id="mobile_pop_up"><span id="mobile_pop_up-content"><h2>Rotate your device 90°</h2><br/><h4 className="h4_white">psst... try force touch on the blobs</h4></span><div className="backgroundSummary"></div></div>

      <div className="navbarContent">
        <h1 id="menu-title"><span href="/trending">blobify.</span></h1>
        <div className="menu">
          <div className="navbarContent-playlist">
            {/* <h2 id="content-title">Pick Playlist</h2> */}


            <h2>What you see here is not random colors and shapes.</h2>

              <h4>A blob is a visual representation of a song's <a className="link" href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/" target="_blank">audio features</a> - data on its energy, tempo and key.<br/>
              </h4>
             
              <h6>

                The energy of the song is mapped to the number of dots in the blobs which determines its shape.<br/><br/>

                The tempo of the song is mapped to the movement of the blob.<br/><br/>

                The key of the song is mapped to the color of the blob based on <a className="grey_link" href="http://www.harmonics.com/lucy/lsd/colors.html" target="_blank">Charles Fourier's Theory.</a><br/>
              </h6>
              {/* <h4 id="content-title">Switch playlist to blobify songs <span className="tooltip"> <img className='question' src="info.svg"  alt="info" height='13' width='13' onClick={(e)=>openTooltip(e, 'info')} onContextMenu={(e)=>openTooltip(e, 'info')}/>
                <div id={"tooltip-"+'info'} className="tooltiptext hidden">
                  <div className="tooltip-content">
                    <div className="cross close-tooltip" onClick={(e)=>openTooltip(e, 'info')} onContextMenu={(e)=>openTooltip(e, 'info')}></div>

                    <h3>What you see here is not random colors and shapes.</h3><br/>

                    <h4>A blob is a visual representation of a song's <a className="link" href="https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/" target="_blank">audio features</a> - data on its energy, tempo and key.<br/>
                    </h4>

                    <h6>

                      The energy of the song is mapped to the number of dots in the blobs which determines its shape.<br/><br/>

                      The tempo of the song is mapped to the movement of the blob.<br/><br/>

                      The key of the song is mapped to the color of the blob based on <a className="grey_link" href="http://www.harmonics.com/lucy/lsd/colors.html" target="_blank">Charles Fourier's Theory.</a><br/>
                   </h6>

                </div>
                <div className="backgroundSummary" onClick={(e)=>openTooltip(e, 'info')} onContextMenu={(e)=>openTooltip(e, 'info')}></div>
                </div>
              </span>
            </h4> */}

            <div className="playlist">

              <button className='playlistButton selected-playlist' id='playlist37i9dQZF1DXcBWIGoYBM5M' onClick={() => selectPlaylist('37i9dQZF1DXcBWIGoYBM5M')}>Today's Hits</button>
              <button className='playlistButton' id='playlist37i9dQZF1DX4JAvHpjipBk' onClick={() => selectPlaylist('37i9dQZF1DX4JAvHpjipBk')}>New Music</button>
              <button className='playlistButton' id='playlist37i9dQZF1DWVzMIQ8BnDGm' onClick={() => selectPlaylist('37i9dQZF1DWVzMIQ8BnDGm')}>Vibe</button>
              <button className='playlistButton' id='playlist65hCGG0JopRfj06rs1ilmJ' onClick={() => selectPlaylist('65hCGG0JopRfj06rs1ilmJ')}>Critic's Picks</button>

            </div>
            {/* <h5 id="fetched">Fetched from Spotify</h5> */}
          </div>

          <div className="navbarContent-save droppable drophere"
            onDragOver={dragOverEvent}
            onDrop={dropEvent}>
            <h2 id="content-title">Save Songs</h2>
            <h4 id="content-title">Drag and drop blobs here to add songs to your personal collection.</h4>
            <div className="collection">
              <div id="miniPreview" className="miniPreviewScroll"></div>
              <button id="collection-button" onClick={() => playlistAction()}>{playlistMessage}</button>
            </div>
          </div>

        </div>
      </div>
  
      <div className={mutedStatus} onClick={() => handleClick(muted.audioMuted)}></div>
    </div>
  )
}

export default NavbarPresentational
