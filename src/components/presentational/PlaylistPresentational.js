import React from 'react'

const PlaylistPresentational = ({ songs, whenDone, onDelete, displaySong }) => {
    const [doneCallback, doneMessage] = whenDone;

    return (
      <div id="summary" className="mainContent debug">
        <div>Current playlist:
          <table>
            <thead>
              <tr>
                <th>Song</th>
                <th>Genre</th>
                <th>Release date</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, i) =>
                <tr key={i}>
                  <td>{displaySong(song)}</td>
                  <td>{song.track.id}</td>
                  <td><button onClick={() => onDelete(song)}>Delete from playlist</button></td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr><td>TOTAL SONGS</td><td></td><td>{songs.length}</td></tr>
            </tfoot>
          </table>
        </div>
        <div>
          <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
        </div>
      </div>
    )

}

export default PlaylistPresentational
