import React from 'react'

const PlaylistPresentational = ({ songs, whenDone, onDelete, displaySong, getBlob}) => {
    const [doneCallback, doneMessage] = whenDone;
    return (
      <div id="summary" className="">
        
        <div id="summaryContent"><h2>Current playlist</h2>
        <div>
        <div className="close" onClick={() => doneCallback()}></div>
        </div>
          <table>
            <thead>
              <tr>
                <th>Song</th>
                <th>Genre</th>
                <th>Release date</th>
              </tr>
            </thead>
            <tbody id="tableBody">
              {songs.map((song, i) =>
                <tr key={i}>
                  <td id="blob">{getBlob(song.track.id,0.8)}</td>
                  <td>{displaySong(song)}</td>
                  <td><h4>{song.track.name}</h4></td>
                  <td><button onClick={() => onDelete(song)}>Delete from playlist</button></td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr><td>TOTAL SONGS</td><td></td><td>{songs.length}</td></tr>
            </tfoot>
          </table>
        </div>
        
      </div>
    )

}

export default PlaylistPresentational
