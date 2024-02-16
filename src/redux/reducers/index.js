import { SET_CURRENT_SONG, ADD_TO_FAVORITES } from "../actions";

const initialState = {
  currentSong: null,
  favoriteSongs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteSongs: [...state.favoriteSongs, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
