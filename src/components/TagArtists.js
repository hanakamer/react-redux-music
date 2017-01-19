import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';

import { fetchArtists } from "../actions/artistsActions";

class TagArtists extends React.Component {

  componentWillMount(){
    const tag = this.props.params.tag;
    const { dispatch } = this.props;
    dispatch(fetchArtists(tag));
  }
  render() {
    const { artistsList, fetching } = this.props;
    return(
      <div>
      {fetching && artistsList.length === 0 &&
        <h2> Loading...</h2>
      }
      {!fetching && artistsList.length === 0 &&
        <h2> Empty</h2>
      }
      {artistsList.length > 0 &&

          <ul>
          {artistsList.map((artist,i) =>
              <li key={i}>
                <Link to={`/artists/${artist.name}`}>{artist.name}</Link>
              </li>
          )}
          </ul>

        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artistsList : state.artists.data,
    fetching : state.artists.fetching,
    fetched : state.artists.fetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TagArtists);
