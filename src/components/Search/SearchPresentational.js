import React, { useRef, useEffect } from 'react'

const SearchPresentational = ({ songs, whenDone, onResultsClick, onAdd, onLoadPlaylist }) => {
  const [doneCallback, doneMessage] = whenDone;
  const [addCallback, addMessage] = onAdd;

  useEffect(() => {
    onLoadPlaylist('65hCGG0JopRfj06rs1ilmJ')
}, []);

//bäst just nu P3 - 65hCGG0JopRfj06rs1ilmJ
// blobify test - 4xTed278NxbQFt10i95vA9
// oyester - 37i9dQZF1DX2Wvd8VINtcF
//g-major 0pfU5U7MSepfY3HUaq1TEb
// slow 7naLna9BWXijv5DMuaPF8n
// songs in a minor 7xYpodDUMKawIDpcIkTY0l
//blobify 2 0Sw0ccMCjtB7IWmTFYyGyB
//new music friday 37i9dQZF1DX4JAvHpjipBk
//https://open.spotify.com/playlist/37i9dQZF1E4zxW4vWyzDQS?si=ab162e916e624a53
return (
    <div id="search" className="mainContent debug">
      <div id="resultsDiv" onClick={event => onResultsClick(event.target, songs)}></div>
    </div>
  )
}

export default SearchPresentational
