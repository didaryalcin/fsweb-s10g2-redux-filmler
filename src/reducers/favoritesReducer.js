import {
    TOGGLE_FAVORITES,
    REMOVE_FAVORITE,
    ADD_FAVORITE,
  } from "../actions/favoritesActions";
  
  const initialState = {
    favorites: [],
    displayFavorites: true,
  };
  
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE:
        let newState = {};
        if (state.favorites.find((item) => item.id === action.payload.id)) {
          newState = { ...state };
        } else {
          newState = {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }
        return newState;
  
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter((item) => action.payload !== item.id),
        };
  
      case TOGGLE_FAVORITES:
        console.log("case");
        return {
          ...state,
          displayFavorites: !state.displayFavorites,
        };
  
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
  