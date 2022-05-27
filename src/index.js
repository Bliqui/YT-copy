import React from 'react';
import ReactDOM from "react-dom/client";
import "../src/assests/styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Videos} from "./components/Videos/Videos";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import "./firebase";
import {FavoritesPage} from "./pages/FavoritesPage/FavoritesPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<App/>}>
                    <Route index element={<Videos/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/favorites'} element={<FavoritesPage/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
