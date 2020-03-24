import React, { useRef, useEffect } from 'react'

const SearchPresentational = (
  //{ whenDone, onSearchClick, onSearchInput, onResultsClick }) => {
  { whenDone, onResultsClick }) => {

    //const [searchDish, searchMessage] = onSearchClick;
    const [doneCallback, doneMessage] = whenDone;
    const freeText = useRef(null);
    const dishType = useRef(null);

    /*
    useEffect(() => {
      // Initialize search
      setTimeout(onSearchInput, 500, dishType.current.value, freeText.current.value);
    }, [onSearchInput]);
    */

  return (
    <div id="search" className="mainContent debug">
      //content of the trending song section
      <div id="resultsDiv" onClick={event => onResultsClick(event.target)}></div>
      <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
    </div>
  )
}

export default SearchPresentational
