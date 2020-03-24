import React from 'react'

const PlaylistPresentational = (
  //{ ingredients, numberOfGuests, price, whenDone }) => {
  { playlistSummary }) => {
    const [doneCallback, doneMessage] = whenDone;

    return (
      <div id="summary" className="mainContent debug">
        <div>Current playlist:
          <table>
            <thead>
            <tr><th>Ingredients</th><th>Supermarket aisle</th><th>Amount</th></tr>
            </thead>
            <tbody>
              /*{ingredients.map(ing =>
                <tr key={ing.name}>
                  <td>{ing.name}</td>
                  <td>{ing.aisle}</td>
                  <td>{ing.amount * numberOfGuests}</td>
                </tr>
              )}*/

              //content of the current playlist
            </tbody>
            <tfoot>
              <tr><td>TOTAL</td><td></td><td>{price * numberOfGuests}</td></tr>
            </tfoot>
          </table>
        </div>
        <div>
          //Dinner for <span>{numberOfGuests}</span> people.
          <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
        </div>
      </div>
    )

}

export default PlaylistPresentational
