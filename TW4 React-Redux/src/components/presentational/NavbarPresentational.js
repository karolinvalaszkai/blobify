import React from 'react'

const NavbarPresentational = (
  { numberOfGuests, setNoGuests, dishes, getMenuPrice, onDelete }) => {

  return (
    <div id="sidebar" className="sidebar debug">
      <button onClick={() => setNoGuests(numberOfGuests - 1)} disabled={numberOfGuests <= 1}>-</button>
      <span>{numberOfGuests}</span>
      <button onClick={() => setNoGuests(numberOfGuests + 1)}>+</button>
      <table>
      <thead>
        <tr><th>Dish</th><th>Price</th></tr>
      </thead>
      <tbody>
        {dishes.map(dish =>
        <tr key={dish.id}>
          <td>{dish.title}</td>
          <td>{dish.price * numberOfGuests}</td>
          <td><button onClick={() => onDelete(dish)}>x</button></td>
        </tr>
      )}
      </tbody>
      <tfoot>
        <tr><td>TOTAL</td><td>{getMenuPrice(dishes) * numberOfGuests}</td></tr>
      </tfoot>
      </table>
    </div>
  )
}

export default NavbarPresentational
