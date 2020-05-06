import { connect } from 'react-redux'
import PlaylistPresentational from './PlaylistPresentational'
import { removeSong } from '../../actions'
import { createSongDisplay, getBlob, loadSong, deleteSong, loadCollection } from '../../PlaylistModel.js'

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSongCollection: () => loadCollection(),
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  onDelete: song => deleteSong(song.id),
  displaySong: (song, el) => {
    //loadSong(song.track.id);
    return createSongDisplay(song);
  },
  getBlob: (id,scale) => getBlob(id,scale)
  /*call: getBlobs()*/
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
