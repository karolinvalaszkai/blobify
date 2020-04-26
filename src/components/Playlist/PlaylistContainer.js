import { connect } from 'react-redux'
import PlaylistPresentational from './PlaylistPresentational'
import { removeSong } from '../../actions'
import { createSongDisplay, getBlob } from '../../PlaylistModel.js'

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  onDelete: song => dispatch(removeSong(song)),
  displaySong: song => createSongDisplay(song),
  getBlob: (id,scale) => getBlob(id,scale)
  /*call: getBlobs()*/
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
