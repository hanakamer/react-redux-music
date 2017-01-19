import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';

class Tags extends React.Component {
  render() {
    const {tags} = this.props;
    return(
      <div>
      <ul>
      {tags.map((tag,i) =>
          <li key={i}
           data-tagName={tag.name}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
          </li>
      )}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    artists:state.artists,
  };
}

export default connect(mapStateToProps)(Tags);
