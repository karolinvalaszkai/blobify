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
  playlistControl: [() => ownProps.history.push("/myplaylist"), "My playlist"],
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
  },
  onDragOver: (ev) => {
    ev.preventDefault()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
