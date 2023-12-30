import { combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "../reducers/movieReducer";
import favoriteReducer from "../reducers/favoriteReducer";

const rootReducer = combineReducers({ reducer, favoriteReducer });

//export const store = createStore(reducer);

export default rootReducer;
