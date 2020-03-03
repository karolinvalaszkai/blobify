import React, { useRef, useEffect } from 'react'

const SearchPresentational = (
  { whenDone, onSearchClick, onSearchInput, onResultsClick }) => {

    const [searchDish, searchMessage] = onSearchClick;
    const [doneCallback, doneMessage] = whenDone;
    const freeText = useRef(null);
    const dishType = useRef(null);

    useEffect(() => {
      // Initialize search
      setTimeout(onSearchInput, 500, dishType.current.value, freeText.current.value);
    }, [onSearchInput]);

  return (
    <div id="search" className="mainContent debug">
      <div>
        <input ref={freeText} onInput={() => onSearchInput(dishType.current.value, freeText.current.value)}>
        </input>
        <select ref={dishType}>
          <option value="">Dish type</option>
          <option value="starter">Starter</option>
          <option value="main course">Main course</option>
          <option value="dessert">Dessert</option>
        </select>
        <button id="searchButton" onClick={() => searchDish(dishType.current.value, freeText.current.value)}>
          {searchMessage}
        </button>
      </div>
      <div id="resultsDiv" onClick={event => onResultsClick(event.target)}></div>
      <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
    </div>
  )
}

export default SearchPresentational
