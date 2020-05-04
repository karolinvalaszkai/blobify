import React from 'react'

const PlaylistPresentational = ({ songs, whenDone, onDelete, displaySong, getBlob}) => {
    const [doneCallback, doneMessage] = whenDone;
    return (
      <div id="summary" className="">
        <div id="summaryContent"><h2>My collection</h2>
        <div>
        <div className="cross close-summary" onClick={() => doneCallback()}></div>
        </div>
          <table>
            <thead>
            <h2>Your collection</h2>
              <tr>
                {/* <th>Track</th> */}
                {/* <th>Release date</th> */}
                <th> </th>
                
              </tr>
            </thead>
            <tbody id="tableBody">
              {songs.map((song, i) =>
                <tr key={i}>
                  {getBlob(song.track.id,0.6)}
                  <td className="blob">{displaySong(song)}</td>
                  <td>
                    <h3 className="h3_black">{song.track.name}</h3><br/>
                    <h4 className="h4_black">{song.track.artists.map(artist => {return artist.name})}</h4>
                  </td>
                  <td>
                    {/* <h4 className="h4_black">{song.track.album.release_date}</h4> */}
                  </td>
                  <td><div className="cross delete-song" onClick={() => onDelete(song)}></div></td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td>TOTAL SONGS {songs.length}</td>
                <td></td>
                <td></td>
                <td><h4>Delete all</h4></td>
              </tr>
              <button onClick={() => console.log("Export to spotify")}>Export to Spotify</button>
            </tfoot>
            <button id="export-button" onClick={() => console.log("Export to spotify")}>Export to Spotify</button>
          </table>
        </div>
        <div id="backgroundSummary" onClick={() => doneCallback()}></div>
      </div>
    )

}

export default PlaylistPresentational
