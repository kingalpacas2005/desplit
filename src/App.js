import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GroupCreate from "./pages/GroupCreate";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import GroupTransactions from "./pages/GroupTransactions";
import Transaction from "./pages/Transaction";
import NotFound from "./pages/NotFound";

function App() {

  return (< BrowserRouter >
    <Switch >
      <Route path="/" exact component={Home} />
      <Route path="/groups/" exact component={Groups} />
      <Route path="/groups/create" exact component={GroupCreate} />
      <Route path="/groups/:id/transactions" exact component={GroupTransactions} />
      <Route path="/transaction/create" exact component={Transaction} />
      <Route component={NotFound} />
    </Switch > </BrowserRouter>
  );
}

export default App;