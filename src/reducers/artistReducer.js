const initialState = {
  info: {},
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ARTIST": {
      return {
        ...state,
        fetching: true,
      };
    }

    case "FETCH_ARTIST_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }

    case "FETCH_ARTIST_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        info: action.payload || [],
      }
    }

    default: {
      return state;
    }
  }
}
