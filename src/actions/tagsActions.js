export function fetchTags() {
  const LASTFM_ENDPOINT = 'http://ws.audioscrobbler.com/2.0';
  const API_KEY='api_key=6442e9ab39a0adbda532ded553b78adb';
  const url =`${LASTFM_ENDPOINT}/?method=chart.gettoptags&${API_KEY}&format=json`;

  return function (dispatch) {
    dispatch({
      type: 'FETCH_TAGS',
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch({type: "FETCH_TAGS_FULFILLED", payload: response.tags})
      })
      .catch(err => {
        dispatch({type: "FETCH_TAGS_REJECTED", payload: err})
      })
  }
}
