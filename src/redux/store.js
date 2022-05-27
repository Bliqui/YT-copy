import {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {favoritesReducer} from "./favoritesReducer";

const rootReducer = combineReducers({
    userReducer,
    favoritesReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());