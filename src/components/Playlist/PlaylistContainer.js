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
    //document.querySelector('#playlist_item_'+song.track.id).remove();
  },
  displaySong: (song) => {
    return loadSong(song.track.id).then(doc => {
      let r = createSongDisplay(doc.data());
      return r;
    });
  },
  getBlob: (song,scale,div) => setTimeout(() => getBlob(song,scale,div), 3000)
  /*call: getBlobs()*/
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
