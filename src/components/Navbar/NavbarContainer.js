import { connect } from 'react-redux'
import NavbarPresentational from './NavbarPresentational'
import { hideNavbar } from '../../actions'
import { muteAudio, addSong } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.currentPlaylist,
    muted: state.audioMuted,
    nav: state.navbarHidden
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  homepageControl: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  playlistControl: [() => ownProps.history.push("/myplaylist"), "Export to Spotify"],
  handleClick: (muted) => {
    dispatch(muteAudio(muted));

    let muteButton = document.body.querySelector('.muteButton');
    let currentClass = muteButton.classList[1];
    muteButton.classList.remove(currentClass);
    muteButton.classList.add((currentClass == 'mute'? 'unmute' : 'mute'));

    let audioElements = document.getElementsByTagName("audio");
    Object.keys(audioElements).map((i) =>
      audioElements[i].muted = muted)

  },
  openNav: (nav) => {
    dispatch(hideNavbar(nav));

    var navbarDiv = document.getElementById("navbar");
    let currentClass = navbarDiv.classList[2];

    navbarDiv.classList.remove(currentClass);
    navbarDiv.classList.add((currentClass == 'hidden'? 'nothidden' : 'hidden'));
  },

  onDrop: (ev) => {
    console.log("Dropped into playlist");
    let song = ev.dataTransfer.getData("text/plain");
    //console.log(JSON.parse(song));
    dispatch(addSong(JSON.parse(song)));

    let root = document.getElementById(JSON.parse(song).track.id).cloneNode(true); //copy it.
    console.log(root);

    //Change the svg/blob dimensions.
    //root.getElementsByTagName('g')[0].style.transform = "scale(0.2)";
    root.getElementsByTagName('g')[0].setAttribute("transform", "matrix(1 0 0 1 0 -10) scale(0.2)");
    root.getElementsByTagName('svg')[0].setAttribute("height", "50");
    root.getElementsByTagName('svg')[0].setAttribute("width", "50");
    //root.getElementsByTagName('svg')[0].style.position="relative";
    //root.getElementsByTagName('svg')[0].style.top= "0";
    //root.style.transform = "scale(0.5)";
    //root.style.textAlign = "left";
    root.style.height = "70px";
    root.style.width = "60px";

    document.getElementById("miniPreview").appendChild(root);
    //ev.target.getElementById("miniPreview").appendChild(root);
    // console.log("source: " + source);
  },
  onDragOver: (ev) => {
    ev.preventDefault()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
