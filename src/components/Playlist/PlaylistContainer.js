import { connect } from 'react-redux'
import PlaylistPresentational from './PlaylistPresentational'
import { removeSong } from '../../actions'
import { createSongDisplay, getBlob, loadSong, deleteSong, loadCollection } from '../../PlaylistModel.js'

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSongCollection: (callback) => {
    loadCollection(callback);
  },
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  onDelete: song => {
    deleteSong(song.track.id);
  },
  displaySong: (song) => {
    return loadSong(song.track.id).then(doc => {
      let r = createSongDisplay(doc.data());
      return r;
    });
  },
  getBlob: (song,scale,div) => getBlob(song,scale,div)
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
