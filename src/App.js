import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MakeGroup from "./pages/MakeGroup";
import Home from "./pages/Home";
import GroupTransactions from "./pages/GroupTransactions";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";
import Group from './pages/Group';


function App() {

    return ( < BrowserRouter >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Home }
        />  <
        Route path = "/groups/create"
        exact component = { MakeGroup }
        />  <
        Route path = "/groups/:id/transactions"
        exact component = { GroupTransactions }
        />  <
        Route path = "/transaction/create"
        exact component = { GroupTransactions }
        />  <
        Route path = "/transaction/create"
        exact component = { Transaction }
        /> <
        Route component = { NotFound }
        /> </Switch > < /BrowserRouter>
    );
}

export default App;