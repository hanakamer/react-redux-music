export function fetchArtist(artist) {
  const LASTFM_ENDPOINT = 'http://ws.audioscrobbler.com/2.0';
  const API_KEY='api_key=6442e9ab39a0adbda532ded553b78adb';
  const ARTIST = artist;
  const url =`${LASTFM_ENDPOINT}?method=artist.getinfo&artist=${ARTIST}&${API_KEY}&format=json`;
  return function (dispatch) {
    dispatch({
      type: 'FETCH_ARTIST',
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch({type: "FETCH_ARTIST_FULFILLED", payload: response.artist})
      })
      .catch(err => {
        dispatch({type: "FETCH_ARTIST_REJECTED", payload: err})
      })
  }
}
