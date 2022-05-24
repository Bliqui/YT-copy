import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assests/styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Videos} from "./components/Videos/Videos";
import {RegisterPage} from "./Pages/RegisterPage";
import {LoginPage} from "./Pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route index element={<Videos/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
