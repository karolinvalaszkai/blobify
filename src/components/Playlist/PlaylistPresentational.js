import React from 'react'

const PlaylistPresentational = ({ songs, getSongCollection, whenDone, onDelete, displaySong, getBlob}) => {
  const [doneCallback, doneMessage] = whenDone;
  let collection = getSongCollection();

  collection.then(coll => {
    coll.map((song, i) => {
      console.log('Song in displayPresentational: ', {song});
      let row = document.createElement('tr');

      //FIRST COLUMN: BLOB
      //let blob = getBlob(song.id,0.8);
      let column1 = document.createElement('td');
      column1.innerHTML = getBlob(song.id,0.6);//column1.appendChild(blob);
      row.appendChild(column1);

      //SECOND COLUMN: DISPLAY SONG
      let column2 = document.createElement('td');
      //let disp = displaySong(song, column2);
      row.appendChild(column2);

      //THIRD COLUMN: SONG TITLE
      let name = document.createTextNode(song.title);
      let h4 = document.createElement('h4');
      h4.appendChild(name);
      let column3 = document.createElement('td');
      column3.appendChild(h4);
      row.appendChild(column3);

      //FOURTH COLUMN: DELETE BUTTON
      //let deleteMsg = document.createTextNode('Delete from playlist');
      let deleteBtn = document.createElement('button');
      //deleteBtn.appendChild(deleteMsg);
      deleteBtn.setAttribute('className', 'cross delete-song');
      deleteBtn.addEventListener("click", () => onDelete(song));
      let column4 = document.createElement('td');
      column4.appendChild(deleteBtn);
      row.appendChild(column4);

      document.querySelector('tbody').appendChild(row);
    });
  })

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
              <th> </th>


              <td>TOTAL SONGS {songs.length}</td>
              <td></td>
              <td></td>
              <td><h4>Delete all</h4></td>

            </tr>
          </thead>
          <tbody id="tableBody">
            { /* songs.map((song, i) =>
              <tr key={i}>
                {getBlob(song.track.id,0.6)}
                <td className="blob">{displaySong(song)}</td>
                <td>
                  <h3>{song.track.name}</h3><br/>
                  <h4>{song.track.artists.map(artist => {return artist.name})}</h4>
                </td>
                <td>
                  {/* <h4 className="h4_black">{song.track.album.release_date}</h4> }
                </td>
                <td><div className="cross delete-song" onClick={() => onDelete(song)}></div></td>
              </tr>
            )*/}
          </tbody>
          <tfoot>

            {/* <button onClick={() => console.log("Export to spotify")}>Export to Spotify</button> */}
          </tfoot>
          <button id="export-button" onClick={() => console.log("Export to spotify")}>Export to Spotify</button>
        </table>
      </div>
      <div id="backgroundSummary" onClick={() => doneCallback()}></div>
    </div>
  )

}

export default PlaylistPresentational
