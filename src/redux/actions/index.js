export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const addToFavorites = (song) => ({
  type: ADD_TO_FAVORITES,
  payload: song,
});
