import React, { useRef, useEffect } from 'react'

const SearchPresentational = ({ songs, whenDone, onResultsClick, onAdd, onLoadPlaylist }) => {
  const [doneCallback, doneMessage] = whenDone;
  const [addCallback, addMessage] = onAdd;

  useEffect(() => {
    onLoadPlaylist('4xTed278NxbQFt10i95vA9')
}, []);

return (
    <div id="search" className="mainContent debug">
      <div id="resultsDiv" onClick={event => onResultsClick(event.target, songs)}></div>
    </div>
  )
}

export default SearchPresentational
