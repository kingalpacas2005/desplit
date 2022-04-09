import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Validation from './pages/Validation';


function App() {

    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/Validation.js"
        exact component = { Validation }
        /> <
        Route component = { NotFound }
        /> <
        /Switch> <
        /BrowserRouter>
    );
}

export default App;