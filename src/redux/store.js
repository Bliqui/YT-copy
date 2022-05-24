import {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    userReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());