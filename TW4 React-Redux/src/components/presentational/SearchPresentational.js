import React, { useRef, useEffect } from 'react'

const SearchPresentational = ({ songs, whenDone, onResultsClick, onAdd, onLoadPlaylist }) => {
  const [doneCallback, doneMessage] = whenDone;
  const [addCallback, addMessage] = onAdd;

  //WHERE DO I USE SONGS PROP?

  useEffect(() => {
    setInterval(() => {
      onLoadPlaylist('37i9dQZEVXbMDoHDwVN2tF')
    }, 0);
  });

  return (
    <div id="search" className="mainContent debug">
      <div id="resultsDiv" onClick={event => onResultsClick(event.target)}></div>
      <button className="nav" onClick={() => doneCallback()}>{doneMessage}</button>
    </div>
  )
}

export default SearchPresentational
