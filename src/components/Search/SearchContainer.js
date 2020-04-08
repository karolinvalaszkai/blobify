import SearchPresentational from './SearchPresentational'
import { connect } from 'react-redux'
import { addSong, setCurrentPlaylist, loadPlaylist } from '../../actions'
import { searchPlaylist } from '../../PlaylistModel'

const mapStateToProps = (state) => {
  return { songs: state.currentPlaylist }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/myplaylist"), "Go to My Playlist"],
  onResultsClick: (clickedNode, loadedSongs) => {
        var clickOnSong = clickedNode.classList.contains("song");
        var clickOnAddButton = clickedNode.classList.contains("addButton");
        if (clickOnSong) {
          const song_id = clickedNode.id;
          //console.log("Song clicked: " + song_id);

          clickedNode.childNodes[1].classList.remove('buttonInvisible');
          document.querySelectorAll('.buttonVisible').forEach(button => {
            button.classList.remove('buttonVisible');
            button.classList.add('buttonInvisible');
          });
          clickedNode.firstChild.classList.add('buttonVisible');
        }

        if (clickOnAddButton) {
          //console.log(clickedNode.parentNode.id);
          let clickedSongId = clickedNode.parentNode.id;
          let song = loadedSongs.find(d => d.track.id == clickedSongId);
          //console.log({song});
          dispatch(addSong(song));
        }
    },
  onAdd: [(song) => dispatch(addSong(song)), "Add to the playlist"],
  onLoadPlaylist: (idPlaylist) => {
    searchPlaylist(idPlaylist).then(data => dispatch(setCurrentPlaylist(data)));
    dispatch(loadPlaylist(idPlaylist));
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchPresentational);
