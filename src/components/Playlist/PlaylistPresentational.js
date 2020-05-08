import React, { useState, useEffect } from 'react'

const PlaylistPresentational = ({ songs, getSongCollection, whenDone, onDelete, displaySong, getBlob}) => {
  const [c, updateC] = useState([]);
  const [doneCallback, doneMessage] = whenDone;
  let cCopy;

  useEffect(() => {
    getSongCollection(updateC);
  }, []);
  setTimeout(() => console.log('c is: ', {c}), 2000);


  return (
    <div id="summary" className="">
      <div id="summaryContent"><h2>My blobify collection</h2>
      <div>
      <div className="cross close-summary" onClick={() => doneCallback()}></div>
      </div>
        <table>
          <thead>
            <tr>
              {/* <th>Track</th> */}
              {/* <th>Release date</th> */}
              {/* <th> </th>


              <td>TOTAL SONGS {c.length}</td>
              <td></td>
              <td></td>
              <td><h4>Delete all</h4></td> */}

            </tr>
          </thead>
          <tbody id="tableBody">
            {
              c.map((song, i) =>
                <tr key={i}>
                  {/* console.log('Song in c.map(): ', song.track.id) */}
                  <td id={'playlist_item_'+song.track.id} className="blob"></td>
                    {setTimeout(() => {
                        let div = document.querySelector('#playlist_item_'+song.track.id);
                        div.innerHTML='';
                        getBlob(song,0.6,div);
                      }, 0)}
                  <td>
                    <h3>{song.track.name}</h3><br/>
                    <h4>{song.track.artists.map(artist => {return artist.name})}</h4>
                  </td>
                  {/* <td>
                    <h4 className="h4_black">{song.track.album.release_date}</h4>
                  </td> */}
                  <td><div className="cross delete-song" onClick={() => onDelete(song)}></div></td>
                </tr>
              )
            }
          </tbody>
          <tfoot>

            {/* <button onClick={() => console.log("Export to spotify")}>Export to Spotify</button> */}
          </tfoot>
          {/* <button id="export-button" onClick={() => console.log("Export to spotify")}>Export to Spotify</button> */}
        </table>
      </div>
      <div id="backgroundSummary" onClick={() => doneCallback()}></div>
    </div>
  )

}

export default PlaylistPresentational
