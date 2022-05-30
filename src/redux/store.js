import {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {favoritesReducer} from "./favoritesReducer";
import {videosListReducer} from "./videosListReducer";

const rootReducer = combineReducers({
    userReducer,
    favoritesReducer,
    videosListReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());