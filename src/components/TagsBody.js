import React from "react"
import { connect } from "react-redux"

import { fetchTags } from "../actions/tagsActions"
import Tags from "./Tags"
class TagsBody extends React.Component {
  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(fetchTags());
  }
  render() {
    const { dispatch, tagslist, fetching } = this.props;
    return(
      <div>
      {fetching && tagslist.length === 0 &&
        <h2> Loading...</h2>
      }
      {!fetching && tagslist.length === 0 &&
        <h2> Empty</h2>
      }
      {tagslist.length > 0 &&
          <div style={{ opacity: fetching ? 0.5 : 1 }}>
            <Tags dispatch={dispatch} tags={tagslist} />
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagslist : state.tags.data,
    fetching : state.tags.fetching,
    fetched : state.tags.fetched,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsBody);
