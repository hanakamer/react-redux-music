import { combineReducers } from "redux"

import tags from "./tagsReducer";
import artists from "./artistsReducer";
import artist from "./artistReducer"


export default combineReducers({
  tags,
  artists,
  artist,
})
