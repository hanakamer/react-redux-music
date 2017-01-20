import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';

import Loading from "./materalUI/Loading";
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import { fetchArtists } from "../actions/artistsActions";

import StringToColor from '../js/colors/StringToColor';
import LightenDarkenColor from '../js/colors/LightenDarkerColor';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
function handleTouchTap() {
return "";
}

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
      <h2> Artists related to <i>{this.props.params.tag}</i></h2>
      {fetching && artistsList.length === 0 &&
        <Loading />
      }
      {!fetching && artistsList.length === 0 &&
        <h2> Empty</h2>
      }

      {artistsList.length > 0 &&
          <div style={styles.wrapper}>

          {artistsList.map((artist,i) =>
                <Link key={i} to={`/artists/${artist.name}`}>
                  <Chip
                  labelColor={LightenDarkenColor(StringToColor(artist.name),100)}

                  onTouchTap={handleTouchTap}
                  style={styles.chip}
                  >
                  <Avatar src={artist.image[0]["#text"]} />
                  {artist.name}
                  </Chip>
                </Link>

          )}
          </div>

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
