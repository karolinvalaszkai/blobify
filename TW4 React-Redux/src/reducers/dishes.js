import { searchDishes, computeDishPrice } from '../DinnerModel.js'
import RenderPromise from '../renderPromise.js'
import React from 'react'

function dishes(state = [], action) {
  let dish = action.dish;
  switch (action.type) {
    case 'ADD_DISH':
      // Check if dish is already in the menu
      let alreadyPresent = state.some(d => d.id === dish.id);
      if (alreadyPresent) {
        console.error(`${dish.title} is already present in the menu.`);
        return [...state];
      } else {
        // Compute price
        dish.price = computeDishPrice(dish);
        return [...state, dish];
      }
    case 'REMOVE_DISH':
      return [...state].filter(d => d.id !== dish.id);
    case 'SEARCH_DISH':
      updateSearchResults(action.dishType, action.freeText);
      return [...state];
    default:
      return [...state];
  }
}

const updateSearchResults = (dishType, freeText) => {
  RenderPromise.render(
    searchDishes(dishType, freeText),
    dishes => React.createElement(React.Fragment, {}, dishes.map(dish => createDishDisplay(dish))),
    document.getElementById('resultsDiv'));
}

const createDishDisplay = (dish) => {
  var imageUrl = dish.imageUrls[0];
  imageUrl = "https://spoonacular.com/recipeImages/" + imageUrl;
  return (
    <span id={dish.id} key={dish.id} className="dish" title={dish.title}>
      <img height="100px" src={imageUrl} alt=""></img>
      <span>{dish.title}</span>
    </span>
  )
}

export default dishes
