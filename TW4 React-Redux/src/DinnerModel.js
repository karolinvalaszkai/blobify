import * as apiConfig from './apiConfig.js'

  export function computeDishPrice(dish) {
    let price = 0;
    dish.extendedIngredients.forEach(ing =>
       price += ing.amount);
    return Number(price).toFixed(2);
  }

  export function isInMenu(dish, dishes) {
    return dishes.some(d => d.id === dish.id);
  }

  export function getSortedMenu(dishes) {
    return dishes.sort((a, b) =>
              this.computeDishIndex(a) - this.computeDishIndex(b));
  }

  export function getMenuPrice(dishes) {
    return dishes.reduce((a, cv) =>
          a + Number(cv.price), 0)
  }

  export function searchDishes(dishType, freeText) {
    // Replace variables in case they are falsy (e.g. empty string, null, undefined)
    dishType = dishType || "";
    freeText = freeText || "";
    return retrieve(`recipes/search?type=${dishType}&query=${freeText}`)
    .then(data => data.results)          // leave out the unimportant parts of the response data;
  }

  export function getDishDetails(dish_id) {
    return retrieve(`recipes/${dish_id}/information`);
  }

  export function computeDishIndex(dish) {
    var dishTypes = dish.dishTypes;
    if (dishTypes.includes("starter")) {
      return 0;
    }
    if (dishTypes.includes("main course")) {
      return 1;
    }
    if (dishTypes.includes("dessert")) {
      return 2;
    }
  }

  export function computeShoppingList(dishes) {
    var shList = [];
    dishes.forEach(dish =>
      dish.extendedIngredients.forEach(ing => {
        // Check for duplicates
        var existing = shList.filter(i => i.name === ing.name);
        if (existing.length !== 0) {
          existing[0].amount += ing.amount;
        } else {
          shList.push({ name: ing.name, aisle: ing.aisle, amount: ing.amount});
        }
      })
    );
    // Sort by ingredient name
    shList.sort((ing1, ing2 ) => {
      if (ing1.name < ing2.name) return -1;
      if (ing1.name > ing2.name) return 1;
      return 0;
    });
    // Sort by supermarket aile
    shList.sort((ing1, ing2 ) => {
      if (ing1.aisle < ing2.aisle) return -1;
      if (ing1.aisle > ing2.aisle) return 1;
      return 0;
    });
    return shList;
  }

  export function retrieve(query) {
    const controller = new AbortController();
    const ret = fetch(apiConfig.ENDPOINT + query, {
      signal: controller.signal,
      "method": "GET",
      "headers": {
        'X-Mashape-Key': apiConfig.API_KEY
      }
    })
    .then(response => response.json())   // from headers to response data
    .catch(error => console.error(error.message));
    ret.abort = () => controller.abort();
    return ret;
  }
