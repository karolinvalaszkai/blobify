import { connect } from 'react-redux'
import NavbarPresentational from './NavbarPresentational'
import { muteAudio } from '../../actions'

const mapStateToProps = (state, ownProps) => {
  return { 
    songs: state.currentPlaylist,
    muted: state.audioMuted
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
    
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
