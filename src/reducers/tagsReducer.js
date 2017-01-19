const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TAGS": {
      return {
        ...state,
        fetching: true,
      };
    }

    case "FETCH_TAGS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }

    case "FETCH_TAGS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.tag || [],
      }
    }

    default: {
      return state;
    }
  }
}
