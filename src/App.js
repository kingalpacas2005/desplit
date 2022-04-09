import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MakeGroup from "./pages/MakeGroup";
import Home from "./pages/Home";
import Validation from "./pages/Validation";
import NotFound from "./pages/NotFound";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/MakeGroup" exact component={MakeGroup} />
        <Route path="/Validation" exact component={Validation} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
