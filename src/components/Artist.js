import React from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../actions/artistActions";
import ArtistContainer from "./ArtistContainer";

class Artist extends React.Component {

  componentWillMount(){
    const artist = this.props.params.artist;

    const { dispatch } = this.props;
    dispatch(fetchArtist(artist))

  }
  componentWillReceiveProps(newProps){

    if(newProps.params !== this.props.params) {
      const { dispatch } = this.props;
      const artist = newProps.params.artist;
      dispatch(fetchArtist(artist))
    }

  }
  render(){
    const {info, fetching, fetched} = this.props.artist;
    return(
      <div>
      {fetching  &&
        <h2> Loading...</h2>
      }
      {!fetching && fetched &&
        <ArtistContainer data={info}/>
      }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    artist: state.artist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Artist);
