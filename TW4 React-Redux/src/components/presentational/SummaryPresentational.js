import React from 'react'

const SummaryPresentational = (
  { ingredients, numberOfGuests, price, whenDone }) => {

    const [doneCallback, doneMessage] = whenDone;

    return (
      <div id="summary" className="mainContent debug">
        <div>Shopping list:
          <table>
            <thead>
            <tr><th>Ingredients</th><th>Supermarket aisle</th><th>Amount</th></tr>
            </thead>
            <tbody>
              {ingredients.map(ing =>
                <tr key={ing.name}>
                  <td>{ing.name}</td>
                  <td>{ing.aisle}</td>
                  <td>{ing.amount * numberOfGuests}</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr><td>TOTAL</td><td></td><td>{price * numberOfGuests}</td></tr>
            </tfoot>
          </table>
        </div>
        <div>
          Dinner for <span>{numberOfGuests}</span> people.
          <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
        </div>
      </div>
    )

}

export default SummaryPresentational
