import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import Chip from 'material-ui/Chip';

import StringToColor from '../js/colors/StringToColor';
import LightenDarkenColor from '../js/colors/LightenDarkerColor';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: 450,
    overflowY: 'auto',
  },
  button: {
    width: "100%",
    padding: 5,
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px 20px',
  },
};
function handleTouchTap() {
return "";
}

class Tags extends React.Component {

  render() {
    const {tags} = this.props;
    return(
      <div style={styles.root}>
        <GridList
          cols={1}
          cellHeight={50}
          style={styles.gridList}
        >
          <div style={styles.wrapper}>
            {tags.map((tag, i)=>
              <Link key={i} to={`/tags/${tag.name}`} >
                <GridTile>
                  <Chip
                  labelColor={LightenDarkenColor(StringToColor(tag.name),-20)}
                  onTouchTap={handleTouchTap}
                  style={styles.chip}
                  >
                  {tag.name}

                  </Chip>
                </GridTile>
              </Link>
            )}
            </div>
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists:state.artists,
  };
}

export default connect(mapStateToProps)(Tags);
