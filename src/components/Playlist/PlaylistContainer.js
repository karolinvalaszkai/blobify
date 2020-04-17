import { connect } from 'react-redux'
import PlaylistPresentational from './PlaylistPresentational'
import { removeSong } from '../../actions'
import { createSongDisplay, loadSong, deleteSong, loadCollection } from '../../PlaylistModel.js'

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSongCollection: () => loadCollection(),
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  onDelete: songID => {
    deleteSong(songID);
    //dispatch(removeSong(song));
  },
  displaySong: song => {
    loadSong(song);
    createSongDisplay(song);
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
