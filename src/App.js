import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MakeGroup from "./pages/MakeGroup";
import Home from "./pages/Home";
import GroupTransactions from "./pages/GroupTransactions";
import NotFound from "./pages/NotFound";


function App() {

    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        /> <
        Route path = "/groups/create"
        exact component = { MakeGroup }
        /> <
        Route path = "/groups/:id/transactions"
        exact component = { GroupTransactions }
        /> <
        Route component = { NotFound }
        /> <
        /Switch> <
        /BrowserRouter>
    );
}

export default App;