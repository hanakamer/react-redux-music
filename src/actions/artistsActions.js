export function fetchArtists(tag) {
  const LASTFM_ENDPOINT = 'http://ws.audioscrobbler.com/2.0';
  const API_KEY='api_key=6442e9ab39a0adbda532ded553b78adb';
  const TAG = tag;
  const url =`${LASTFM_ENDPOINT}?method=tag.gettopartists&tag=${TAG}&${API_KEY}&format=json`;
  return function (dispatch) {
    dispatch({
      type: 'FETCH_ARTISTS',
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch({type: "FETCH_ARTISTS_FULFILLED", payload: response.topartists})
      })
      .catch(err => {
        dispatch({type: "FETCH_ARTISTS_REJECTED", payload: err})
      })
  }
}
