import React from 'react'

const PlaylistPresentational = ({ songs, getSongCollection, whenDone, onDelete, displaySong }) => {
    const [doneCallback, doneMessage] = whenDone;
    let collection = getSongCollection();
    //console.log({collection});
    
    collection.then(coll => {
      coll.map((song, i) => {
        console.log({song});
        let title = document.createTextNode(song.title);
        let row = document.createElement('tr');
        let column = document.createElement('td');

        column.appendChild(title);
        row.appendChild(column);
        document.querySelector('tbody').appendChild(row);
      });
    })

    return (
      <div id="summary" className="mainContent debug">
        <div>Current playlist:
          <table>
            <thead>
              <tr>
                <th>Song</th>
                <th>Title</th>
                <th>Time of addition</th>
              </tr>
            </thead>
            <tbody></tbody>
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
