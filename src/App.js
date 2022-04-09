import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/MakeGroup";
import NotFound from "./pages/NotFound";


function App() {
 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/MakeGroup" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
