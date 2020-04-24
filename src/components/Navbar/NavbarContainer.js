import { connect } from 'react-redux'
import NavbarPresentational from './NavbarPresentational'
import { muteAudio, addSong, removeSong, loadPlaylist, setCurrentPlaylist, hideNavbar } from '../../actions'
import { searchPlaylist } from '../../PlaylistModel'

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.currentPlaylist,
    muted: state.audioMuted,
    nav: state.navbarHidden
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  homepageControl: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  playlistControl: [
    () => {let root = document.getElementById("miniPreview");
          while(root.firstChild) {root.removeChild(root.firstChild)};
          ownProps.history.push("/myplaylist")},"Export to Spotify"],
  handleClick: (muted) => {
    dispatch(muteAudio(muted));

    let muteButton = document.body.querySelector('.muteButton');
    let currentClass = muteButton.classList[1];
    muteButton.classList.remove(currentClass);
    muteButton.classList.add((currentClass === 'mute'? 'unmute' : 'mute'));

    let audioElements = document.getElementsByTagName("audio");
    Object.keys(audioElements).map((i) =>
      audioElements[i].muted = muted)

  },
  openNav: (nav) => {
    dispatch(hideNavbar(nav));

    var navbarDiv = document.getElementById("navbar");
    let currentClass = navbarDiv.classList[2];

    navbarDiv.classList.remove(currentClass);
    navbarDiv.classList.add((currentClass === 'hidden'? 'nothidden' : 'hidden'));
  },

  onDrop: (ev) => {
    console.log("Dropped into playlist");
    let song = ev.dataTransfer.getData("text/plain");
    //console.log(JSON.parse(song));
    dispatch(addSong(JSON.parse(song)));
    //If song is already in playlist then don't put it in here.
    let miniPreview = document.getElementById("miniPreview");
    let root = document.getElementById(JSON.parse(song).track.id); //The original large blob
    let rootCopy = document.getElementById(JSON.parse(song).track.id).cloneNode(true); //this is the mini blob

    //Change the svg/blob dimensions.
    rootCopy.getElementsByTagName('g')[0].setAttribute("transform", "matrix(1 0 0 1 0 -10) scale(0.2)");
    rootCopy.getElementsByTagName('svg')[0].setAttribute("height", "50");
    rootCopy.getElementsByTagName('svg')[0].setAttribute("width", "50");
    //rootCopy.removeAttribute("class");
    //rootCopy.addAttribute("class", "miniBlob");
    //Add a button event to miniBlob that removes the song from playlist and makes large blob visible.
    rootCopy.addEventListener('click', function(ev){
      dispatch(removeSong(JSON.parse(song)));
      var children = miniPreview.children;
      for(var i = 0; i < children.length; i++) {
        var currChild = children[i];
        if(currChild.getAttribute("id") === JSON.parse(song).track.id) {
          miniPreview.removeChild(currChild);
          break;
        }
      }
      //Make root element visible.
      root.getElementsByTagName('svg')[0].setAttribute("opacity", "1.0");
    });
    rootCopy.style.height = "70px";
    rootCopy.style.width = "60px";

    miniPreview.appendChild(rootCopy);
    //Lower the div oppacity to show it's been added.
    root.getElementsByTagName('svg')[0].setAttribute("opacity", "0.2");
  },
  onDragOver: (ev) => {
    ev.preventDefault()
  },
  selectPlaylist: (playlistID) => {
    document.querySelectorAll('.selected-playlist')
      .forEach(button => button.classList.remove('selected-playlist'));

    let selectedButton = document.body.querySelector('#playlist'+playlistID);
    selectedButton.classList.add('selected-playlist');

    searchPlaylist(playlistID).then(data => dispatch(setCurrentPlaylist(data)));
    dispatch(loadPlaylist(playlistID));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
