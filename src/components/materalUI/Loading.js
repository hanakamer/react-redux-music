import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const style = {
  margin: "0  auto",
  textAlign: "center",
}
const Loading = () => (
  <div style={style}>
    <CircularProgress  size={60} thickness={7} />
  </div>
);

export default Loading
