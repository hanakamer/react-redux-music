const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ARTISTS": {
      return {
        ...state,
        fetching: true,
      };
    }

    case "FETCH_ARTISTS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }

    case "FETCH_ARTISTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.artist || [],
      }
    }

    default: {
      return state;
    }
  }
}
