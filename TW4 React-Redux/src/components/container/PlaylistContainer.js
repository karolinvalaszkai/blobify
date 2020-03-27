import { connect } from 'react-redux'
import PlaylistPresentational from '../presentational/PlaylistPresentational'
import { removeSong } from '../../actions'

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  whenDone: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  onDelete: song => dispatch(removeSong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPresentational);
