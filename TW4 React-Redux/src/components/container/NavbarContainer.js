import { connect } from 'react-redux'
import NavbarPresentational from '../presentational/NavbarPresentational'

const mapStateToProps = (state, ownProps) => {
  return { songs: state.songs};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  homepageControl: [() => ownProps.history.push("/trending"), "Back to the trending songs"],
  playlistControl: [() => ownProps.history.push("/myplaylist"), "My playlist"]
})


export default connect(mapStateToProps, mapDispatchToProps)(NavbarPresentational);
