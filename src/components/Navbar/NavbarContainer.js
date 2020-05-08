import { connect } from 'react-redux'
import NavbarPresentational from './NavbarPresentational'
import { muteAudio, addSong, removeSong, loadPlaylist, setCurrentPlaylist, hideNavbar } from '../../actions'
import { saveSong, deleteSong, searchPlaylist, openTooltip, getMiniBlob} from '../../PlaylistModel'

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
          ownProps.history.push("/myplaylist")},"View Collection"],
  openTooltip: (e, id) => openTooltip(e, id),

  handleClick: (muted) => {
    dispatch(muteAudio(muted));

    let muteButton = document.body.querySelector('.muteButton');
    let currentClass = muteButton.classList[1];
    //muteButton.classList.remove(currentClass);
    //muteButton.classList.add((currentClass == 'mute'? 'unmute' : 'mute'));

    let audioElements = document.getElementsByTagName("audio");

    //sound on
    if (muted===false){
      console.log('mute');
      muteButton.classList.remove('mute');
      muteButton.classList.add('unmute');

    }
    else if (muted===true){
      console.log('unmute');
      muteButton.classList.remove('unmute');
      muteButton.classList.add('mute');
    }
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

    /*
      Turn off the elements draggable attribute to prevent multiple dragins.
      This should be turned on later after the song is added in playlist.
    */


    //console.log(JSON.parse(song));
    //dispatch(addSong(JSON.parse(song)));

    //If song is already in playlist then don't put it in here.
    let miniPreview = document.getElementById("miniPreview");
    let root = document.getElementById(JSON.parse(song).track.id); //The original large blob
    let rootCopy = document.getElementById(JSON.parse(song).track.id).cloneNode(true); //this is the mini blob

    root.setAttribute("draggable", false);

    let miniBlob = getMiniBlob(rootCopy, root, JSON.parse(song).track.id);
    saveSong(JSON.parse(song), root, rootCopy);
    console.log("We made it!!");
  },
  onDragOver: (ev) => {
    ev.preventDefault()
  },
  selectPlaylist: (playlistID) => {
    document.querySelectorAll('.selected-playlist')
      .forEach(button => {
        button.classList.remove('selected-playlist');
        button.disabled = false;
      });

    let selectedButton = document.body.querySelector('#playlist'+playlistID);
    selectedButton.classList.add('selected-playlist');
    selectedButton.disabled = true;

    searchPlaylist(playlistID).then(data => dispatch(setCurrentPlaylist(data)));
    dispatch(loadPlaylist(playlistID));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
