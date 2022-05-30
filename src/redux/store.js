import {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {favoritesReducer} from "./favoritesReducer";
import {videosListReducer} from "./videosListReducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducerMain = combineReducers({
    userReducer,
    favoritesReducer,
    videosListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducerMain)

export const store = createStore(persistedReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export let persistor = persistStore(store);