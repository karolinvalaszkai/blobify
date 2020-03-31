
import React, { Component } from 'react';
import { render } from 'react-dom';



class Blob extends Component {

  constructor(props) {
    super(props);
    this.state = {svgElement: 'empty'};
  }

  blobCreator = (songObj) => {
    //Retrives the svg from the javascript function in BlobCreator.js (inside the public folder)
    //Input is a song object containing the audio features 
     if (songObj.id !== undefined){
      var svg = window["blobCreator"](songObj);
      return <div ref={ref => ref.appendChild(svg)}></div>;

    } else {
      console.log("Blob.js is not getting songObj.id")
    }
 
  }

blobRenderer(songObj) {
  //Returns the blob div with the svg inside
  if (songObj!==undefined){
    return <div 
    onMouseEnter = {(e)=>console.log("Start playing song: ",songObj.id)}
    onMouseLeave = {(e)=>console.log("Stop playing song: ",songObj.id)}
    id={this.props.songObj.id} className="blob">{this.blobCreator(this.props.songObj)}</div>
  }else {
    console.log("Blob.js is not getting songObj")
  }
}
  render() {   
    return (
      <React.Fragment>
        {this.blobRenderer(this.props.songObj)}        
      </React.Fragment>
    );
  }
}



export default Blob;

  















